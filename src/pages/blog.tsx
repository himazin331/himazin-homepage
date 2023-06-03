/* ブログ一覧ページ */

import type { GetStaticProps, NextPage } from "next";
import { microcms } from "@/libs/microcms";
import BlogPage from "@/pages/blog/pages/[id]";
import type { BlogGeneralPageProps } from "@/types/blog";

export const getStaticProps: GetStaticProps<BlogGeneralPageProps> = async () => {
  const blogs = await microcms.get({ endpoint: "blog", queries: { offset: 0, limit: 7 }});
  const genres = await microcms.get({ endpoint: "blog_genres" });
  const tags = await microcms.get({ endpoint: "blog_tags" });

  return {
    props: {
      blogs: blogs.contents,
      genres: genres.contents,
      tags: tags.contents,
      totalCount: blogs.totalCount,
      pagesIdx: 1
    },
  };
};

const BlogTopPage: NextPage<BlogGeneralPageProps, JSX.Element> = (props) => {
  return (
    <BlogPage {...props} />
  );
};
export default BlogTopPage;
