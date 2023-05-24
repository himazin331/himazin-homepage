/* 記事目次 */

import React, {useEffect, useState} from "react";
import style from "@/styles/blog.module.css";

interface headingData {
  id: string;
  tag: string;
  text: string;
}

const ArticleOutline: React.FC = () => {
  const [headings, setHeadings] = useState<headingData[]>([]);

  useEffect(() => {
    const articleBody: HTMLElement  = document.getElementById("article_body_field") || document.body;
    const headingTags: HTMLHeadingElement[] = Array.from(articleBody.querySelectorAll("h2, h3, h4, h5")) as HTMLHeadingElement[];
    const headingData: headingData[] = headingTags.map((htag: HTMLHeadingElement) => {
      return {
        id: htag.id,
        tag: htag.tagName.toLowerCase(),
        text: htag.innerText
      };
    });

    setHeadings(headingData);
  }, []);

  return (
    <div className={style.article_outline}>
      <ul>
        {headings.map((heading: headingData, idx: number) => (
          <li key={idx}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArticleOutline;