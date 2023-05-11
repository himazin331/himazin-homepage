/* ポートフォリオページ */

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import Head from "@/components/head";
import PortfolioParts from "@/components/parts/portfolio_parts";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head title="Portfolio" originUrl={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <div className="container">
          <h1 className="page-top-sentence">Portfolio</h1>

          {/* プロダクト一覧 */}
          <div className="content-field">
            <div className="row justify-content-center">
              <PortfolioParts imagePaths={["8-1.png", "8-2.png", "8-3.png"]} 
                imageAlts={["ダッシュボード", "記録ページ", "記録閲覧ページ"]} badge="開発中" title="ワークアウト管理アプリ"
                keywords={["WebApp", "Database"]} overview="自由性が高く簡単にワークアウトメニューや摂取カロリーを記録できるワークアウト管理アプリ。"
                devPeriod="現行 (個人開発)" devEnv={["HTML5/CSS", "JavaScript", "PHP", "SQL", "Nginx", "Laravel", "Bootstrap", "MySQL", "Amazon S3"]}
                urlList={["https://github.com/himazin331/WorkoutManagement", "https://esxi.himazin331.com"]} urlNameList={["GitHub", "Webアプリ(予告なく非公開になる可能性があります)"]}
                sentence="このWebアプリは、１日のトレーニングメニューや摂取カロリー、画像の記録が行えるアプリとなっています。\n
                アップロードした画像はAmazon S3にアップロードされ、Webアプリ上で閲覧が可能です。\n
                簡単な操作性と高い自由性を求めて開発しました。
                また、このWebアプリの開発にあたり、インフラからフロント、バックまで全て私１人で開発しました。\n
                \n
                動作デモが可能です\n
                テストユーザID：testuser1\n
                テストユーザPW：password\n
                \n
                ※未完成により動作が不安定なところがあります。\n
                ※このWebアプリのインフラ環境が、自宅サーバと加入データセンターから貸与されたグローバルIPアドレスを用いており、サーバ、ネットワーク共にすべてオンプレミスとなっています。\n
                そのため、サーバやネットワークに高い負荷をかけるような行為はしないようお願いいたします。\n" />

              <PortfolioParts imagePaths={["7-1.jpg", "7-2.png", "7-3.png"]} 
                imageAlts={["Hexapod", "Webコントローラ", "アルバムページ"]} badge="開発中" title="Hexapod"
                keywords={["Hardware", "IoT", "WebApp"]} overview="６本の脚があり計18個のサーボモータを搭載するロボット。"
                devPeriod="現行 (個人開発)" devEnv={["Python3", "HTML5", "JavaScript", "Flask", "MJPG-Streamer", "pigpio", "Adafruit-PCA9685", "Apache", "Amazon S3", "RaspberryPi"]}
                urlList={["https://github.com/himazin331/Hexapod"]} urlNameList={["GitHub"]}
                sentence="１本につき３箇所の関節部をもつ脚が６本あるロボットの開発。ロボットの造形は3Dプリンタ印刷。\n
                操作はWebアプリ上で行い、Raspberry Pi GPIOからサーボモータへPWM信号を送ることで制御します。\n
                また、カメラを搭載し、カメラ映像の録画や閲覧ができます。WebアプリはFlask、カメラ映像のストリーミング配信はMJPG-Streamerで実装。\n
                \n
                画像は開発中のものです。" />

              <PortfolioParts imagePaths={["6-1.png", "6-2.png", "6-3.png", "6-4.png", "6-5.png", "6-6.png"]} 
                imageAlts={["関節体モデル", "関節体モデル補正処理", "人物識別", "関節体モデル生成", "識別フェーズ", "ポスター画像"]} title="ポーズ推定モデルを活用した歩容認証技術の実装"
                keywords={["Machine/DeepLearning"]} overview="ポーズ推定モデルを用いて歩容認証を実装してみる。"
                devPeriod="約４ヶ月 (個人開発)" devEnv={["Python3", "Tensorflow", "GluonCV", "MXNet", "OpenCV"]}
                urlList={["https://github.com/himazin331/Pose-GaitRecognition", "https://www.slideshare.net/secret/w0eNMQ0x0KUfnM", "https://youtu.be/x1NnCyW9qvw"]}
                urlNameList={["GitHub", "スライド(SlideShare)", "実行動画(YouTube)"]}
                sentence="まず前提として歩容識別技術とは、人の歩き方で人物を認識する技術のことを指します。\n
                歩容識別技術はセンサであるカメラから対象人物に距離があっても認識に影響しないという長所があります。\n\n
                この技術には大別して２つの手法があり、１つはアピアランスベース手法と呼ばれ、見えに基づいた特徴量を利用する手法で、歩容シルエットを用いるのが一般的です。\n
                そしてもう１つはモデルベース手法と呼ばれる、関節体モデルを構築し、関節の座標や位置関係といった特徴量を利用する手法です。\n
                しかし、この手法は関節体モデルを作成するのに、高い技量と多くの時間を必要とするやり方が多く、コストが高いことが課題となっています。\n\n
                そこで、私は深層学習によるポーズ推定モデルを用いて関節体モデルを作成することでコストを削減できるのではないかと考え、\n
                その考えを具現化することを目的に取り組みました。" />

              <PortfolioParts imagePaths={["5-1.jpg", "5-2.jpg", "5-3.jpg"]} 
                imageAlts={["メインページ", "スキルページ", "ポートフォリオページ"]} badge="制作中" title="ホームページ/ブログ"
                keywords={["WebSite"]} overview="いまあなたがアクセスして閲覧しているこのページ。"
                devPeriod="現行 (個人開発)" devEnv={["HTML5/CSS", "TypeScript", "React", "Next.js", "Nginx"]}
                urlList={["https://github.com/himazin331/himazin-homepage"]} urlNameList={["GitHub"]}
                sentence="自宅サーバ(VMware)上の仮想マシンをWebサーバとして運用しています。\n
                レスポンシブデザインはBootstrapを用いて実現しています。\n\n
                脆弱性テストや負荷テストも実施して、セキュリティと可用性を確保しています。" />

              <PortfolioParts imagePaths={["4-1.jpg", "4-2.png", "4-3.jpg"]} 
                imageAlts={["スマートロック本体", "電子回路", "システム構成図"]} title="セキュアなスマートロック"
                keywords={["Hardware", "IoT", "AI", "WebApp"]} overview="２要素認証による解錠とWebアプリを通じて遠隔から施錠/解錠ができるスマートロック。"
                devPeriod="約２ヶ月 (個人開発)"
                devEnv={["Python3", "C/C++", "HTML5", "JavaScript", "Ajax", "pigpio", "Tensorflow", "OpenCV", "Apache", "Azure VM", "RaspberryPi", "ESP32"]}
                urlList={["https://github.com/himazin331/smartlock", "https://youtu.be/xBleq3s7Xvk"]} urlNameList={["GitHub", "YouTube"]}
                sentence="インフラ構築から回路製作、Webアプリ開発まで一貫して作業しました。\n
                顔認識ではTensorflow Lite + MobileNetV2を用いて低性能なラズパイゼロでも高速に処理が可能となっています。\n\n
                システム構成について疑問に思うところがあるかと思いますが、詳細はGitHubをみてください。" />

              <PortfolioParts imagePaths={["3-1.jpg", "3-2.jpg", "3-3.jpg"]}
                imageAlts={["メインページ", "スレッド作成モーダル", "スレッドページ"]} title="エンジニア向け匿名掲示板"
                keywords={["WebApp", "Database"]} overview="マークダウン記法による投稿が可能な匿名掲示板サイト。スレッド作成機能やタグ機能も装備。"
                devPeriod="約２週間 (チーム開発)"
                devEnv={["HTML5/CSS3", "PHP", "JavaScript", "SQL", "Apache", "AWS EC2", "MySQL", "jQuery", "Marked.js", "SimpleMDE"]}
                urlList={["https://github.com/himazin331/techanony"]} urlNameList={["GitHub"]}
                sentence="Marked.jsとSimpleMDEを使うことにより、マークダウン記法による書き込みができるようになっています。\n
                タグ機能やスレッド検索機能も備えています。\n\n
                注: レスポンシブ非対応ですので、レイアウト崩れご容赦ください。\n
                また、ある程度はセキュリティ面に配慮してますが、不完全な部分があるかと思いますので、\n
                攻撃や過負荷をかけるなどの行為はやめてください。" />

              <PortfolioParts imagePaths={["2.jpg"]} title="簡易的フローチャート作成アプリ" keywords={["GUIApp"]} 
                overview="簡易的なフローチャートを作成することができるアプリ。ファイル保存機能やオブジェクトの自動整列機能など装備。" />

              <PortfolioParts title="採譜支援アプリ" keywords={["CLIApp"]} 
                overview=".wavに対してFFTを用いて周波数を導き出し、対応した音階を出力し採譜(いわゆる耳コピ)を支援。" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Portfolio;
