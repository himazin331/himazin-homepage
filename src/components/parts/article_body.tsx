/* ブログ記事コンテンツボディ */

import * as prod from "react/jsx-runtime";
import rehypeRaw from "rehype-raw"; 
import rehypeReact from "rehype-react";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import CodeBlock from "@/components/parts/code_block";

const ArticleBody = ({ markdown }) => {
  return unified()
    .use(remarkParse, {fragment: true})
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true
    })
    .use(rehypeSlug)
    .use(rehypeRaw)
    .use(rehypeReact, {
      //@ts-ignore
      Fragment: prod.Fragment,
      components: {
        code: CodeBlock
      },
      //@ts-ignore
      jsx: prod.jsx,
      //@ts-ignore
      jsxs: prod.jsxs,
      
    })
    .processSync(markdown).result;
};
export default ArticleBody;
