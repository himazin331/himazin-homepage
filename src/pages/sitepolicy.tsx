/* サイトポリシーページ */

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";

const Sitepolicy: NextPage = () => {
  return (
    <>
      <Head title="Sitepolicy" origin_url={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <Container>
          <div className="content-field" style={{paddingTop: "30px"}}>
            <h1>サイトポリシー</h1>
            <hr />
            <h3>アクセス解析ツールについて</h3>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
              このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              <br /><br />
              この機能はCookieの無効化やプライバシー広告ブロッカーなどの仕様により、収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
              この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">Googleアナリティクスサービス利用規約</a>のページや<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">Googleポリシーと規約</a>ページをご覧ください。
            </p>
    
            <h3>外部サイトのリンクについて</h3>
            <p>
              当サイトは、いくつかの外部サイトへのリンクを含みますが、個人情報を共有するものではありません。<br />
              リンク先サイトにて行われる個人情報の収集に関しては、当サイトでは一切責任を負えませんので、
              リンク先サイトの個人情報の取扱内容を必ずご参照ください。
            </p>
    
            <h3>免責事項</h3>
            <p>
              当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属いたします。権利を侵害する目的ではございません。<br />
              内容や掲載画像等に問題がございましたら、各権利所有者本人様が直接メールにてご連絡ください。
              遅滞なく対応させていただきます。
              <br /><br />
              当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
              <br /><br />
              当サイトの情報は必ずしも正当性、信頼性、有用性について保証するものではありません。
              掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。<br />
              また、当サイトの内容および情報は、予告なく変更・改訂がなされる場合があり、理由の如何に関わらず、
              情報の変更および、このサイトの運用の中断または中止や閲覧不可能によって生じる損害についても責任を負いません。
            </p>
            
            <br />
            <p>
              初出掲載：2021年10月19日
            </p>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default Sitepolicy;
