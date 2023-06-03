/* 記事目次 */

import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import style from "@/styles/blog.module.css";

interface headingData {
  id: string;
  tag: string;
  text: string;
}

const ArticleOutline: React.FC = (): React.ReactElement => {
  const asPath: string = useRouter().asPath;
  const [headings, setHeadings] = useState<headingData[]>([]);

  useEffect(() => {
    const articleBody: HTMLElement  = document.getElementById("article_body_field") || document.body;
    const headingTags: HTMLHeadingElement[] = Array.from(articleBody.querySelectorAll("h2, h3, h4, h5")) as HTMLHeadingElement[];
    if (headingTags.length > 0)
    {
      const headingData: headingData[] = headingTags.map((htag: HTMLHeadingElement) => {
        return {
          id: htag.id,
          tag: htag.tagName.toLowerCase(),
          text: htag.innerText
        };
      });
      setHeadings(headingData);
    } else {
      setHeadings([]);
    }
  }, [asPath]);

  return (
    headings.length > 0? 
    <>
      <div className={style.article_outline}>
        <span style={{fontSize: "18px"}}>目次</span>
        <ul>
          {headings.map((heading: headingData, idx: number) => (
            <li key={idx}>
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
    :
    <></>
  );
};
export default ArticleOutline;