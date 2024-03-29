/* ブログ記事ページ */

import type { ParsedUrlQuery } from "node:querystring";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import Container from "react-bootstrap/Container";
import { FaChevronLeft, FaFolder, FaPen, FaSyncAlt, FaTags } from "react-icons/fa";
import Footer from "@/components/footer";
import Head from "@/components/head";
import ArticleBody from "@/components/parts/article_body";
import { ArticleMiniCard } from "@/components/parts/article_card";
import ArticleOutline from "@/components/parts/article_outline";
import BlogGenreTagList from "@/components/parts/blog_genre_tag_list";
import { microcms } from "@/libs/microcms";
import Custom404 from "@/pages/404";
import style from "@/styles/blog.module.css";
import type { Blog, Tags, ArticleProps } from "@/types/blog";

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const blogs = await microcms.get({ endpoint: "blog" });
  const paths = blogs.contents.map((blog: Blog) => `/blog/${blog.id}`);
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<ArticleProps, ParsedUrlQuery> = async (context) => {
  const blogId = context.params?.id as string;
  const blogs = await microcms.get({ endpoint: "blog", queries: { limit: 3, orders: "-publishedAt" } });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });
  const blog = await microcms.get({ endpoint: "blog", queries: { filters: `id[equals]${blogId}` } });

  return {
    props: {
      blogs: blogs.contents,
      genres: genres.contents,
      tags: tags.contents,
      blog: blog.contents[0]
    },
  };
};

const ArticlePage: NextPage<ArticleProps, JSX.Element> = ({ blogs, genres, tags, blog }) => {
  const asPath: string = useRouter().asPath;

  if (!blog) {
    return <Custom404 />;
  }

  let date: Date;
  date = new Date(blog.publishedAt);
  blog.publishedAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");
  date = new Date(blog.updatedAt);
  blog.updatedAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");

  return (
    <>
      <Head title={blog.title} description={blog.thumbnail} ogImage={blog.thumbnail_img} originUrl={"https://himazin331.com" + asPath} />
      {/* Twitter JavaScript */}
      <Script src="https://platform.twitter.com/widgets.js" />
      <div className="wrapper">
        <Container className="d-flex flex-column flex-lg-row justify-content-center" fluid>
          <div className={style.main_article_field}>
            <div className={style.previous_field}>
              <FaChevronLeft style={{marginBottom: "3.5px"}} /><Link href={"/blog"}>記事一覧</Link>
            </div>

            <div className={style.article_top}>
              <FaFolder size="20" />
              <Link className={style.article_info_link} href={`/blog/genres/${blog.genre.id}`} style={{marginRight: "20px"}}>{blog.genre.genre}</Link>
              <FaTags size="20" />
              {blog.tags.map((tag: Tags, idx: number) => (
                <Link key={idx} className={style.article_info_link} href={`/blog/tags/${tag.id}`}>{tag.tag}</Link>
              ))}
              <h1 className={style.article_page_title}>{blog.title}</h1>
              <div style={{textAlign: "right"}}>
                <div><FaPen /><span className={style.article_info_data}>投稿日: {blog.publishedAt}</span></div>
                <div><FaSyncAlt /><span className={style.article_info_data}>更新日: {blog.updatedAt}</span></div>
              </div>
            </div>

            <ArticleOutline />

            <div className={style.article_body_field} id="article_body_field">
              <ArticleBody markdown={blog.body} />
            </div>
          </div>

          <div className={style.sidebar_article}>
            <div className={style.sidebar_item_field}>
              <p className={style.sidebar_header}>記事一覧</p>
              {blogs.map((blog: Blog, idx: number) => (
                <div key={idx}>
                  <ArticleMiniCard id={blog.id} title={blog.title} publishedAt={blog.publishedAt}
                    updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                    thumbnailImg={blog.thumbnail_img} />
                  <hr />
                </div>
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
