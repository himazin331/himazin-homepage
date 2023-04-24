/* スキルページ */

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";
import Footer from "@/components/footer";
import Head from "@/components/head";
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
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/1python.png" alt="Python3ロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Python3</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/2vbnet.png" alt="VB.NETロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">VB.NET</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/3c.png" alt="Cロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">C</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/4htmlcss.png" alt="HTML5/CSS3ロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">HTML5/CSS3</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/5js.png" alt="JSロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">JavaScript</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/6php.png" alt="PHPロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">PHP</p>
                        </div>
                    </div>

                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">TypeScript</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 勉強したフレームワーク --> */}
            <div className="content-field">
                <h2 className="content-head-text">Framework</h2>
        
                <div className="text-center">
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/7tensorflow.png" alt="TensorFlowロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">TensorFlow</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/8opencv.png" alt="OpenCVロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">OpenCV</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/9selenium.png" alt="Seleniumロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Selenium</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/10jquery.png" alt="jQueryロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">jQuery</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/11bootstrap.png" alt="Bootstrapロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Bootstrap</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <Image className="bd-placeholder-img card-img-top" src="/images/skills/12laravel.png" alt="Laravelロゴ" width={288} height={110}></Image>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Laravel</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Flask</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">PyQt(PySide2)</p>
                        </div>
                    </div>

                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">React</p>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* <!-- 勉強したミドルウェア等 --> */}
            <div className="content-field">
                <h2 className="content-head-text">Other</h2>
        
                <div className="text-center">
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">MySQL</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Apache</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Nginx</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Azure</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">AWS</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Git</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Arduino</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Fusion360</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Cisco</p>
                        </div>
                    </div>
        
                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">VMware</p>
                        </div>
                    </div>

                    <div className={`${style.card} card`}>
                        <div className="card-body">
                            <p className="card-title p-h5replace">Next.js</p>
                        </div>
                    </div>
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
                        <p>独立系SIerに入社しました。AI・IoTを主軸とした組み込み系の部署に配属される予定です。
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
