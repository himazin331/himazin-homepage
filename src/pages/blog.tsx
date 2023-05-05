/* ブログ一覧ページ */

import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { ArticleCard } from "@/components/parts/article_card";
import { microcms } from "@/libs/microcms";
import style from "@/styles/blog.module.css";
import type { Blog, BlogContentProps, Genre, Tags } from "@/types/blog";

export const getStaticProps: GetStaticProps = async () => {
  const blog = await microcms.get({ endpoint: "blog" });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  return {
    props: {
      blogs: blog.contents,
      genres: genres.contents,
      tags: tags.contents
    },
  };
};

const BlogPage: NextPage<BlogContentProps> = ({ blogs, genres, tags }) => {
  return (
    <>
      <Head title="Blog" origin_url={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_field}>
            <div className={style.blog_page_field}>
              <h1 className={style.blog_page_title} style={{marginBottom: "20px"}}>himazin331の技術ブログ</h1>
              <p className="p-h5replace">よわよわ園児ニアによる備忘録/メモ書きみたいなブログです。</p>
            </div>
            {blogs.map((blog: Blog) => (
              <>
                <hr />
                <ArticleCard key={blog.id} id={blog.id} title={blog.title} createdAt={blog.createdAt}
                  updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                  thumbnail_img={blog.thumbnail_img} />
              </>
            ))}
          </div>

          <div className={style.sidebar}>
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
