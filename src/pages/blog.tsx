/* ブログページ */

import { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";
import ArticleCard from "@/components/parts/article_card";
import { microcms } from "@/libs/microcms";
import style from "@/styles/blog.module.css";
import type { Blog, Genre, Tags } from "@/types/blog";

export const getStaticProps = async () => {
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

type BlogContentProps = {
    blogs: Blog[];
    genres: Genre[];
    tags: Tags[];
}

const Blog: NextPage<BlogContentProps> = ({ blogs, genres, tags }) => {
  return (
    <>
      <Head title="Blog" origin_url={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <Container>
          <div className={style.main_pain}>
            <div className={style.top_field}>
              <h1 className={style.blog_top_title} style={{marginBottom: "20px"}}>himazin331の技術ブログ</h1>
              <p className="p-h5replace">よわよわ園児ニアによる備忘録/メモ書きみたいなブログです。</p>
            </div>
            {blogs.map((blog) => (
              <>
                <hr />
                <ArticleCard key={blog.id} id={blog.id} title={blog.title} createdAt={blog.createdAt}
                  updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                  thumbnail_img={blog.thumbnail_img} />
              </>
            ))}
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default Blog;
