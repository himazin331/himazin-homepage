/* ブログ記事一覧(タグ)ページ */

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
import type { Blog, BlogTagContentProps, Genre, Tags } from "@/types/blog";

export const getStaticPaths: GetStaticPaths = async () => {
  const genres = await microcms.get({ endpoint: "blog_tags" });

  const paths = genres.contents.map((tag: Genre) => `/blog/tags/${tag.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<any> = async (context) => {
  const tagId = context.params?.id as string;
  const blog = await microcms.get({ endpoint: "blog" });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  let tagFilteredBlog: Blog[] = [];
  blog.contents.map((blogc: Blog) => {
    if (blogc.tags.some(tag => tag.id === tagId)) {
      tagFilteredBlog.push(blogc);
    }
  });
  const tag: Tags = tags.contents.find((tag: Tags) => tag.id === tagId);

  return {
    props: {
      blogs: tagFilteredBlog,
      genres: genres.contents,
      tags: tags.contents,
      tag: tag
    },
  };
};

const BlogTagPage: NextPage<BlogTagContentProps> = ({ blogs, genres, tags, tag }) => {
  return (
    <>
      <Head title={`タグ:${tag.tag}のブログ記事`} originUrl={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_field}>
            <div className={style.previous_field}>
              <FaChevronLeft style={{marginBottom: "3.5px"}} /><Link href={"/blog"}>記事一覧</Link>
            </div>

            <div className={style.blog_page_field}>
              <h1 className={style.blog_page_title} style={{marginBottom: "20px"}}>{`タグ: ${tag.tag}のブログ記事`}</h1>
              <p className="p-h5replace">よわよわ園児ニアによる備忘録/メモ書きみたいなブログです。</p>
            </div>
            {blogs.map((blog) => (
              <>
                <hr />
                <ArticleCard key={blog.id} id={blog.id} title={blog.title} createdAt={blog.createdAt}
                  updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                  thumbnailImg={blog.thumbnail_img} />
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
export default BlogTagPage;
