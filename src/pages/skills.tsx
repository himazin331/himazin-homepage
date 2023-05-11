/* スキルページ */

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Footer from "@/components/footer";
import Head from "@/components/head";
import SkillCard from "@/components/parts/skill_card";
import style from "@/styles/skills.module.css";

const SkillsPage: NextPage = () => {
  return (
    <>
      <Head title="Skills" originUrl={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <Container>
          <h1 className="page-top-sentence">Skills</h1>

          {/* 勉強したプログラミング言語 */}
          <div className="content-field">
            <h2 className="content-head-text">Programming Languages</h2>
    
            <div className="text-center">
              <SkillCard imagePath="/images/skills/1python.png" imageAlt="Python3ロゴ" skillName="Python3" />
              <SkillCard imagePath="/images/skills/2vbnet.png" imageAlt="VB.NETロゴ" skillName="VB.NET" />
              <SkillCard imagePath="/images/skills/3c.png" imageAlt="Cロゴ" skillName="C" />
              <SkillCard imagePath="/images/skills/4htmlcss.png" imageAlt="HTML5/CSS3ロゴ" skillName="HTML5/CSS3" />
              <SkillCard imagePath="/images/skills/5js.png" imageAlt="JSロゴ" skillName="JavaScript" />
              <SkillCard imagePath="/images/skills/6php.png" imageAlt="PHPロゴ" skillName="PHP" />
              <SkillCard skillName="TypeScript" />
            </div>
          </div>

          {/* 勉強したフレームワーク */}
          <div className="content-field">
            <h2 className="content-head-text">Framework</h2>
    
            <div className="text-center">
              <SkillCard imagePath="/images/skills/7tensorflow.png" imageAlt="TensorFlowロゴ" skillName="TensorFlow" />
              <SkillCard imagePath="/images/skills/8opencv.png" imageAlt="OpenCVロゴ" skillName="OpenCV" />
              <SkillCard imagePath="/images/skills/9selenium.png" imageAlt="Seleniumロゴ" skillName="Selenium" />
              <SkillCard imagePath="/images/skills/10jquery.png" imageAlt="jQueryロゴ" skillName="jQuery" />
              <SkillCard imagePath="/images/skills/11bootstrap.png" imageAlt="Bootstrapロゴ" skillName="Bootstrap" />
              <SkillCard imagePath="/images/skills/12laravel.png" imageAlt="Laravelロゴ" skillName="Laravel" />
              <SkillCard skillName="Flask" />
              <SkillCard skillName="PyQt(PySide2)" />
              <SkillCard skillName="React" />
            </div>
          </div>
      
          {/* 勉強したミドルウェア等 */}
          <div className="content-field">
            <h2 className="content-head-text">Other</h2>
    
            <div className="text-center">
              <SkillCard skillName="MySQL" />
              <SkillCard skillName="Apache" />
              <SkillCard skillName="Nginx" />
              <SkillCard skillName="Azure" />
              <SkillCard skillName="AWS" />
              <SkillCard skillName="Git" />
              <SkillCard skillName="Arduino" />
              <SkillCard skillName="Fusion360" />
              <SkillCard skillName="Cisco" />
              <SkillCard skillName="VMware" />
              <SkillCard skillName="Next.js" />
            </div>
          </div>

          {/* 保有資格/合格試験 */}
          <div className="content-field">
            <h2 className="content-head-text">Certifications</h2>
    
            <ul className={style.cert_list}>
              <li>G検定(ジェネラリスト検定)</li>
              <li>情報処理安全確保支援士試験</li>
              <li>応用情報技術者試験</li>
              <li>基本情報技術者試験</li>
            </ul>
          </div>
          
          <br />
      
          {/* 経歴/経験 */}
          <div className="content-field">
            <h2 className="content-head-text">Experiences</h2>
    
            <ul className={style.timeline}>
              <li>
                <span className={style.timeline_title}>ITインフラ業務アルバイト</span>
                <span className={style.timeline_time}>July, 2021 - February, 2022</span>
                <p>インフラ領域を専門とした企業にてアルバイトとして従事させていただきました。<br />
                  インフラ技術を実機を用いて学べるハンズオン形式の勉強会の講座作成や講師、その他サポートが主な業務内容でした。<br /><br />
                  このアルバイトにより、Cisco、Fortigate、Paloalto、Linux/Windows Server、VMwareなどの知識・技術を深めることができ、
                  ここでバイトできてよかったなと感じた、そんなアルバイトでした。<br />
                  現在もアルバイトで得た経験や知識を使って自宅サーバで遊んだりしてます。
                </p>
              </li>
              <li>
                <span className={style.timeline_title}>デジタルマーケティング支援業務アルバイト</span>
                <span className={style.timeline_time}>October, 2021 - March, 2022</span>
                <p>海外市場進出の支援などを主軸としたマーケティング企業のデジタルマーケティング事業部にてアルバイトとして従事させていただきました。<br />
                  自社やグループ企業、クライアント様のWebサイト(LP、企業HP)の保守・運用や開発といった技術系業務であったり、
                  競合他社の調査や海外マーケティング調査、デジタルマーケティングの動向調査といった調査業務が主な業務内容でした。<br /><br />
                  このバイトではマーケティングの知識はもちろん、諸外国における法規制や価値観などの知見を深めることができました。<br />
                  また、詳細は語れませんが、セキュリティ動向についても深い知見を得ることができました。
                </p>
              </li>
              <li>
                <span className={style.timeline_title}>独立系SIer入社</span>
                <span className={style.timeline_time}>April, 2022</span>
                <p>独立系SIerに入社しました。AI・IoTを主軸とした部署に配属されました。
                </p>
              </li>
            </ul>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
};
export default SkillsPage;
