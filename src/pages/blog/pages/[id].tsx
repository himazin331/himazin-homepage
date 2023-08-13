/* ブログ一覧(ページネーション)ページ */

import type { ParsedUrlQuery } from "node:querystring";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { ArticleCard } from "@/components/parts/article_card";
import BlogGenreTagList from "@/components/parts/blog_genre_tag_list";
import ArticlePagination from "@/components/parts/pagination";
import { microcms } from "@/libs/microcms";
import style from "@/styles/blog.module.css";
import type { Blog, BlogGeneralPageProps } from "@/types/blog";

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
    const PER_PAGE: number = 7;

    const blogs = await microcms.get({ endpoint: "blog" });
    const range = (start: number, end: number) => 
        [...Array(end - start + 1)].map((_, i) => start + i);
    const paths = range(1, Math.ceil(blogs.totalCount / PER_PAGE)).map((pagesIdx) => `/blog/pages/${pagesIdx}`);
    return { paths, fallback: false };
  };

export const getStaticProps: GetStaticProps<BlogGeneralPageProps, ParsedUrlQuery> = async (context) => {
  const pagesIdx: number = Number(context.params?.id as string ?? 1);
  const blogs = await microcms.get({ endpoint: "blog", queries: { offset: (pagesIdx - 1) * 1, limit: 7 }});
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  return {
    props: {
      blogs: blogs.contents,
      genres: genres.contents,
      tags: tags.contents,
      totalCount: blogs.totalCount,
      pagesIdx: pagesIdx
    },
  };
};

const BlogPage: NextPage<BlogGeneralPageProps, JSX.Element> = ({ blogs, genres, tags, totalCount, pagesIdx }) => {
  return (
    <>
      <Head title="Blog" description="ゆるゆるITエンジニアhimazin331による備忘録/メモ書きみたいなブログ" originUrl={"https://himazin331.com" + useRouter().asPath} />
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_field}>
            <div className={style.blog_page_field}>
              <h1 className={style.blog_page_title}>himazin331の技術ブログ</h1>
              <p className="p-h5replace">よわよわ園児ニアによる備忘録/メモ書きみたいなブログです。</p>
              {blogs.map((blog: Blog, idx: number) => (
                <div key={idx}>
                  <hr />
                  <ArticleCard id={blog.id} title={blog.title} publishedAt={blog.publishedAt}
                    updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                    thumbnailImg={blog.thumbnail_img} />
                </div>
              ))}
            </div>

            <ArticlePagination totalCount={totalCount} pagesIdx={pagesIdx} />
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
