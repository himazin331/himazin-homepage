/* ブログ一覧アイテム */

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaFolder, FaPen, FaSyncAlt, FaTags } from "react-icons/fa";
import style from "@/styles/blog.module.css";
import type { Genre, Tags, Thumbnail } from "@/types/blog";

interface ArticleCardProps {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  genre: Genre;
  tags: Tags[];
  thumbnail: string;
  thumbnail_img: Thumbnail;
}

const ArticleCard: NextPage<ArticleCardProps> = ({id, title, createdAt, updatedAt, 
                                                  genre, tags, thumbnail, thumbnail_img}) => {
  let date: Date;
  date = new Date(createdAt);
  createdAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");
  date = new Date(updatedAt);
  updatedAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");

  return (
    <Row className={style.article_listitem}>
      <Col md="4">
        <Link href={`/blog/${id}`} passHref>
          {thumbnail_img === undefined?
            <Image className={style.thumbnail_img + ` img-fluid`} src="/images/noimage.jpg" alt="サムネイル画像" height="200" width="200" />
            :
            <img className={style.thumbnail_img + ` img-fluid`} src={thumbnail_img.url} alt="サムネイル画像"/>
          }
        </Link>
      </Col>
    
      <Col className={style.article_overview}>
        <p className={style.article_title}>
          <Link className={style.article_title_link} href={`/blog/${id}`}>{title}</Link>
        </p>
        <p className={style.article_info}>
            <FaPen /><span className={style.article_info_data}>投稿日: {createdAt}</span>
            <FaSyncAlt /><span className={style.article_info_data}>更新日: {updatedAt}</span>
            <FaFolder />
            <Link className={style.article_info_link} href={`/blog/genre/${genre.id}`}>{genre.genre}</Link>
            <FaTags />
            {tags.map((tag) => (
              <Link key={tag.id} className={style.article_info_link} href={`/blog/tags/${tag.id}`}>{tag.tag}</Link>
            ))}
        </p>
        <div className={style.article_overview + " d-none d-md-inline"}>
          {thumbnail}
        </div>
      </Col>
    </Row>
  );
};
export default ArticleCard;