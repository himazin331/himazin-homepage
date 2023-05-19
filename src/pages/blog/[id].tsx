/* ブログ記事ページ */

import DOMPurify from "isomorphic-dompurify";
import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Prism from "prismjs";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { FaChevronLeft, FaFolder, FaPen, FaSyncAlt, FaTags } from "react-icons/fa";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { ArticleMiniCard } from "@/components/parts/article_card";
import { microcms } from "@/libs/microcms";
import { LANGUAGES } from "@/libs/prismjs_lang";
import style from "@/styles/blog.module.css";
import type { Blog, Genre, Tags, BlogContentProps } from "@/types/blog";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/show-language/prism-show-language.min.js";
import "prismjs/themes/prism-tomorrow.min.css";

interface BlogProps {
  blog: Blog;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blog = await microcms.get({ endpoint: "blog" });

  const paths = blog.contents.map((blog: Blog) => `/blog/${blog.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
  const blogId = context.params?.id as string;
  const blogs = await microcms.get({ endpoint: "blog" });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  const blog: Blog = blogs.contents.find((blog: Blog) => blog.id === blogId);

  return {
    props: {
      blogs: blogs.contents,
      genres: genres.contents,
      tags: tags.contents,
      blog: blog
    },
  };
};

// シンタックスハイライト処理
const highlight_contents = (language: string, sourceCode: string, fileName?: string) => {
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
  sourceCode.split("<br><br>").forEach((lineOfsourceCode) => {
    content += lineOfsourceCode;
  });
  content += "</code></pre>";

  return content;
};

const BlogPage: NextPage<BlogContentProps> = ({ blogs, genres, tags, blog }) => {
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
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_article_field}>
            <div className={style.previous_field}>
              <FaChevronLeft style={{marginBottom: "3.5px"}} /><Link href={"/blog"}>記事一覧</Link>
            </div>

            <div className={style.article_top} style={{marginTop: "10px"}}>
              <FaFolder size="20" />
              <Link className={style.article_info_link} href={`/blog/genre/${blog.genre.id}`} style={{marginRight: "20px"}}>{blog.genre.genre}</Link>
              <FaTags size="20" />
              {blog.tags.map((tag: Tags) => (
                <Link key={tag.id} className={style.article_info_link} href={`/blog/tags/${tag.id}`}>{tag.tag}</Link>
              ))}
              <h1 className={style.article_page_title} style={{marginTop: "10px", marginBottom: "20px"}}>{blog.title}</h1>
              <div style={{textAlign: "right"}}>
                <FaPen /><span className={style.article_info_data}>投稿日: {blog.createdAt}</span>
                <FaSyncAlt /><span className={style.article_info_data}>更新日: {blog.updatedAt}</span>
              </div>
            </div>

            {blog.body.map((body: any, index: number) => {
              return body.fieldId === "rich_editor" ? (
                <div
                  className={style.article_body}
                  key={index}
                  dangerouslySetInnerHTML={{__html: `${DOMPurify.sanitize(body.rich_editor)}`}}
                />
              ) : body.fieldId === "rich_editor_beta" ? (
                <div
                  className={style.article_body}
                  key={index}
                  dangerouslySetInnerHTML={{__html: `${DOMPurify.sanitize(body.rich_editor_beta)}`}}
                />
              ) : body.fieldId === "embedded_contents" ? (
                <div
                  className={style.article_body}
                  key={index}
                  dangerouslySetInnerHTML={{__html: body.embedded_contents}}
                />
              ) : body.fieldId === "code_block" ? (
                <div
                  className={style.article_body + `code-toolbar`}
                  key={index}
                  dangerouslySetInnerHTML={{__html: highlight_contents(body.pg_language[0], body.code_block, body.file_name) || ""}}
                />
              ) : null;
            })}
          </div>

          <div className={style.sidebar}>
            <div className={style.sidebar_item_field}>
              <p className={style.sidebar_header}>記事一覧</p>
              {blogs.slice(0, 3).map((blog: Blog) => (
                <>
                  <ArticleMiniCard key={blog.id} id={blog.id} title={blog.title} createdAt={blog.createdAt}
                    updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                    thumbnailImg={blog.thumbnail_img} />
                  <hr />
                </>
              ))}
            </div>
            <div className={style.sidebar_item_field}>
              <p className={style.sidebar_header}>ジャンル</p>
              {genres.map((genre: Genre) => (
                <>
                  <div><Link key={genre.id} href={`/blog/genres/${genre.id}`}>{genre.genre}</Link></div>
                </>
              ))}
            </div>
            <div className={style.sidebar_item_field}>
              <p className={style.sidebar_header}>タグ</p>
              {tags.map((tag: Tags) => (
                <>
                  <div><Link key={tag.id} href={`/blog/tags/${tag.id}`}>{tag.tag}</Link></div>
                </>
              ))}
            </div>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default BlogPage;
