/* ポートフォリオカード */

import type { NextPage } from "next";
import Image from "next/image";

interface PortfolioCardProps {
  image_path?: string;
  image_alt?: string;
  badge?: string;
  title: string;
  keywords: string[];
  sentence: string;
  href?: string;
}

const PortfolioCard: NextPage<PortfolioCardProps> = ({image_path, image_alt, badge, title, keywords, sentence, href}) => {
  if (image_path === undefined) {
    image_path = "/images/portfolio/noimage.jpg";
  }
  let button_text: string = "More";
  if (href === undefined) {
    button_text = "No details";
  }

  return (
    <div className="col-md">
      <div className="card h-100">
        <a href={href} data-bs-toggle="modal"><Image className="card-img-top" src={image_path} alt={image_alt || "no-image"} width={286} height={160} /></a>
        <div className="card-body">
          <h5 className="card-title" >{title}</h5>
          {badge ?
            (<span className="badge bg-info text-light">開発中</span>)
            :
            (<></>)
          }
          <h6 className="keyword">{keywords.join(", ")}</h6>
          <p className="card-text">{sentence}</p>
          <button disabled={href === undefined} className="btn" data-bs-toggle="modal" data-bs-target={href}>{button_text}</button>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
