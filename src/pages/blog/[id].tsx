/* ブログ記事ページ */

import type { ParsedUrlQuery } from "node:querystring";
import DOMPurify from "isomorphic-dompurify";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import Prism from "prismjs";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { FaChevronLeft, FaFolder, FaPen, FaSyncAlt, FaTags } from "react-icons/fa";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { ArticleMiniCard } from "@/components/parts/article_card";
import ArticleOutline from "@/components/parts/article_outline";
import { BlogGenreTagList } from "@/components/parts/blog_genre_tag_list";
import { microcms } from "@/libs/microcms";
import { LANGUAGES } from "@/libs/prismjs_lang";
import style from "@/styles/blog.module.css";
import type { Blog, Tags, ArticleProps } from "@/types/blog";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/show-language/prism-show-language.min.js";
import "prismjs/themes/prism-tomorrow.min.css";

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const blogs = await microcms.get({ endpoint: "blog" });

  const paths = blogs.contents.map((blog: Blog) => `/blog/${blog.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ArticleProps, ParsedUrlQuery> = async (context) => {
  const blogId = context.params?.id as string;
  const blogs = await microcms.get({ endpoint: "blog", queries: {limit: 3, orders: "-publishedAt"} });
  const blog = await microcms.get({ endpoint: "blog", queries: {filters: `id[equals]${blogId}`} });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  return {
    props: {
      blogs: blogs.contents,
      genres: genres.contents,
      tags: tags.contents,
      blog: blog.contents[0]
    },
  };
};

// シンタックスハイライト処理
const highlightContents = (language: string, sourceCode: string, fileName?: string): string | undefined => {
  let content: string = "";
  if (!LANGUAGES.includes(language)) {
    return;
  }

  if (fileName === undefined) {
    content += `<pre class="prism lang-${language} line-numbers">`;
  } else {
    content += `<pre class="prism lang-${language} line-numbers" data-label=${fileName}>`;
  }
  content += `<code class="lang-${language}">`;
  content += sourceCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  content += "</code></pre>";

  return content;
};

const ArticlePage: NextPage<ArticleProps, JSX.Element> = ({ blogs, genres, tags, blog }) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  let date: Date;
  date = new Date(blog.createdAt);
  blog.createdAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");
  date = new Date(blog.updatedAt);
  blog.updatedAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");

  return (
    <>
      <Head title={blog.title} ogImage={blog.thumbnail_img} originUrl={"https://himazin331.com" + useRouter().pathname} />
      {/* Twitter JavaScript */}
      <Script src="https://platform.twitter.com/widgets.js" />
      <div className="wrapper" style={{marginLeft: "20px"}}>
        <Container className="d-flex flex-column flex-lg-row justify-content-center" fluid>
          <div className={style.main_article_field}>
            <div className={style.previous_field}>
              <FaChevronLeft style={{marginBottom: "3.5px"}} /><Link href={"/blog"}>記事一覧</Link>
            </div>

            <div className={style.article_top}>
              <FaFolder size="20" />
              <Link className={style.article_info_link} href={`/blog/genres?id=${blog.genre.id}`} style={{marginRight: "20px"}}>{blog.genre.genre}</Link>
              <FaTags size="20" />
              {blog.tags.map((tag: Tags, idx: number) => (
                <Link key={idx} className={style.article_info_link} href={`/blog/tags?id=${tag.id}`}>{tag.tag}</Link>
              ))}
              <h1 className={style.article_page_title}>{blog.title}</h1>
              <div style={{textAlign: "right"}}>
                <FaPen /><span className={style.article_info_data}>投稿日: {blog.createdAt}</span>
                <FaSyncAlt /><span className={style.article_info_data}>更新日: {blog.updatedAt}</span>
              </div>
            </div>

            <ArticleOutline />

            <div className={style.article_body_field} id="article_body_field">
              {blog.body.map((body: any, idx: number) => {
                return body.fieldId === "rich_editor" ? (
                  <div
                    className={style.article_body}
                    key={idx}
                    dangerouslySetInnerHTML={{__html: `${DOMPurify.sanitize(body.rich_editor)}`}}
                  />
                ) : body.fieldId === "rich_editor_beta" ? (
                  <div
                    className={style.article_body}
                    key={idx}
                    dangerouslySetInnerHTML={{__html: `${DOMPurify.sanitize(body.rich_editor_beta)}`}}
                  />
                ) : body.fieldId === "embedded_contents" ? (
                  <div
                    className={style.article_body}
                    key={idx}
                    dangerouslySetInnerHTML={{__html: body.embedded_contents}}
                  />
                ) : body.fieldId === "code_block" ? (
                  <div
                    className={style.article_body + `code-toolbar`}
                    key={idx}
                    dangerouslySetInnerHTML={{__html: highlightContents(body.pg_language[0], body.code_block, body.file_name) || ""}}
                  />
                ) : null;
              })}
            </div>
          </div>

          <div className={style.sidebar_article}>
            <div className={style.sidebar_item_field}>
              <p className={style.sidebar_header}>記事一覧</p>
              {blogs.map((blog: Blog, idx: number) => (
                <>
                  <ArticleMiniCard key={idx} id={blog.id} title={blog.title} createdAt={blog.createdAt}
                    updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                    thumbnailImg={blog.thumbnail_img} />
                  <hr />
                </>
              ))}
              <Link href="/blog">もっとみる...</Link>
            </div>

            <BlogGenreTagList genres={genres} tags={tags} />
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default ArticlePage;
