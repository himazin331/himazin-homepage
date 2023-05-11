/* ポートフォリオカード&モーダル */

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import style from "@/styles/portfolio.module.css";


interface PortfolioPartsProps {
  imagePaths?: string[];
  imageAlts?: string[];
  badge?: string;
  title: string;
  keywords: string[];
  overview: string;
  devPeriod?: string;
  devEnv?: string[];
  urlList?: string[];
  urlNameList?: string[];
  sentence?: string;
}

interface PortfolioCardProps {
  imagePath?: string;
  imageAlt?: string;
  badge?: string;
  title: string;
  keywords: string[];
  overview: string;
  hrefIdx?: string;
  handleShowModal?: any; 
}

const PortfolioParts: NextPage<PortfolioPartsProps> = ({imagePaths, imageAlts, badge, 
                                                        title, keywords, overview, devPeriod,
                                                        devEnv, urlList, urlNameList, sentence}) => {
  let createModal: boolean = false;  
  if (keywords !== undefined && devPeriod !== undefined && devEnv !== undefined 
    && urlList !== undefined && urlNameList !== undefined && sentence !== undefined)
  {
    createModal = true;
  }

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  
  return (
    <>
      <PortfolioCard imagePath={imagePaths !== undefined? imagePaths[0]: undefined} imageAlt={title} badge={badge} 
        title={title} keywords={keywords} overview={overview} handleShowModal={createModal? handleShowModal : undefined}/>

      {createModal?
        <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
          <Modal.Dialog className={style.modal_dialog} centered size="xl">
            <div className={style.modal_content}>
              <Modal.Header closeButton closeVariant="white">
                <Modal.Title as="h5">
                  {title}
                  {badge ?
                    (<Badge className={style.portfolio_card_badge}>{badge}</Badge>)
                    :
                    (<></>)
                  }
                  <span className={style.modal_keyword}>{keywords.join(", ")}</span>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className={style.modal_body}>
                <Carousel className={style.carousel} variant="dark" interval={null} fade>
                  {imagePaths && imagePaths.map((imagePath: string, idx: number) => (
                    <Carousel.Item key={idx}>
                      <Image className="next-image" src={`/images/portfolio/` + imagePath} alt={imageAlts? imageAlts[idx] : ""}
                        width="0" height="0" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </Carousel.Item>
                  ))}
                </Carousel>

                <div className={style.portfolio_field}>
                  <div className={style.portfolio_item}>
                    <div className={style.portfolio_subject}>
                      <span>概　　要 :</span>
                    </div>
                    <p className={style.portfolio_sentence}>{overview}</p>
                  </div>
                  <div className={style.portfolio_item}>
                    <div className={style.portfolio_subject}>
                      <span>開発期間 :</span>
                    </div>
                    <p className={style.portfolio_sentence}>{devPeriod}</p>
                  </div>
                  <div className={style.portfolio_item}>
                    <div className={style.portfolio_subject}>
                      <span>開発環境 :</span>
                    </div>
                    <p className={style.portfolio_sentence}>{devEnv && devEnv.join(", ")}</p>
                  </div>
                  <div className={style.portfolio_item}>
                    <div className={style.portfolio_subject}>
                      <span>U　R　L :</span>
                    </div>
                    <p className={style.portfolio_sentence}>
                      {urlList && urlList.map((url:string, idx: number) => (
                        <a key={idx} href={url} target="_blank" rel="noopener noreferrer">{urlNameList? urlNameList[idx] : ""}<br /></a>
                      ))}
                    </p>
                  </div>
                  <div className={style.portfolio_item}>
                    <div className={style.portfolio_subject}>
                      <span>詳　　細 :</span>
                    </div>
                    <p className={style.portfolio_sentence}>
                      {sentence && sentence.split("\\n").map((line: string) => (
                        <>
                          {line}
                          <br />
                        </>
                      ))}
                    </p>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button className={style.btn} variant="dark" onClick={handleCloseModal}>Close</Button>
              </Modal.Footer>
            </div>
          </Modal.Dialog>
        </Modal>
        :
        <></>
      }
    </>

  );
};
export default PortfolioParts;

const PortfolioCard: NextPage<PortfolioCardProps> = ({imagePath, imageAlt, badge, title, keywords, overview, handleShowModal}) => {
  if (imagePath === undefined) {
    imagePath = "/images/noimage.jpg";
  } else {
    imagePath = "/images/portfolio/" + imagePath;
  }
  if (!Array.isArray(keywords)) {
    keywords = [keywords];
  }
  let buttonText: string = "More";
  if (handleShowModal === undefined) {
    buttonText = "No details";
  }

  return (
    <Col className={style.portfolio_card} md="2" sm="2">
      <Card className="h-100 w-auto">
        {handleShowModal === undefined?
          <Image className="card-img-top" src={imagePath} alt={imageAlt || "no-image"} width={286} height={160} 
            onClick={handleShowModal} />
          :
          <Image className={style.portfolio_card_img + ` card-img-top`} src={imagePath} alt={imageAlt || "no-image"} width={286} height={160} 
            onClick={handleShowModal} />
        }
        <Card.Body className={style.portfolio_card_body}>
          <Card.Title className={style.portfolio_card_title}>{title}</Card.Title>
          {badge ?
            (<Badge className={`${style.portfolio_card_badge} ${style.portfolio_card_badge_info}`}>{badge}</Badge>)
            :
            (<></>)
          }
          <h6 className="keyword">{keywords.join(", ")}</h6>
          <Card.Text>{overview}</Card.Text>
          <Button className={style.btn} variant="dark" disabled={handleShowModal === undefined} onClick={handleShowModal}>{buttonText}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
