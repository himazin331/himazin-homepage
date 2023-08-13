/* ブログ ジャンル別記事一覧ページ */

import type { ParsedUrlQuery } from "node:querystring";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { ArticleCard } from "@/components/parts/article_card";
import BlogGenreTagList from "@/components/parts/blog_genre_tag_list";
import { microcms } from "@/libs/microcms";
import Custom404 from "@/pages/404";
import style from "@/styles/blog.module.css";
import type { Blog, BlogGenreContentProps, Genre } from "@/types/blog";

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const paths = genres.contents.map((genre: Genre) => `/blog/genres/${genre.id}`);
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<BlogGenreContentProps, ParsedUrlQuery> = async (context) => {
  const genreId: string = context.params?.id as string;
  const blogs = await microcms.get({ endpoint: "blog", queries: { filters: `genre[equals]${genreId}` } });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });
  const genre: Genre = genres.contents.find((genre: Genre) => genre.id === genreId);

  return {
    props: {
      blogs: blogs.contents,
      genres: genres.contents,
      tags: tags.contents,
      genre: genre
    },
  };
};

const BlogGenrePage: NextPage<BlogGenreContentProps, JSX.Element> = ({ blogs, genres, tags, genre }) => {
  const asPath: string = useRouter().asPath;

  if (!genre) {
    return <Custom404 />;
  }
  
  return (
    <>
      <Head title={`ジャンル:${genre.genre}のブログ記事`} originUrl={"https://himazin331.com" + asPath} />
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_field}>
            <div className={style.previous_field}>
              <Breadcrumb>
                <Breadcrumb.Item href="/blog">トップ</Breadcrumb.Item>
                  <Breadcrumb.Item href="/blog/genres">ジャンル一覧</Breadcrumb.Item>
                  <Breadcrumb.Item active>{genre.genre}</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div className={style.blog_page_field}>
              <h1 className={style.blog_page_title}>{`ジャンル: ${genre.genre}のブログ記事`}</h1>
              {blogs.map((blog: Blog, idx: number) => (
                <div key={idx}>
                  <hr />
                  <ArticleCard id={blog.id} title={blog.title} publishedAt={blog.publishedAt}
                    updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                    thumbnailImg={blog.thumbnail_img} />
                </div>
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
export default BlogGenrePage;