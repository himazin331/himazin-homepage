/* トップページ */

import type { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { MdPerson, MdCake, MdOutlineLaptopWindows, MdArticle, 
        MdAssignmentInd, MdLocationPin, MdEmail, MdWork, MdFavorite } from "react-icons/md";
import Footer from "@/components/footer";
import Head from "@/components/head";
import style from "@/styles/index.module.css";

const gitHubGraphImageLoader = (): string => {
  return "https://himazin331.com/images/grass_graph.png";
};

const gitHubStatsImageLoader = (): string => {
  return "https://github-readme-stats.vercel.app/api?username=himazin331&count_private=true&show_icons=true";
};

const gitHublangsImageLoader = (): string => {
  return "https://github-readme-stats.vercel.app/api/top-langs/?username=himazin331";
};

const IndexPage: NextPage<JSX.Element> = () => {
  return (
    <>
      <Head originUrl={"https://himazin331.com"} />
      {/* Twitter JavaScript */}
      <Script src="https://platform.twitter.com/widgets.js" />
      <div className="wrapper">
        <Container className={style.content_field + ` justify-content-center row`} fluid>
          {/* メイン */}
          <Col className="main-pain" xs="auto">
            <Image className="img-fluid mx-auto d-block top-img" src="/images/profile_picture.png" 
              alt="プロフィール画像" width={256} height={256} loading="eager" />
            
            {/* プロフィール */}
            <div className={style.content_field}>
              <h2 className="content-head-text">Profile</h2>
              <div className={style.content_item}>
                <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                  <MdPerson className={style.material_icons_md_36_light} />
                  <span className={style.profile_caption_text}>Nickname</span>
                </div>
                <p className={style.profile_text}>himazin331</p>
              </div>
              <div className={style.content_item}>
                <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                  <MdCake className={style.material_icons_md_36_light} />
                  <span className={style.profile_caption_text}>Birthday</span>
                </div>
                <p className={style.profile_text}>2002 / 03 / 31</p>
              </div>
              <div className={style.content_item}>
                <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                  <MdOutlineLaptopWindows className={style.material_icons_md_36_light} />
                  <span className={style.profile_caption_text}>Favorite</span>
                </div>
                <p className={style.profile_text}>プログラミング,　電子工作,　技術的ななにか,　筋トレ</p>
              </div>
              <div className={style.content_item}>
                <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                  <MdArticle className={style.material_icons_md_36_light} />
                  <span className={style.profile_caption_text}>About</span>
                </div>
                <p className={style.profile_text}>
                  フルスタックエンジニアを夢みる、 himazin331 です。<br />
                  普段は深層学習やWebアプリの開発といったプログラミングをはじめ、セキュリティやネットワーク、電子工作に手を出しては技術に苦悶してます。
                </p>
              </div>

              {/* 詳細ボタン */}
              <div className={style.profile_btn_more}>
                <button className="btn" id="btn" type="button" data-bs-toggle="collapse" data-bs-target="#profile-more" aria-expanded="false" aria-controls="profile-more">
                  More
                </button>
              </div>
              {/* 詳細プロフィール */}
              <div className="collapse" id="profile-more">
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <MdAssignmentInd className={style.material_icons_md_36_light} />
                    <span className={style.profile_caption_text}>Name</span>
                  </div>
                  <p className={style.profile_text}>Yoshida Shion</p>
                </div> 
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <MdLocationPin className={style.material_icons_md_36_light} />
                    <span className={style.profile_caption_text}>Location</span>
                  </div>
                  <p className={style.profile_text}>Kanagawa, Japan</p>
                </div>
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <MdEmail className={style.material_icons_md_36_light} />
                    <span className={style.profile_caption_text}>E-mail</span>
                  </div>
                  <p className={style.profile_text}>contact@himazin331.com</p>
                </div>
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <MdWork className={style.material_icons_md_36_light} />
                    <span className={style.profile_caption_text}>Job</span>
                  </div>
                  <p className={style.profile_text}>独立系SIer ML/DL系</p>
                </div>
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <MdFavorite className={style.material_icons_md_36_light} />
                    <span className={style.profile_caption_text}>Feelings</span>
                  </div>
                  <p className={style.profile_text}>
                    <a href="https://www.amazon.jp/hz/wishlist/ls/3MXGBNSHM3Y4X?ref_=wl_share" target="_blank" rel="noopener noreferrer">Amazon欲しい物リスト(いろいろ)</a><br />
                    <a href="https://www.amazon.jp/hz/wishlist/ls/1U6AF7U9BZ3ZV?ref_=wl_share" target="_blank" rel="noopener noreferrer">Amazon欲しい物リスト(書籍)</a>
                  </p>
                </div>
              </div>
            </div>

            {/* コミュニティ */}
            <div className={style.content_field}>
              <h2 className="content-head-text">Community</h2>
            
              <div className={style.content_item}>
                <div className={`${style.community_caption_field} d-sm-flex align-items-center`}>
                  <span className={style.community_caption_text}>Twitter</span>
                </div>
                <span className={style.community_text}><a href="https://twitter.com/himazin_shotaML" target="_blank" rel="noopener noreferrer">@himazin_shotaML</a></span>
              </div>
              <div className={style.content_item}>
                <div className={`${style.community_caption_field} d-sm-flex align-items-center`}>
                  <span className={style.community_caption_text}>Facebook</span>
                </div>
                <span className={style.community_text}><a href="https://www.facebook.com/himazin331" target="_blank" rel="noopener noreferrer">@himazin331</a></span>
              </div>
              <div className={style.content_item}>
                <div className={`${style.community_caption_field} d-sm-flex align-items-center`}>
                  <span className={style.community_caption_text}>GitHub</span>
                </div>
                <span className={style.community_text}><a href="https://github.com/himazin331" target="_blank" rel="noopener noreferrer">@himazin331</a></span>
              </div>
              <div className={style.content_item}>
                <div className={`${style.community_caption_field} d-sm-flex align-items-center`}>
                  <span className={style.community_caption_text}>Qiita</span>
                </div>
                <span className={style.community_text}><a href="https://qiita.com/hima_zin331" target="_blank" rel="noopener noreferrer">@hima_zin331</a></span>
              </div>
            </div>

            {/* アクティビティ */}
            <div className={style.content_field}>
              <h2 className="content-head-text">Activity</h2>

              <Card className={style.card}>
                <div className={style.github_contributors} id="github_contributors">
                  <Image className={style.grass_graph + ` next-image`} src="grass_graph.png" loader={gitHubGraphImageLoader} alt="github contributes"
                    width="0" height="0" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <Col className={style.github_widgets}>
                  <div className={style.stats}>
                    <Image className="col-lg col-sm img-fluid" src="github_stats.png" loader={gitHubStatsImageLoader}
                      alt="GitHub Stats" width="465" height="195" />
                  </div>
                  <div className={style.langs}>
                    <Image className="col-lg col-sm img-fluid" src="github_langs.png" loader={gitHublangsImageLoader}
                      alt="GitHub langs" width="285" height="300" />
                  </div>
                </Col>
              </Card>
              <Card className={style.card}>
                <div style={{marginLeft: "10px"}}>
                  <a href="https://hetrixtools.com/r/9dac97d1f3f5e4859b739374a0d04621/" target="_blank" rel="noopener noreferrer">サーバ稼働状況 by HetrixTools</a>
                </div>
              </Card>
            </div>
          </Col>

          {/* サイド */}
          <Col className={style.side_pain} md="2">
            {/* タイムライン */}
            <div className={style.tweet_timeline_field}>
              <div className="d-none d-sm-block">
                <a className="twitter-timeline" id="twitter-timeline" href="https://twitter.com/himazin_shotaML?ref_src=twsrc%5Etfw" data-width="300" data-height="900" data-theme="dark" data-chrome="nofooter noscrollbar" data-lang="en">Tweets by himazin_shotaML</a>
              </div>
              <div className="d-block d-sm-none">
                <a className="twitter-timeline" id="twitter-timeline" href="https://twitter.com/himazin_shotaML?ref_src=twsrc%5Etfw" data-width="300" data-height="600" data-theme="dark" data-chrome="nofooter noscrollbar" data-lang="en">Tweets by himazin_shotaML</a>
              </div>
            </div>
          </Col>
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default IndexPage;
