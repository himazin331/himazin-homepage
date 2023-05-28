/* ブログ一覧ページ */

import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { ArticleCard } from "@/components/parts/article_card";
import { BlogGenreTagList } from "@/components/parts/blog_genre_tag_list";
import { microcms } from "@/libs/microcms";
import style from "@/styles/blog.module.css";
import type { Blog, BlogGeneralPageProps } from "@/types/blog";

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await microcms.get({ endpoint: "blog" });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  return {
    props: {
      blogs: blogs.contents,
      genres: genres.contents,
      tags: tags.contents
    },
  };
};

const BlogPage: NextPage<BlogGeneralPageProps> = ({ blogs, genres, tags }) => {
  return (
    <>
      <Head title="Blog" originUrl="https://himazin331.com/blog" />
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_field}>
            <div className={style.blog_page_field}>
              <h1 className={style.blog_page_title}>himazin331の技術ブログ</h1>
              <p className="p-h5replace">よわよわ園児ニアによる備忘録/メモ書きみたいなブログです。</p>
              {blogs.map((blog: Blog, idx: number) => (
                <>
                  <hr />
                  <ArticleCard key={idx} id={blog.id} title={blog.title} createdAt={blog.createdAt}
                    updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                    thumbnailImg={blog.thumbnail_img} />
                </>
              ))}
            </div>
          </div>

          <div className={style.sidebar}>
            <BlogGenreTagList genres={genres} tags={tags} />
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default BlogPage;
