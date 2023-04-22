<!-- トップページ -->

@extends('layouts.layout')

@section('title', "himazin331's page")

@section('FB_OGP')
<meta property="og:site_name" content="himazin331's page" />
<meta property="og:url" content="https://himazin331.com" />
<meta property="og:title" content="himazin331's page" />
<meta property="og:description" content="ゆるゆるITエンジニアhimazin331の普通のホームページ"/>
@endsection
@section('TW_OGP')
<meta property="og:url" content="https://himazin331.com" />
<meta property="og:title" content="himazin331's page" />
<meta property="og:description" content="ゆるゆるITエンジニアhimazin331の普通のホームページ" />
@endsection

@section('pageCSS')
<link href="./css/index.css" rel="stylesheet">
<!-- <script>alert("ページ刷新中のため随所見づらくなっております。ご了承ください。")</script> -->
@endsection

@section('navitem')
<a class="nav-item nav-link active" href="#">Home</a>
<a class="nav-item nav-link" href="{{ route('blog') }}">Blog</a>
<a class="nav-item nav-link" href="{{ route('skills') }}">Skills</a>
<a class="nav-item nav-link" href="{{ route('portfolio') }}">Portfolio</a>
@endsection

@section('content')
<div class="container-fluid justify-content-center row">
    <!-- メイン -->
    <div class="main-pain col-auto">
        <!-- メインimage -->
        <img class="img-fluid mx-auto d-block top-img" src="./img/profile_picture.png" width="256" height="256" alt="プロフィール画像">

        <!-- プロフィール -->
        <div class="content-field">
            <h2 class="content-head-text">Profile</h2>

            <!-- ニックネーム -->
            <div class="content-item">
                <div class="d-flex align-items-center profile-caption-field">
                    <span class="material-icons md-36-light" alt="ニックネーム">person</span>
                    <span class="profile-caption-text">Nickname</span>
                </div>
                <p class="profile-text">himazin331</p>
            </div>

            <!-- 誕生日 -->
            <div class="content-item">
                <div class="d-flex align-items-center profile-caption-field">
                    <span class="material-icons md-36-light" alt="誕生日">cake</span>
                    <span class="profile-caption-text">Birthday</span>
                </div>
                <p class="profile-text">2002 / 03 / 31</p>
            </div>

            <!-- 趣味 -->
            <div class="content-item">
                <div class="d-flex align-items-center profile-caption-field">
                    <span class="material-icons md-36-light" alt="趣味">laptop</span>
                    <span class="profile-caption-text">Favorite</span>
                </div>
                <p class="profile-text">プログラミング,　電子工作,　技術的ななにか,　筋トレ</p>
            </div>

            <!-- 説明 -->
            <div class="content-item">
                <div class="d-flex align-items-center profile-caption-field">
                    <span class="material-icons md-36-light" alt="説明">article</span>
                    <span class="profile-caption-text">About</span>
                </div>
                <p class="profile-text">
                    フルスタックエンジニアを夢みる、 himazin331 です。<br>
                    普段は深層学習やWebアプリの開発といったプログラミングをはじめ、セキュリティやネットワーク、電子工作に手を出しては技術に苦悶してます。
                </p>
            </div>

            <!-- 詳細ボタン -->
            <div class="profile-btn-more">
                <button class="btn" id="btn" type="button" data-bs-toggle="collapse" data-bs-target="#profile-more" aria-expanded="false" aria-controls="profile-more">
                    More
                </button>
            </div>

            <!-- 詳細プロフィール -->
            <div class="collapse" id="profile-more">
                <!-- 名前 -->              
                <div class="content-item">
                    <div class="d-flex align-items-center profile-caption-field">
                        <span class="material-icons md-36-light" alt="名前">assignment_ind</span>
                        <span class="profile-caption-text">Name</span>
                    </div>
                    <p class="profile-text">Yoshida Shion</p>
                </div> 

                <!-- 居住地 -->
                <div class="content-item">
                    <div class="d-flex align-items-center profile-caption-field">
                        <span class="material-icons md-36-light" alt="居住地">location_on</span>
                        <span class="profile-caption-text">Location</span>
                    </div>
                    <p class="profile-text">Kanagawa, Japan</p>
                </div>

                <!-- メールアドレス -->
                <div class="content-item">
                    <div class="d-flex align-items-center profile-caption-field">
                        <span class="material-icons md-36-light" alt="メールアドレス">email</span>
                        <span class="profile-caption-text">E-mail</span>
                    </div>
                    <p class="profile-text">contact@himazin331.com</p>
                </div>

                <!-- 職業 -->
                <div class="content-item">
                    <div class="d-flex align-items-center profile-caption-field">
                        <span class="material-icons md-36-light" alt="職業">work</span>
                        <span class="profile-caption-text">Job</span>
                    </div>
                    <p class="profile-text">独立系SIer ML/DL系</p>
                </div>

                <!-- 欲しい物リスト -->
                <div class="content-item">
                    <div class="d-flex align-items-center profile-caption-field">
                        <span class="material-icons md-36-light" alt="お気持ち">favorite</span>
                        <span class="profile-caption-text">Feelings</span>
                    </div>
                    <p class="profile-text">
                        <a href="https://www.amazon.jp/hz/wishlist/ls/3MXGBNSHM3Y4X?ref_=wl_share" target="_blank" rel="noopener noreferrer">Amazon欲しい物リスト(いろいろ)</a><br>
                        <a href="https://www.amazon.jp/hz/wishlist/ls/1U6AF7U9BZ3ZV?ref_=wl_share" target="_blank" rel="noopener noreferrer">Amazon欲しい物リスト(書籍)</a>
                    </p>
                </div>
            </div>
        </div>

        <!-- コミュニティ -->
        <div class="content-field">
            <h2 class="content-head-text">Community</h2>

            <div class="content-item">
                <div class="d-sm-flex align-items-center community-caption-field">
                    <span class="community-caption-text">Twitter</span>
                </div>
                <span class="community-text"><a href="https://twitter.com/himazin_shotaML" target="_blank" rel="noopener noreferrer">@himazin_shotaML</a></span>
            </div>

            <div class="content-item">
                <div class="d-sm-flex align-items-center community-caption-field">
                    <span class="community-caption-text">Facebook</span>
                </div>
                <span class="community-text"><a href="https://www.facebook.com/himazin331" target="_blank" rel="noopener noreferrer">@himazin331</a><span>
            </div>

            <div class="content-item">
                <div class="d-sm-flex align-items-center community-caption-field">
                    <span class="community-caption-text">GitHub</span>
                </div>
                <span class="community-text"><a href="https://github.com/himazin331" target="_blank" rel="noopener noreferrer">@himazin331</a><span>
            </div>

            <div class="content-item">
                <div class="d-sm-flex align-items-center community-caption-field">
                    <span class="community-caption-text">Qiita</span>
                </div>
                <span class="community-text d-sm-inline"><a href="https://qiita.com/hima_zin331" target="_blank" rel="noopener noreferrer">@hima_zin331</a><span>
            </div>
        </div>
    
        <!-- アクティビティ -->
        <div class="content-field">
            <h2 class="content-head-text">Activity</h2>
            <!-- Contributors -->
            <div class="card">
                <div class="github-contributors" id="github_contributors">
                    <img class="grass-graph" src="img/grass_graph.png">
                </div>
                <div class="col-lg col-sm github-widgets">
                    <div class="stats">
                        <img class="col-lg col-sm img-fluid" src="https://github-readme-stats.vercel.app/api?username=himazin331&count_private=true&show_icons=true"/>
                    </div>
                    <div class="langs">
                        <img class="col-lg col-sm img-fluid" src="https://github-readme-stats.vercel.app/api/top-langs/?username=himazin331"/>
                    </div>
                </div>
            </div>

            <!-- 開発中 -->
            <div style="display:none">
                <div style="margin:10px;"></div>
                <div class="card">
                    <!-- Badge -->
                    <img src="https://qiita-badge.apiapi.app/s/hima_zin331/posts.svg">
                    <img src="https://qiita-badge.apiapi.app/s/hima_zin331/contributions.svg">
                    <img src="https://qiita-badge.apiapi.app/s/hima_zin331/followers.svg">
                    <!-- 投稿記事 -->
                    <div style="margin-top:5px;">
                        <a href="https://qiita.com/hima_zin331" data-qiita-widget data-hide-header data-hide-footer data-username="hima_zin331">himazin_331のQiita</a>
                        <script src="https://qiita-widget.suin.io/widget.js" defer></script>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- サイド -->
    <div class="side-pain col-2">
        <!-- タイムライン -->
        <div class="tweet-timeline-field">
            <div class="d-none d-sm-block">
                <a class="twitter-timeline" id="twitter-timeline" href="https://twitter.com/himazin_shotaML?ref_src=twsrc%5Etfw" data-width="300" data-height="900" data-theme="dark" data-chrome="nofooter noscrollbar" data-lang="en">Tweets by himazin_shotaML</a>
            </div>
            <div class="d-block d-sm-none">
                <a class="twitter-timeline" id="twitter-timeline" href="https://twitter.com/himazin_shotaML?ref_src=twsrc%5Etfw" data-width="300" data-height="600" data-theme="dark" data-chrome="nofooter noscrollbar" data-lang="en">Tweets by himazin_shotaML</a>
            </div>
            <script src="https://platform.twitter.com/widgets.js" charset="utf-8" defer></script>
        </div>
    </div> 
</div>

@endsection
