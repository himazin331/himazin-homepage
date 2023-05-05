/* ブログ記事一覧(ジャンル)ページ */

import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import { FaChevronLeft } from "react-icons/fa";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { ArticleCard } from "@/components/parts/article_card";
import { microcms } from "@/libs/microcms";
import style from "@/styles/blog.module.css";
import type { Blog, BlogGenreContentProps, Genre } from "@/types/blog";

export const getStaticPaths: GetStaticPaths = async () => {
  const genres = await microcms.get({ endpoint: "blog_genres" });

  const paths = genres.contents.map((genre: Genre) => `/blog/genres/${genre.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<any> = async (context) => {
  const genre_id = context.params?.id as string;
  const blog = await microcms.get({ endpoint: "blog" });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  let genre_filterd_blog: Blog[] = [];
  blog.contents.map((blogc: Blog) => {
    if (blogc.genre.id === genre_id) {
      genre_filterd_blog.push(blogc);
    }
  });

  return {
    props: {
      blogs: genre_filterd_blog,
      genres: genres.contents,
      tags: tags.contents
    },
  };
};

const BlogGenrePage: NextPage<BlogGenreContentProps> = ({ blogs, genres, tags }) => {
  return (
    <>
      <Head title={`ジャンル:${blogs[0].genre.genre}のブログ記事`} origin_url={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_field}>
            <div className={style.previous_field}>
              <FaChevronLeft style={{marginBottom: "3.5px"}} /><Link href={"/blog"}>記事一覧</Link>
            </div>

            <div className={style.blog_page_field}>
              <h1 className={style.blog_page_title} style={{marginBottom: "20px"}}>{`ジャンル: ${blogs[0].genre.genre}のブログ記事`}</h1>
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

          <div className={style.sidebar}>
            <div className={style.sidebar_item_field}>
              <p className={style.sidebar_header}>ジャンル</p>
              {genres.map((genre) => (
                <>
                  <div><Link key={genre.id} href={`/blog/genres/${genre.id}`}>{genre.genre}</Link></div>
                </>
              ))}
            </div>
            <div className={style.sidebar_item_field}>
              <p className={style.sidebar_header}>タグ</p>
              {tags.map((tag) => (
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
export default BlogGenrePage;
