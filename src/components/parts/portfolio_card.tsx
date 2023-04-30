/* ポートフォリオカード */

import type { NextPage } from "next";
import Image from "next/image";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import style from "@/styles/portfolio.module.css";

interface PortfolioCardProps {
  image_path?: string;
  image_alt?: string;
  badge?: string;
  title: string;
  keywords: string[];
  sentence: string;
  href_idx?: string;
}

const PortfolioCard: NextPage<PortfolioCardProps> = ({image_path, image_alt, badge, title, keywords, sentence, href_idx}) => {
  if (image_path === undefined) {
    image_path = "/images/portfolio/noimage.jpg";
  }
  if (!Array.isArray(keywords)) {
    keywords = [keywords];
  }
  let button_text: string = "More";
  let href: string = "";
  if (href_idx === undefined) {
    button_text = "No details";
  } else {
    href = "#portfolio"+ href_idx + "_md";
  }

  return (
    <Col className={style.portfolio_card} md="2" sm="2">
      <Card className="h-100">
        <a href={href} data-bs-toggle="modal"><Image className="card-img-top" src={image_path} alt={image_alt || "no-image"} width={286} height={160} /></a>
        <Card.Body className={style.portfolio_card_body}>
          <Card.Title className={style.portfolio_card_title}>{title}</Card.Title>
          {badge ?
            (<Badge className={`${style.portfolio_card_badge} ${style.portfolio_card_badge_info}`}>{badge}</Badge>)
            :
            (<></>)
          }
          <h6 className="keyword">{keywords.join(", ")}</h6>
          <Card.Text>{sentence}</Card.Text>
          <button disabled={href === undefined} className={`${style.btn} btn`} data-bs-toggle="modal" data-bs-target={href}>{button_text}</button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default PortfolioCard;