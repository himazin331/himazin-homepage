/* ブログ記事一覧(タグ)ページ */

import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import type { NextRouter } from "next/router";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { ArticleCard } from "@/components/parts/article_card";
import { BlogGenreTagList } from "@/components/parts/blog_genre_tag_list";
import { microcms } from "@/libs/microcms";
import style from "@/styles/blog.module.css";
import type { Blog, Tags, BlogGeneralPageProps } from "@/types/blog";

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await microcms.get({ endpoint: "blog" });
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  return {
    props: {
      blogs: blogs.contents,
      genres: genres.contents,
      tags: tags.contents,
    },
  };
};

const BlogTagsPage: NextPage<BlogGeneralPageProps> = ({ blogs, genres, tags }) => {
  const router: NextRouter = useRouter();
  const { id } = router.query;
  const tag: Tags | undefined = id !== undefined ? tags.find((tag: Tags) => tag.id === id) : undefined;

  return (
    <>
      {tag === undefined ?
        <Head title="タグ一覧" originUrl={"https://himazin331.com/blog/tags"} /> :
        <Head title={`タグ:${tag.tag}のブログ記事`} originUrl={`https://himazin331.com/blog/tags?id=${id}`} />
      }
      
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_field}>
            <div className={style.previous_field}>
              <Breadcrumb>
                <Breadcrumb.Item href="/blog">トップ</Breadcrumb.Item>
                {tag === undefined ?
                  <>
                    <Breadcrumb.Item active>タグ一覧</Breadcrumb.Item>
                  </>
                  :
                  <>
                    <Breadcrumb.Item href="/blog/tags">タグ一覧</Breadcrumb.Item>
                    <Breadcrumb.Item active>{tag.tag}</Breadcrumb.Item>
                  </>
                }
              </Breadcrumb>
            </div>

            {tag === undefined ?
              <div className={style.blog_page_field}>
                <h1 className={style.blog_page_title}>タグ一覧</h1>
                <div className="row row-cols-auto">
                  {tags.map((tag: Tags, idx: number) => (
                    <div key={idx} className="col text-center" style={{whiteSpace: "nowrap", margin: "10px"}}>
                      <Link href={`/blog/tags?id=${tag.id}`}>{tag.tag}</Link>
                    </div>
                  ))}
                </div>
              </div>
              :
              <div className={style.blog_page_field}>
                <h1 className={style.blog_page_title}>{`タグ: ${tag.tag}のブログ記事`}</h1>
                {blogs.map((blog: Blog, idx: number) => {
                  if (blog.tags.some(tag => tag.id === id)) {
                    return (
                      <>
                        <hr />
                        <ArticleCard key={idx} id={blog.id} title={blog.title} createdAt={blog.createdAt}
                          updatedAt={blog.updatedAt} genre={blog.genre} tags={blog.tags} thumbnail={blog.thumbnail}
                          thumbnailImg={blog.thumbnail_img} />
                      </>
                    );
                  }
                })}
              </div>
            }
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
export default BlogTagsPage;
