/* ブログ記事ページ */

import DOMPurify from "isomorphic-dompurify";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { highlight, languages } from "prismjs";
import Container from "react-bootstrap/Container";
import { FaFolder, FaPen, FaSyncAlt, FaTags } from "react-icons/fa";
import Footer from "@/components/footer";
import Head from "@/components/head";
import { microcms } from "@/libs/microcms";
import { LANGUAGES } from "@/libs/prismjs_lang";
import style from "@/styles/blog.module.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/show-language/prism-show-language.min.js";
import "prismjs/themes/prism-tomorrow.min.css";


const highlight_contents = (language: string, sourceCode: string) => {
  let content = "";
  if (!LANGUAGES.includes(language)) {
    return;
  }
  console.log(sourceCode);
  content += `<pre class="lang-${language} line-numbers"><code class="lang-${language}" >`;
  sourceCode.split("<br>").forEach((lineOfsourceCode) => {
    content += highlight(lineOfsourceCode, languages[language], language);
  });
  content += "</code></pre>";

  return content;
};

const BlogPage: NextPage<any> = ({blog}) => {
  let date: Date;
  date = new Date(blog.createdAt);
  blog.createdAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");
  date = new Date(blog.updatedAt);
  blog.updatedAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");

  return (
    <>
      <Head title={blog.title} og_image={blog.thumbnail_img} origin_url={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <Container>
          <div className={style.main_pain}>
            <Link href={"/blog"}>記事一覧</Link>

            <div className={style.top_field} style={{marginTop: "10px"}}>
              <FaFolder size="20" />
              <Link className={style.article_info_link} href={`/blog/genre/${blog.genre.id}`} style={{marginRight: "20px"}}>{blog.genre.genre}</Link>
              <FaTags size="20" />
              {blog.tags.map((tag: any) => (
                <Link key={tag.id} className={style.article_info_link} href={`/blog/tags/${tag.id}`}>{tag.tag}</Link>
              ))}
              <h1 className={style.blog_top_title} style={{marginTop: "10px", marginBottom: "20px"}}>{blog.title}</h1>
              <div style={{textAlign: "right"}}>
                <FaPen /><span className={style.article_info_data}>投稿日: {blog.createdAt}</span>
                <FaSyncAlt /><span className={style.article_info_data}>更新日: {blog.updatedAt}</span>
              </div>
            </div>

            {blog.body.map((body: any, index: number) => {
              return body.fieldId === "rich_editor" ? (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{__html: `${DOMPurify.sanitize(body.rich_editor)}`}}
                />
              ) : body.fieldId === "rich_editor_beta" ? (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{__html: `${DOMPurify.sanitize(body.rich_editor_beta)}`}}
                />
              ) : body.fieldId === "embedded_contents" ? (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{__html: body.embedded_contents}}
                />
              ) : body.fieldId === "code_block" ? (
                <div
                  key={index}
                  code-toolbar
                  dangerouslySetInnerHTML={{__html: highlight_contents(body.pg_language[0], DOMPurify.sanitize(body.code_block))}}
                />
              ) : null;
            })}
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default BlogPage;


// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await microcms.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await microcms.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};