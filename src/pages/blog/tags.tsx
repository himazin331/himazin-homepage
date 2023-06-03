/* ブログ タグ一覧ページ */

import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";
import BlogGenreTagList from "@/components/parts/blog_genre_tag_list";
import { microcms } from "@/libs/microcms";
import style from "@/styles/blog.module.css";
import type { Tags, GenreTagListProps } from "@/types/blog";

export const getStaticProps: GetStaticProps<GenreTagListProps> = async () => {
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  return {
    props: {
      genres: genres.contents,
      tags: tags.contents,
    },
  };
};

const BlogTagsPage: NextPage<GenreTagListProps, JSX.Element> = ({ genres, tags }) => {
  return (
    <>
      <Head title="タグ一覧" originUrl={"https://himazin331.com/blog/tags"} />
      <div className="wrapper">
        <Container className="d-flex flex-column flex-md-row justify-content-center" fluid>
          <div className={style.main_field}>
            <div className={style.previous_field}>
              <Breadcrumb>
                <Breadcrumb.Item href="/blog">トップ</Breadcrumb.Item>
                <Breadcrumb.Item active>タグ一覧</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div className={style.blog_page_field}>
              <h1 className={style.blog_page_title}>タグ一覧</h1>
              <div className="row row-cols-auto">
                {tags.map((tag: Tags, idx: number) => (
                  <div key={idx} className="col text-center" style={{whiteSpace: "nowrap", margin: "10px"}}>
                    <Link href={`/blog/tags/${tag.id}`}>{tag.tag}</Link>
                  </div>
                ))}
              </div>
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
export default BlogTagsPage;
