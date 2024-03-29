/* ジャンル&タグリスト */

import Link from "next/link";
import style from "@/styles/blog.module.css";
import type { Genre, Tags, GenreTagListProps } from "@/types/blog";

const BlogGenreTagList: React.FC<GenreTagListProps> = ({genres, tags}): React.ReactElement => {
  return (
    <>
      <div className={style.sidebar_item_field}>
        <p className={style.sidebar_header}>ジャンル</p>
        {genres.map((genre: Genre, idx: number) => (
          <div key={idx}>
            <Link href={`/blog/genres/${genre.id}`}>{genre.genre}</Link>
          </div>
        ))}
        <Link href="/blog/genres">もっとみる...</Link>
      </div>
      <div className={style.sidebar_item_field}>
        <p className={style.sidebar_header}>タグ</p>
        {tags.map((tag: Tags, idx: number) => (
          <div key={idx}>
            <Link href={`/blog/tags/${tag.id}`}>{tag.tag}</Link>
          </div>
        ))}
        <Link href="/blog/tags">もっとみる...</Link>
      </div>
    </>
  );
};
export default BlogGenreTagList;
