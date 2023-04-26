/* スキルページ */

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";
import Footer from "@/components/footer";
import Head from "@/components/head";
import SkillCard from "@/components/parts/skill_card";
import style from "@/styles/skills.module.css";

const Skills: NextPage = () => {
  return (
    <>
      <Head title="Skills" origin_url={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <div className="container">
          <h1 className="page-top-sentence">Skills</h1>

          {/* <!-- 勉強したプログラミング言語 --> */}
          <div className="content-field">
            <h2 className="content-head-text">Programming Languages</h2>
    
            <div className="text-center">
              <SkillCard image_path="/images/skills/1python.png" image_alt="Python3ロゴ" skill_name="Python3" />
              <SkillCard image_path="/images/skills/2vbnet.png" image_alt="VB.NETロゴ" skill_name="VB.NET" />
              <SkillCard image_path="/images/skills/3c.png" image_alt="Cロゴ" skill_name="C" />
              <SkillCard image_path="/images/skills/4htmlcss.png" image_alt="HTML5/CSS3ロゴ" skill_name="HTML5/CSS3" />
              <SkillCard image_path="/images/skills/5js.png" image_alt="JSロゴ" skill_name="JavaScript" />
              <SkillCard image_path="/images/skills/6php.png" image_alt="PHPロゴ" skill_name="PHP" />
              <SkillCard skill_name="TypeScript" />
            </div>
          </div>

          {/* <!-- 勉強したフレームワーク --> */}
          <div className="content-field">
            <h2 className="content-head-text">Framework</h2>
    
            <div className="text-center">
              <SkillCard image_path="/images/skills/7tensorflow.png" image_alt="TensorFlowロゴ" skill_name="TensorFlow" />
              <SkillCard image_path="/images/skills/8opencv.png" image_alt="OpenCVロゴ" skill_name="OpenCV" />
              <SkillCard image_path="/images/skills/9selenium.png" image_alt="Seleniumロゴ" skill_name="Selenium" />
              <SkillCard image_path="/images/skills/10jquery.png" image_alt="jQueryロゴ" skill_name="jQuery" />
              <SkillCard image_path="/images/skills/11bootstrap.png" image_alt="Bootstrapロゴ" skill_name="Bootstrap" />
              <SkillCard image_path="/images/skills/12laravel.png" image_alt="Laravelロゴ" skill_name="Laravel" />
              <SkillCard skill_name="Flask" />
              <SkillCard skill_name="PyQt(PySide2)" />
              <SkillCard skill_name="React" />
            </div>
          </div>
      
          {/* <!-- 勉強したミドルウェア等 --> */}
          <div className="content-field">
            <h2 className="content-head-text">Other</h2>
    
            <div className="text-center">
              <SkillCard skill_name="MySQL" />
              <SkillCard skill_name="Apache" />
              <SkillCard skill_name="Nginx" />
              <SkillCard skill_name="Azure" />
              <SkillCard skill_name="AWS" />
              <SkillCard skill_name="Git" />
              <SkillCard skill_name="Arduino" />
              <SkillCard skill_name="Fusion360" />
              <SkillCard skill_name="Cisco" />
              <SkillCard skill_name="VMware" />
              <SkillCard skill_name="Next.js" />
            </div>
          </div>

          {/* <!-- 保有資格/合格試験 --> */}
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
      
          {/* <!-- 経歴/経験 --> */}
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
        </div>

        <Footer />
      </div>

      {/* <!-- Bootstrap JavaScript --> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></Script>
    </>
  );
};
export default Skills;
