import Link from "next/link";
import style from "@/styles/blog.module.css";
import type { Genre, Tags } from "@/types/blog";

interface GenreTagListProps {
  genres: Genre[];
  tags: Tags[];
}

export const BlogGenreTagList: React.FC<GenreTagListProps> = ({genres, tags}) => {
  return (
    <>
      <div className={style.sidebar_item_field}>
        <p className={style.sidebar_header}>ジャンル</p>
        {genres.map((genre: Genre, idx: number) => (
          <>
            <div><Link key={idx} href={`/blog/genres?id=${genre.id}`}>{genre.genre}</Link></div>
          </>
        ))}
      </div>
      <div className={style.sidebar_item_field}>
        <p className={style.sidebar_header}>タグ</p>
        {tags.map((tag: Tags, idx: number) => (
          <>
            <div><Link key={idx} href={`/blog/tags?id=${tag.id}`}>{tag.tag}</Link></div>
          </>
        ))}
      </div>
    </>
  );
};
export default BlogGenreTagList;