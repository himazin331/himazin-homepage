/* ブログ タグ別記事一覧ページ */

import type { ParsedUrlQuery } from "node:querystring";
import type { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { ArticleCard } from "@/components/parts/article_card";
import { BlogGenreTagList } from "@/components/parts/blog_genre_tag_list";
import { microcms } from "@/libs/microcms";
import style from "@/styles/blog.module.css";
import type { Blog, BlogTagContentProps, Tags } from "@/types/blog";

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  const tags = await microcms.get({ endpoint: "blog_tags" });
  const paths = tags.contents.map((tag: Tags) => `/blog/tags/${tag.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogTagContentProps, ParsedUrlQuery> = async (context) => {
  const tagId: string = context.params?.id as string;
  const blogs = await microcms.get({ endpoint: "blog", queries: {filters: `tags[contains]${tagId}`}  });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });
  const tag: Tags = tags.contents.find((tag: Tags) => tag.id === tagId);

  return {
    props: {
      blogs: blogs.contents,
      genres: genres.contents,
      tags: tags.contents,
      tag: tag
    },
  };
};

const BlogTagPage: NextPage<BlogTagContentProps, JSX.Element> = ({ blogs, genres, tags, tag }) => {
  return (
    <>
      <Head title={`タグ:${tag.tag}のブログ記事`} originUrl={"https://himazin331.com" + useRouter().asPath} />
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_field}>
            <div className={style.previous_field}>
              <Breadcrumb>
                <Breadcrumb.Item href="/blog">トップ</Breadcrumb.Item>
                  <Breadcrumb.Item href="/blog/tags">タグ一覧</Breadcrumb.Item>
                  <Breadcrumb.Item active>{tag.tag}</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div className={style.blog_page_field}>
              <h1 className={style.blog_page_title}>{`タグ: ${tag.tag}のブログ記事`}</h1>
            </div>
            {blogs.map((blog: Blog, idx: number) => (
              <>
                <hr />
                <ArticleCard key={idx} id={blog.id} title={blog.title} createdAt={blog.createdAt}
                  updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                  thumbnailImg={blog.thumbnail_img} />
              </>
            ))}
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
export default BlogTagPage;