/* ポートフォリオページ */

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import Head from "@/components/head";
import PortfolioCard from "@/components/parts/portfolio_card";
import PortfolioModal from "@/components/parts/portfolio_modal";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head title="Portfolio" origin_url={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <div className="container">
          <h1 className="page-top-sentence">Portfolio</h1>

          {/* <!-- プロダクト一覧 --> */}
          <div className="content-field">
            <div className="row justify-content-center">
              <PortfolioCard image_path="/images/portfolio/8-1.png" image_alt="ワークアウト管理アプリ" 
                badge="開発中" title="ワークアウト管理アプリ" keywords={["WebApp", "Database"]} 
                sentence="自由性が高く簡単にワークアウトメニューや摂取カロリーを記録できるワークアウト管理アプリ。"
                href_idx="8" />
              <PortfolioCard image_path="/images/portfolio/7-1.jpg" image_alt="Hexapod" 
                badge="開発中" title="Hexapod" keywords={["Hardware", "IoT", "WebApp"]} 
                sentence="６本の脚があり計18個のサーボモータを搭載するロボット。"
                href_idx="7" />
              <PortfolioCard image_path="/images/portfolio/6-1.png" image_alt="歩容認証技術" 
                title="ポーズ推定モデルを活用した歩容認証技術の実装" keywords={["Machine/DeepLearning"]} 
                sentence="ポーズ推定モデルを用いて歩容認証を実装してみる。"
                href_idx="6" />
              <PortfolioCard image_path="/images/portfolio/5-1.jpg" image_alt="ホームページ" 
                title="ホームページ" keywords={["WebSite"]} 
                sentence="いまあなたがアクセスして閲覧しているこのページ。自作ブログも開設予定。"
                href_idx="5" />
              <PortfolioCard image_path="/images/portfolio/4-1.jpg" image_alt="スマートロック" 
                title="セキュアなスマートロック" keywords={["Hardware", "IoT", "AI", "WebApp"]} 
                sentence="２要素認証による解錠とWebアプリを通じて遠隔から施錠/解錠ができるスマートロック。"
                href_idx="4" />
              <PortfolioCard image_path="/images/portfolio/3-1.jpg" image_alt="掲示板サイト" 
                title="エンジニア向け匿名掲示板" keywords={["WebApp", "Database"]} 
                sentence="マークダウン記法による投稿が可能な匿名掲示板サイト。スレッド作成機能やタグ機能も装備。"
                href_idx="3" />
              <PortfolioCard image_path="/images/portfolio/2.jpg" image_alt="フローチャート作成アプリ" 
                title="簡易的フローチャート作成アプリ" keywords={["GUIApp"]} 
                sentence="簡易的なフローチャートを作成することができるアプリ。ファイル保存機能やオブジェクトの自動整列機能など装備。"/>
              <PortfolioCard title="採譜支援アプリ" keywords={["CLIApp"]} 
                sentence=".wavに対してFFTを用いて周波数を導き出し、対応した音階を出力し採譜(いわゆる耳コピ)を支援。"/>
            </div>
          </div>
        </div>

        {/* <!--
          プロダクト詳細
        --> */}

        <PortfolioModal image_paths={["path"]} image_alts={["alt"]} badge="開発中" title="テスト"
          keywords={["keyword"]} overview="overview" dev_period="a" dev_env="d" url={["u"]} url_name={["h"]}
          sentence="hoge" href_idx="8"/>

        
        {/* <!-- Hexapod詳細 --> */}
        <div className="modal fade" id="portfolio7_md" tabIndex={-1} role="dialog" aria-labelledby="portfolio7_md_TT" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
            <div className="modal-content">
              {/* <!-- タイトル --> */}
              <div className="modal-header">
                <h5 className="modal-title" id="portfolio7_md_TT">Hexapod<span className="badge bg-info text-light">開発中</span><br /><span style={{fontSize: "15.43px"}}>Hardware, IoT, WebApp</span></h5>
                <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
        
              <div className="modal-body">
                {/* <!-- 画像 --> */}
                <div className="carousel carousel-fade carousel-dark slide mx-auto" id="carouselIndicators7" data-bs-ride="carousel" data-bs-interval="false">
                  <ol className="carousel-indicators">
                    <li className="active" data-bs-target="#carouselIndicators7" data-bs-slide-to="0"></li>
                    <li data-bs-target="#carouselIndicators7" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselIndicators7" data-bs-slide-to="2"></li>
                  </ol>
        
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/portfolio/7-1.jpg" alt="Hexapod" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/7-2.png" alt="Webコントローラ" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/7-3.png" alt="アルバムページ" />
                    </div>
                  </div>
        
                  <a className="carousel-control-prev" href="#carouselIndicators7" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselIndicators7" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
        
                {/* <!-- 内容 --> */}
                <div className="portfolio-field">
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>概　　要:</span>
                    </div>
                    <p className="portfolio-sentence">６本の脚があり計18個のサーボモータを搭載するロボット通称「Hexapod」の開発</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発期間:</span>
                    </div>
                    <p className="portfolio-sentence">現行 (個人開発)</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発環境:</span>
                    </div>
                    <p className="portfolio-sentence">Python3, HTML5, Javascript<br />Flask, MJPG-Streamer, pigpio, Adafruit-PCA9685, Apache, Amazon S3, Raspberry Pi</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>U　R　L :</span>
                    </div>
                    <p className="portfolio-sentence">
                      <a href="https://github.com/himazin331/Hexapod" target="_blank" rel="noopener noreferrer">GitHub</a><br />
                    </p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>詳　　細:</span>
                    </div>
                    <p className="portfolio-sentence">
                      １本につき３箇所の関節部をもつ脚が６本あるロボットの開発。ロボットの造形は3Dプリンタ印刷。<br />
                      操作はWebアプリ上で行い、Raspberry Pi GPIOからサーボモータへPWM信号を送ることで制御します。<br />
                      また、カメラを搭載し、カメラ映像の録画や閲覧ができます。WebアプリはFlask、カメラ映像のストリーミング配信はMJPG-Streamerで実装。
                      <br /><br />
                      画像は開発中のものです。
                    </p>
                  </div>
                </div>
              </div>
        
              {/* <!-- 閉じるボタン --> */}
              <div className="modal-footer">
                <button className="btn" type="button" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* <!-- 歩容認証詳細 --> */}
        <div className="modal fade" id="portfolio6_md" tabIndex={-1} role="dialog" aria-labelledby="portfolio6_md_TT" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
            <div className="modal-content">
              {/* <!-- タイトル --> */}
              <div className="modal-header">
                <h5 className="modal-title" id="portfolio6_md_TT">ポーズ推定モデルを活用した歩容認証技術の実装<br /><span style={{fontSize: "15.43px"}}>Machine/DeepLearning</span></h5>
                <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
        
              <div className="modal-body">
                {/* <!-- 画像 --> */}
                <div className="carousel carousel-fade carousel-dark slide mx-auto" id="carouselIndicators6" data-bs-ride="carousel" data-bs-interval="false">
                  <ol className="carousel-indicators">
                    <li data-bs-target="#carouselIndicators6" data-bs-slide-to="0"></li>
                    <li data-bs-target="#carouselIndicators6" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselIndicators6" data-bs-slide-to="2"></li>
                    <li data-bs-target="#carouselIndicators6" data-bs-slide-to="3"></li>
                    <li data-bs-target="#carouselIndicators6" data-bs-slide-to="4"></li>
                    <li data-bs-target="#carouselIndicators6" data-bs-slide-to="5"></li>
                  </ol>
        
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/portfolio/6-1.png" alt="関節体モデル" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/6-2.png" alt="関節体モデル補正処理" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/6-3.png" alt="人物識別" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/6-4.png" alt="関節体モデル生成" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/6-5.png" alt="識別フェーズ" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/6-6.png" alt="ポスター画像" />
                    </div>
                  </div>
        
                  <a className="carousel-control-prev" href="#carouselIndicators6" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselIndicators6" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
        
                {/* <!-- 内容 --> */}
                <div className="portfolio-field">
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>概　　要:</span>
                    </div>
                    <p className="portfolio-sentence">ポーズ推定モデルを活用した歩容認証技術の実装</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発期間:</span>
                    </div>
                    <p className="portfolio-sentence">約４ヶ月 (個人開発)</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発環境:</span>
                    </div>
                    <p className="portfolio-sentence">Python3<br />Tensorflow, GluonCV, MXNet, OpenCV</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>U　R　L :</span>
                    </div>
                    <p className="portfolio-sentence">
                      <a href="https://github.com/himazin331/Pose-GaitRecognition" target="_blank" rel="noopener noreferrer">GitHub</a><br />
                      <a href="https://www.slideshare.net/secret/w0eNMQ0x0KUfnM" target="_blank" rel="noopener noreferrer">スライド(SlideShare)</a><br />
                      <a href="https://youtu.be/x1NnCyW9qvw" target="_blank" rel="noopener noreferrer">実行動画(YouTube)</a><br />
                    </p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>詳　　細:</span>
                    </div>
                    <p className="portfolio-sentence">
                      まず前提として歩容識別技術とは、人の歩き方で人物を認識する技術のことを指します。<br />
                      歩容識別技術はセンサであるカメラから対象人物に距離があっても認識に影響しないという長所があります。<br /><br />
        
                      この技術には大別して２つの手法があり、１つはアピアランスベース手法と呼ばれ、見えに基づいた特徴量を利用する手法で、歩容シルエットを用いるのが一般的です。<br />
                      そしてもう１つはモデルベース手法と呼ばれる、関節体モデルを構築し、関節の座標や位置関係といった特徴量を利用する手法です。<br />
                      しかし、この手法は関節体モデルを作成するのに、高い技量と多くの時間を必要とするやり方が多く、コストが高いことが課題となっています。<br /><br />
        
                      そこで、私は深層学習によるポーズ推定モデルを用いて関節体モデルを作成することでコストを削減できるのではないかと考え、<br />
                      その考えを具現化することを目的に取り組みました。
                    </p>
                  </div>
                </div>
              </div>
        
              {/* <!-- 閉じるボタン --> */}
              <div className="modal-footer">
                <button className="btn" type="button" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* <!-- ホームページ詳細 --> */}
        <div className="modal fade" id="portfolio5_md" tabIndex={-1} role="dialog" aria-labelledby="portfolio5_md_TT" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
            <div className="modal-content">
              {/* <!-- タイトル --> */}
              <div className="modal-header">
                <h5 className="modal-title" id="portfolio5_md_TT">ホームページ<span className="badge bg-info text-light">制作中</span><br /><span style={{fontSize: "15.43px"}}>WebSite</span></h5>
                <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
        
              <div className="modal-body">
                {/* <!-- 画像 --> */}
                <div className="carousel carousel-fade carousel-dark slide mx-auto" id="carouselIndicators5" data-bs-ride="carousel" data-bs-interval="false">
                  <ol className="carousel-indicators">
                    <li className="active" data-bs-target="#carouselIndicators5" data-bs-slide-to="0"></li>
                    <li data-bs-target="#carouselIndicators5" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselIndicators5" data-bs-slide-to="2"></li>
                  </ol>
        
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/portfolio/5-1.jpg" alt="メインページ" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/5-2.jpg" alt="スキルページ" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/5-3.jpg" alt="ポートフォリオページ" />
                    </div>
                  </div>
        
                  <a className="carousel-control-prev" href="#carouselIndicators5" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselIndicators5" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
        
                {/* <!-- 内容 --> */}
                <div className="portfolio-field">
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>概　　要:</span>
                    </div>
                    <p className="portfolio-sentence">私のホームページ兼ポートフォリオ</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発期間:</span>
                    </div>
                    <p className="portfolio-sentence">現行 (個人開発)</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発環境:</span>
                    </div>
                    <p className="portfolio-sentence">HTML5/CSS, Javascript, PHP<br />Nginx, Laravel</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>U　R　L :</span>
                    </div>
                    <p className="portfolio-sentence">
                      <a href="https://github.com/himazin331/himazin-homepage" target="_blank" rel="noopener noreferrer">GitHub</a><br />
                    </p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>詳　　細:</span>
                    </div>
                    <p className="portfolio-sentence">
                      自宅サーバ(VMware)上の仮想マシンをWebサーバとして運用しています。<br />
                      レスポンシブデザインはBootstrapを用いて実現しています。<br /><br />
                      脆弱性テストや負荷テストも実施して、セキュリティと可用性を確保しています。<br /><br />
                      自作の技術ブログも当サイトで開設しようと奮闘していますので、もしご興味があれば覗いてみてください。
                    </p>
                  </div>
                </div>
              </div>
        
              {/* <!-- 閉じるボタン --> */}
              <div className="modal-footer">
                <button className="btn" type="button" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* <!-- スマートロック詳細 --> */}
        <div className="modal fade" id="portfolio4_md" tabIndex={-1} role="dialog" aria-labelledby="portfolio4_md_TT" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
            <div className="modal-content">
              {/* <!-- タイトル --> */}
              <div className="modal-header">
                <h5 className="modal-title" id="portfolio4_md_TT">セキュアなスマートロック<br /><span style={{fontSize: "15.43px"}}>Hardware, IoT, AI, WebApp</span></h5>
                <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
        
              <div className="modal-body">
                {/* <!-- 画像 --> */}
                <div className="carousel carousel-fade slide mx-auto" id="carouselIndicators4" data-bs-ride="carousel" data-bs-interval="false">
                  <ol className="carousel-indicators">
                    <li className="active" data-bs-target="#carouselIndicators4" data-bs-slide-to="0"></li>
                    <li data-bs-target="#carouselIndicators4" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselIndicators4" data-bs-slide-to="2"></li>
                  </ol>
        
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/portfolio/4-1.jpg" alt="スマートロック本体" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/4-2.png" alt="電子回路" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/4-3.jpg" alt="システム構成図" />
                    </div>
                  </div>
        
                  <a className="carousel-control-prev" href="#carouselIndicators4" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselIndicators4" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
        
                {/* <!-- 内容 --> */}
                <div className="portfolio-field">
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>概　　要:</span>
                    </div>
                    <p className="portfolio-sentence">生体情報である顔と所有物であるスマホのMACアドレスの２要素認証で鍵の解錠ができる。<br />
                      また、Webアプリを通して施錠/解錠も可能。</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発期間:</span>
                    </div>
                    <p className="portfolio-sentence">約２ヶ月 (個人開発)</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発環境:</span>
                    </div>
                    <p className="portfolio-sentence">Python3, C/C++, HTML5, Javascript<br />
                      Ajax, pigpio, Tensorflow, OpenCV, Apache, Azure VM, Raspberry Pi, ESP32</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>U　R　L :</span>
                    </div>
                    <p className="portfolio-sentence">
                      <a href="https://github.com/himazin331/smartlock" target="_blank" rel="noopener noreferrer">GitHub</a><br />
                      <a href="https://youtu.be/xBleq3s7Xvk" target="_blank" rel="noopener noreferrer">YouTube</a>
                    </p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>詳　　細:</span>
                    </div>
                    <p className="portfolio-sentence">
                      インフラ構築から回路製作、Webアプリ開発まで一貫して作業しました。<br />
                      顔認識ではTensorflow Lite + MobileNetV2を用いて低性能なラズパイゼロでも高速に処理が可能となっています。<br /><br />
                      システム構成について疑問に思うところがあるかと思いますが、詳細はGitHubをみてください。
                    </p>
                  </div>
                </div>
              </div>
        
              {/* <!-- 閉じるボタン --> */}
              <div className="modal-footer">
                <button className="btn" type="button" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* <!-- 掲示板サイト詳細 --> */}
        <div className="modal fade" id="portfolio3_md" tabIndex={-1} role="dialog" aria-labelledby="portfolio3_md_TT" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
            <div className="modal-content">
              {/* <!-- タイトル --> */}
              <div className="modal-header">
                <h5 className="modal-title" id="portfolio3_md_TT">エンジニア向け匿名掲示板サイト<br /><span style={{fontSize: "15.43px"}}>WebApp, Database</span></h5>
                <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
        
              <div className="modal-body">
                {/* <!-- 画像 --> */}
                <div className="carousel carousel-fade carousel-dark slide mx-auto" id="carouselIndicators3" data-bs-ride="carousel" data-bs-interval="false">
                  <ol className="carousel-indicators">
                    <li className="active" data-bs-target="#carouselIndicators3" data-bs-slide-to="0"></li>
                    <li data-bs-target="#carouselIndicators3" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselIndicators3" data-bs-slide-to="2"></li>
                  </ol>
        
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="images/portfolio/3-1.jpg" alt="メインページ" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/3-2.jpg" alt="スレッド作成モーダル" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="images/portfolio/3-3.jpg" alt="スレッドページ" />
                    </div>
                  </div>
        
                  <a className="carousel-control-prev" href="#carouselIndicators3" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselIndicators3" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
        
                {/* <!-- 内容 --> */}
                <div className="portfolio-field">
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>概　　要:</span>
                    </div>
                    <p className="portfolio-sentence">マークダウン記法による掲示板投稿が可能なエンジニア向け匿名掲示板サイト</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発期間:</span>
                    </div>
                    <p className="portfolio-sentence">約２週間 (チーム開発)</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>開発環境:</span>
                    </div>
                    <p className="portfolio-sentence">HTML5/CSS3, PHP, Javascript, SQL<br />
                      Apache, AWS EC2, MySQL, jQuery, Marked.js, SimpleMDE</p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>U　R　L :</span>
                    </div>
                    <p className="portfolio-sentence">
                      <a href="https://github.com/himazin331/techanony" target="_blank" rel="noopener noreferrer">GitHub</a><br />
                      <a href="http://34.234.120.153/main/" target="_blank" rel="noopener noreferrer">サイト (予告なく非公開になる可能性があります)</a><br />
                    </p>
                  </div>
                  <div className="portfolio-item">
                    <div className="portfolio-subject">
                      <span>詳　　細:</span>
                    </div>
                    <p className="portfolio-sentence">
                      Marked.jsとSimpleMDEを使うことにより、マークダウン記法による書き込みができるようになっています。<br />
                      タグ機能やスレッド検索機能も備えています。<br /><br />
                      注: レスポンシブ非対応ですので、レイアウト崩れご容赦ください。<br />
                      また、ある程度はセキュリティ面に配慮してますが、不完全な部分があるかと思いますので、<br />
                      攻撃や過負荷をかけるなどの行為はやめてください。
                    </p>
                  </div>
                </div>
              </div>
        
              {/* <!-- 閉じるボタン --> */}
              <div className="modal-footer">
                <button className="btn" type="button" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default Portfolio;
