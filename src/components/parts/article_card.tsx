/* ブログ一覧アイテム */

import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  thumbnailImg: Thumbnail;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({id, title, createdAt, updatedAt, 
                                                  genre, tags, thumbnail, thumbnailImg}) => {
  let date: Date;
  date = new Date(createdAt);
  createdAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");
  date = new Date(updatedAt);
  updatedAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");

  return (
    <Row className={style.article_listitem}>
      <Col md="4">
        <Link href={`/blog/${id}`} passHref>
          {thumbnailImg === undefined?
            <Image className={style.thumbnail_img + ` img-fluid`} src="/images/noimage.jpg" alt="サムネイル画像" 
              width="356" height="200"/>
            :
            <Image className={style.thumbnail_img + ` img-fluid`} src={thumbnailImg.url} alt="サムネイル画像" height={thumbnailImg.height} width={thumbnailImg.width} />
          }
        </Link>
      </Col>
    
      <Col>
        <p className={style.article_title}>
          <Link className={style.article_title_link} href={`/blog/${id}`}>{title}</Link>
        </p>
        <p className={style.article_info}>
          <FaPen /><span className={style.article_info_data}>投稿日: {createdAt}</span>
          <FaSyncAlt /><span className={style.article_info_data}>更新日: {updatedAt}</span>
          <span className="d-block d-md-inline">
            <FaFolder />
            <Link className={style.article_info_link} href={`/blog/genres/${genre.id}`}>{genre.genre}</Link>
            <FaTags />
            {tags.map((tag: Tags, idx: number) => (
              <Link key={idx} className={style.article_info_link} href={`/blog/tags/${tag.id}`} style={{marginRight: "2px"}}>{tag.tag}</Link>
            ))}
          </span>
        </p>
        <div className="d-none d-md-inline">
          {thumbnail}
        </div>
      </Col>
    </Row>
  );
};

export const ArticleMiniCard: React.FC<ArticleCardProps> = ({id, title, createdAt, updatedAt, 
                                                      genre, tags, thumbnail, thumbnailImg}) => {
  let date: Date;
  date = new Date(createdAt);
  createdAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");
  date = new Date(updatedAt);
  updatedAt = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }).slice(0, -3).replace("T", " ");

  return (
    <Row className={style.article_listitem}>
      <Col>
        <Link href={`/blog/${id}`} passHref>
          {thumbnailImg === undefined?
            <Image className={style.thumbnail_img_mini + ` img-fluid`} src="/images/noimage.jpg" alt="サムネイル画像"
              width="356" height="200" />
          :
            <Image className={style.thumbnail_img_mini + ` img-fluid`} src={thumbnailImg.url} alt="サムネイル画像" height={thumbnailImg.height} width={thumbnailImg.width} />
          }
        </Link>

        <p className={style.article_title}>
          <Link className={style.article_title_link} href={`/blog/${id}`}>{title}</Link>
        </p>
        <p className={style.article_info} style={{marginBottom: "0", paddingBottom: "0"}}>
          <FaPen /><span className={style.article_info_data}>投稿日: {createdAt}</span>
          <FaSyncAlt /><span className={style.article_info_data}>更新日: {updatedAt}</span>
          <span className="d-block">
            <FaFolder />
            <Link className={style.article_info_link} href={`/blog/genres/${genre.id}`}>{genre.genre}</Link>
            <FaTags />
            {tags.map((tag: Tags, idx: number) => (
              <Link key={idx} className={style.article_info_link} href={`/blog/tags/${tag.id}`} style={{marginRight: "2px"}}>{tag.tag}</Link>
            ))}
          </span>
        </p>
      </Col>
    </Row>
  );
};