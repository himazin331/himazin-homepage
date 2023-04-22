import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import Head from "@/components/head";
import style from "@/styles/index.module.css";

const Index: NextPage = () => {
  return (
    <>
      <Head origin_url={"https://himazin331.com" + useRouter().pathname} />
      <div className="wrapper">
        <div className={`${style.container_fluid} container-fluid justify-content-center row`}>
          {/* <!-- メイン --> */}
          <div className="main-pain col-auto">
            {/* <!-- メインimage --> */}
            <Image className="img-fluid mx-auto d-block top-img" src="/images/profile_picture.png" alt="プロフィール画像" width={256} height={256} />
            
            {/* <!-- プロフィール --> */}
            <div className={style.content_field}>
              <h2 className="content-head-text">Profile</h2>

              {/* <!-- ニックネーム --> */}
              <div className={style.content_item}>
                <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                  <span className={`${style.material_icons_md_36_light} material-icons md-36-light`} alt="ニックネーム">person</span>
                  <span className={style.profile_caption_text}>Nickname</span>
                </div>
                <p className={style.profile_text}>himazin331</p>
              </div>
              {/* <!-- 誕生日 --> */}
              <div className={style.content_item}>
                <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                  <span className={`${style.material_icons_md_36_light} material-icons md-36-light`} alt="誕生日">cake</span>
                  <span className={style.profile_caption_text}>Birthday</span>
                </div>
                <p className={style.profile_text}>2002 / 03 / 31</p>
              </div>
              {/* <!-- 趣味 --> */}
              <div className={style.content_item}>
                <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                  <span className={`${style.material_icons_md_36_light} material-icons md-36-light`} alt="趣味">laptop</span>
                  <span className={style.profile_caption_text}>Favorite</span>
                </div>
                <p className={style.profile_text}>プログラミング,　電子工作,　技術的ななにか,　筋トレ</p>
              </div>
              {/* <!-- 説明 --> */}
              <div className={style.content_item}>
                <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                  <span className={`${style.material_icons_md_36_light} material-icons md-36-light`} alt="説明">article</span>
                  <span className={style.profile_caption_text}>About</span>
                </div>
                <p className={style.profile_text}>
                  フルスタックエンジニアを夢みる、 himazin331 です。<br />
                  普段は深層学習やWebアプリの開発といったプログラミングをはじめ、セキュリティやネットワーク、電子工作に手を出しては技術に苦悶してます。
                </p>
              </div>

              {/* <!-- 詳細ボタン --> */}
              <div className={style.profile_btn_more}>
                <button className="btn" id="btn" type="button" data-bs-toggle="collapse" data-bs-target="#profile-more" aria-expanded="false" aria-controls="profile-more">
                  More
                </button>
              </div>
              {/* <!-- 詳細プロフィール --> */}
              <div className="collapse" id="profile-more">
                {/* <!-- 名前 --> */}
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <span className={`${style.material_icons_md_36_light} material-icons md-36-light`} alt="名前">assignment_ind</span>
                    <span className={style.profile_caption_text}>Name</span>
                  </div>
                  <p className={style.profile_text}>Yoshida Shion</p>
                </div> 
                {/* <!-- 居住地 --> */}
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <span className={`${style.material_icons_md_36_light} material-icons md-36-light`} alt="居住地">location_on</span>
                    <span className={style.profile_caption_text}>Location</span>
                  </div>
                  <p className={style.profile_text}>Kanagawa, Japan</p>
                </div>
                {/* <!-- メールアドレス --> */}
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <span className={`${style.material_icons_md_36_light} material-icons md-36-light`} alt="メールアドレス">email</span>
                    <span className={style.profile_caption_text}>E-mail</span>
                  </div>
                  <p className={style.profile_text}>contact@himazin331.com</p>
                </div>
                {/* <!-- 職業 --> */}
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <span className={`${style.material_icons_md_36_light} material-icons md-36-light`} alt="職業">work</span>
                    <span className={style.profile_caption_text}>Job</span>
                  </div>
                  <p className={style.profile_text}>独立系SIer ML/DL系</p>
                </div>
                {/* <!-- 欲しい物リスト --> */}
                <div className={style.content_item}>
                  <div className={`${style.profile_caption_field} d-flex align-items-center`}>
                    <span className={`${style.material_icons_md_36_light} material-icons md-36-light`} alt="お気持ち">favorite</span>
                    <span className={style.profile_caption_text}>Feelings</span>
                  </div>
                  <p className={style.profile_text}>
                    <a href="https://www.amazon.jp/hz/wishlist/ls/3MXGBNSHM3Y4X?ref_=wl_share" target="_blank" rel="noopener noreferrer">Amazon欲しい物リスト(いろいろ)</a><br />
                    <a href="https://www.amazon.jp/hz/wishlist/ls/1U6AF7U9BZ3ZV?ref_=wl_share" target="_blank" rel="noopener noreferrer">Amazon欲しい物リスト(書籍)</a>
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- コミュニティ --> */}
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
                <span className={`${style.community_text} community-text d-sm-inline`}><a href="https://qiita.com/hima_zin331" target="_blank" rel="noopener noreferrer">@hima_zin331</a></span>
              </div>
            </div>

            {/* <!-- アクティビティ --> */}
            <div className={style.content_field}>
              <h2 className="content-head-text">Activity</h2>

              {/* <!-- Contributors --> */}
              <div className={`${style.card} card`}>
                <div className={style.github_contributors} id="github_contributors">
                  <Image className={style.grass_graph} src="/images/grass_graph.png" alt="github contributes" width={717} height={112} style={{width: "98%", height: "auto"}} />
                </div>
                <div className={`${style.github_widgets} col-lg col-sm`}>
                  <div className={`${style.stats} stats`}>
                    <img className="col-lg col-sm img-fluid" src="https://github-readme-stats.vercel.app/api?username=himazin331&count_private=true&show_icons=true" />
                  </div>
                  <div className={`${style.langs} langs`}>
                    <img className="col-lg col-sm img-fluid" src="https://github-readme-stats.vercel.app/api/top-langs/?username=himazin331" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- サイド --> */}
          <div className={`${style.side_pain} col-2`}>
            {/* <!-- タイムライン --> */}
            <div className={style.tweet_timeline_field}>
              <div className="d-none d-sm-block">
                <a className="twitter-timeline" id="twitter-timeline" href="https://twitter.com/himazin_shotaML?ref_src=twsrc%5Etfw" data-width="300" data-height="900" data-theme="dark" data-chrome="nofooter noscrollbar" data-lang="en">Tweets by himazin_shotaML</a>
              </div>
              <div className="d-block d-sm-none">
                <a className="twitter-timeline" id="twitter-timeline" href="https://twitter.com/himazin_shotaML?ref_src=twsrc%5Etfw" data-width="300" data-height="600" data-theme="dark" data-chrome="nofooter noscrollbar" data-lang="en">Tweets by himazin_shotaML</a>
              </div>
              <script src="https://platform.twitter.com/widgets.js" defer></script>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* <!-- Bootstrap JavaScript --> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </>
  );
};
export default Index;
