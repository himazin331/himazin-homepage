<!-- ポートフォリオ -->

@extends('layouts.layout')

@section('title', "Portfolio | himazin331's page")

@section('FB_OGP')
<meta property="og:site_name" content="Portfolio | himazin331's page" />
<meta property="og:url" content="https://himazin331.com/portfolio" />
<meta property="og:title" content="Portfolio | himazin331's page" />
<meta property="og:description" content="情報系専門学生himazin331のぽーとふぉりお"/>
@endsection
@section('TW_OGP')
<meta property="og:url" content="https://himazin331.com/portfolio" />
<meta property="og:title" content="Portfolio | himazin331's page" />
<meta property="og:description" content="情報系専門学生himazin331のぽーとふぉりお" />
@endsection

@section('pageCSS')
<link href="./css/portfolio.css" rel="stylesheet">
@endsection

@section('navitem')
<a class="nav-item nav-link" href="{{ route('index') }}">Home</a>
<a class="nav-item nav-link" href="{{ route('blog') }}">Blog</a>
<a class="nav-item nav-link" href="{{ route('skills') }}">Skills</a>
<a class="nav-item nav-link active" href="#">Portfolio</a>
@endsection

@section('content')
<div class="container">
    <h1 class="page-top-sentence">Portfolio</h1>

    <!-- プロダクト一覧 -->
    <div class="content-field">
        <div class="row justify-content-md-center">
            <!-- ワークアウト管理アプリ -->
            <div class="col-md">
                <div class="card h-100">
                    <a href="#portfolio8_md" data-bs-toggle="modal"><img class="card-img-top" src="./img/portfolio/8-1.png" alt="ワークアウト管理アプリ"></a>
                    <div class="card-body">
                        <h5 class="card-title" >ワークアウト管理アプリ</h5><span class="badge bg-info text-light">開発中</span>
                        <h6 class="keyword">WebApp, Database</h6>
                        <p class="card-text">自由性が高く簡単にワークアウトメニューや摂取カロリーを記録できるワークアウト管理アプリ。</p>
                        <button class="btn" data-bs-toggle="modal" data-bs-target="#portfolio8_md">More</button>
                    </div>
                </div>
            </div>

            <!-- Hexapod -->
            <div class="col-md">
                <div class="card h-100">
                    <a href="#portfolio7_md" data-bs-toggle="modal"><img class="card-img-top" src="./img/portfolio/7-1.jpg" alt="Hexapod"></a>
                    <div class="card-body">
                        <h5 class="card-title">Hexapod</h5><span class="badge bg-info text-light">開発中</span>
                        <h6 class="keyword">Hardware, IoT, WebApp</h6>
                        <p class="card-text">６本の脚があり計18個のサーボモータを搭載するロボット。</p>

                        <button class="btn" data-bs-toggle="modal" data-bs-target="#portfolio7_md">More</button>
                    </div>
                </div>
            </div>

            <!-- 歩容認証 -->
            <div class="col-md">
                <div class="card h-100">
                    <a href="#portfolio6_md" data-bs-toggle="modal"><img class="card-img-top" src="./img/portfolio/6-1.png" alt="歩容認証技術"></a>
                    <div class="card-body">
                        <h5 class="card-title">ポーズ推定モデルを活用した歩容認証技術の実装</h5>
                        <h6 class="keyword">Machine/DeepLearning</h6>
                        <p class="card-text">ポーズ推定モデルを用いて歩容認証を実装してみる。</p>

                        <button class="btn" data-bs-toggle="modal" data-bs-target="#portfolio6_md">More</button>
                    </div>
                </div>
            </div>

            <!-- ホームページ -->
            <div class="col-md">
                <div class="card h-100">
                    <a href="#portfolio5_md" data-bs-toggle="modal"><img class="card-img-top" src="./img/portfolio/5-1.jpg" alt="ホームページ"></a>
                    <div class="card-body">
                        <h5 class="card-title">ホームページ</h5><span class="badge bg-info text-light">制作中</span>
                        <h6 class="keyword">WebSite</h6>
                        <p class="card-text">いまあなたがアクセスして閲覧しているこのページ。<br>自作ブログも開設予定。</p>

                        <button class="btn portfolio-btn" data-bs-toggle="modal" data-bs-target="#portfolio5_md">More</button>
                    </div>
                </div>
            </div>

            <!-- スマートロック -->
            <div class="col-md">
                <div class="card h-100">
                    <a href="#portfolio4_md" data-bs-toggle="modal"><img class="card-img-top" src="./img/portfolio/4-1.jpg" alt="スマートロック"></a>
                    <div class="card-body">
                        <h5 class="card-title">セキュアなスマートロック</h5>
                        <h6 class="keyword">Hardware, IoT, AI, WebApp</h6>
                        <p class="card-text">２要素認証による解錠とWebアプリを通じて遠隔から施錠/解錠ができるスマートロック。</p>

                        <button class="btn portfolio-btn" data-bs-toggle="modal" data-bs-target="#portfolio4_md">More</button>
                    </div>
                </div>
            </div>

            <!-- 匿名掲示板サイト -->
            <div class="col-md">
                <div class="card h-100">
                    <a href="#portfolio3_md" data-bs-toggle="modal"><img class="card-img-top" src="./img/portfolio/3-1.jpg" alt="掲示板サイト"></a>
                    <div class="card-body">
                        <h5 class="card-title">エンジニア向け<br>匿名掲示板サイト</h5>
                        <h6 class="keyword">WebApp, Database</h6>
                        <p class="card-text">マークダウン記法による投稿が可能な匿名掲示板サイト。スレッド作成機能やタグ機能も装備。</p>

                        <button class="btn" data-bs-toggle="modal" data-bs-target="#portfolio3_md">More</button>
                    </div>
                </div>
            </div>

            <!-- フローチャート作成アプリ -->
            <div class="col-md">
                <div class="card h-100">
                    <a href="#portfolio2_md" data-bs-toggle="modal"><img class="card-img-top" src="./img/portfolio/2.jpg" alt="フローチャート作成アプリ"></a>
                    <div class="card-body">
                        <h5 class="card-title">簡易的フローチャート<br>作成アプリ</h5>
                        <h6 class="keyword">GUIApp</h6>
                        <p class="card-text">簡易的なフローチャートを作成することができるアプリ。ファイル保存機能やオブジェクトの自動整列機能など装備。</p>

                        <button disabled class="btn" data-bs-toggle="modal" data-bs-target="#portfolio2_md">No details</button>
                    </div>
                </div>
            </div>

            <!-- 採譜支援アプリ -->
            <div class="col-md">
                <div class="card h-100">
                    <a href="#portfolio1_md" data-bs-toggle="modal"><img class="card-img-top" src="./img/portfolio/noimage.jpg" alt="採譜支援アプリ"></a>
                    <div class="card-body">
                        <h5 class="card-title">採譜支援アプリ</h5>
                        <h6 class="keyword">CLIApp</h6>
                        <p class="card-text">.wavに対してFFTを用いて周波数を導き出し、対応した音階を出力し採譜(いわゆる耳コピ)を支援。</p>

                        <button disabled class="btn" data-bs-toggle="modal" data-bs-target="#portfolio1_md">No details</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--
    プロダクト詳細
-->

<!-- ワークアウト管理アプリ詳細 -->
<div class="modal fade" id="portfolio8_md" tabindex="-1" role="dialog" aria-labelledby="portfolio8_md_TT" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content">
            <!-- タイトル -->
            <div class="modal-header">
                <h5 class="modal-title" id="portfolio8_md_TT">ワークアウト管理アプリ<span class="badge bg-info text-light">開発中</span><br><span style="font-size:15.43px;">WebApp, Database</span></h5>
                <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <!-- 画像 -->
                <div class="carousel carousel-fade carousel-dark slide mx-auto" id="carouselIndicators8" data-bs-ride="carousel" data-bs-interval="false">
                    <ol class="carousel-indicators">
                        <li class="active" data-bs-target="#carouselIndicators8" data-bs-slide-to="0"></li>
                        <li data-bs-target="#carouselIndicators8" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselIndicators8" data-bs-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./img/portfolio/8-1.png" alt="ダッシュボード">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/8-2.png" alt="記録ページ">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/8-3.png" alt="記録閲覧ページ">
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselIndicators8" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselIndicators8" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <!-- 内容 -->
                <div class="portfolio-field">
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>概　　要:</span>
                        </div>
                        <p class="portfolio-sentence">高い自由性で簡単にワークアウト管理を行えるWebアプリ</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発期間:</span>
                        </div>
                        <p class="portfolio-sentence">現行 (個人開発)</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発環境:</span>
                        </div>
                        <p class="portfolio-sentence">HTML5/CSS, Javascript, PHP, SQL<br>Nginx, Laravel, Bootstrap, MySQL, Amazon S3</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>U　R　L :</span>
                        </div>
                        <p class="portfolio-sentence">
                            <a href="https://github.com/himazin331/WorkoutManagement" target="_blank" rel="noopener noreferrer">GitHub</a><br>
                            <a href="https://esxi.himazin331.com" target="_blank" rel="noopener noreferrer">Webアプリ(予告なく非公開になる可能性があります)</a><br>
                        </p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>詳　　細:</span>
                        </div>
                        <p class="portfolio-sentence">
                            このWebアプリは、１日のトレーニングメニューや摂取カロリー、画像の記録が行えるアプリとなっています。<br>
                            アップロードした画像はAmazon S3にアップロードされ、Webアプリ上で閲覧が可能です。<br>
                            簡単な操作性と高い自由性を求めて開発しました。
                            また、このWebアプリの開発にあたり、インフラからフロント、バックまで全て私１人で開発しました。
                            <br><br>
                            <span style="font-weight:bold;">動作デモが可能です</span><br>
                            テストユーザID：testuser1<br>
                            テストユーザPW：password<br>

                            ※未完成により動作が不安定なところがあります。<br>
                            ※このWebアプリのインフラ環境が、自宅サーバと加入データセンターから貸与されたグローバルIPアドレスを用いており、サーバ、ネットワーク共にすべてオンプレミスとなっています。<br>
                            そのため、サーバやネットワークに高い負荷をかけるような行為はしないようお願いいたします。<br>
                        </p>
                    </div>
                </div>
            </div>

            <!-- 閉じるボタン -->
            <div class="modal-footer">
                <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Hexapod詳細 -->
<div class="modal fade" id="portfolio7_md" tabindex="-1" role="dialog" aria-labelledby="portfolio7_md_TT" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content">
            <!-- タイトル -->
            <div class="modal-header">
                <h5 class="modal-title" id="portfolio7_md_TT">Hexapod<span class="badge bg-info text-light">開発中</span><br><span style="font-size:15.43px;">Hardware, IoT, WebApp</span></h5>
                <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <!-- 画像 -->
                <div class="carousel carousel-fade carousel-dark slide mx-auto" id="carouselIndicators7" data-bs-ride="carousel" data-bs-interval="false">
                    <ol class="carousel-indicators">
                        <li class="active" data-bs-target="#carouselIndicators7" data-bs-slide-to="0"></li>
                        <li data-bs-target="#carouselIndicators7" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselIndicators7" data-bs-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./img/portfolio/7-1.jpg" alt="Hexapod">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/7-2.png" alt="Webコントローラ">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/7-3.png" alt="アルバムページ">
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselIndicators7" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselIndicators7" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <!-- 内容 -->
                <div class="portfolio-field">
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>概　　要:</span>
                        </div>
                        <p class="portfolio-sentence">６本の脚があり計18個のサーボモータを搭載するロボット通称「Hexapod」の開発</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発期間:</span>
                        </div>
                        <p class="portfolio-sentence">現行 (個人開発)</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発環境:</span>
                        </div>
                        <p class="portfolio-sentence">Python3, HTML5, Javascript<br>Flask, MJPG-Streamer, pigpio, Adafruit-PCA9685, Apache, Amazon S3, Raspberry Pi</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>U　R　L :</span>
                        </div>
                        <p class="portfolio-sentence">
                            <a href="https://github.com/himazin331/Hexapod" target="_blank" rel="noopener noreferrer">GitHub</a><br>
                        </p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>詳　　細:</span>
                        </div>
                        <p class="portfolio-sentence">
                            １本につき３箇所の関節部をもつ脚が６本あるロボットの開発。ロボットの造形は3Dプリンタ印刷。<br>
                            操作はWebアプリ上で行い、Raspberry Pi GPIOからサーボモータへPWM信号を送ることで制御します。<br>
                            また、カメラを搭載し、カメラ映像の録画や閲覧ができます。WebアプリはFlask、カメラ映像のストリーミング配信はMJPG-Streamerで実装。
                            <br><br>
                            画像は開発中のものです。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 閉じるボタン -->
            <div class="modal-footer">
                <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- 歩容認証詳細 -->
<div class="modal fade" id="portfolio6_md" tabindex="-1" role="dialog" aria-labelledby="portfolio6_md_TT" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content">
            <!-- タイトル -->
            <div class="modal-header">
                <h5 class="modal-title" id="portfolio6_md_TT">ポーズ推定モデルを活用した歩容認証技術の実装<br><span style="font-size:15.43px;">Machine/DeepLearning</span></h5>
                <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <!-- 画像 -->
                <div class="carousel carousel-fade carousel-dark slide mx-auto" id="carouselIndicators6" data-bs-ride="carousel" data-bs-interval="false">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselIndicators6" data-bs-slide-to="0"></li>
                        <li data-bs-target="#carouselIndicators6" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselIndicators6" data-bs-slide-to="2"></li>
                        <li data-bs-target="#carouselIndicators6" data-bs-slide-to="3"></li>
                        <li data-bs-target="#carouselIndicators6" data-bs-slide-to="4"></li>
                        <li data-bs-target="#carouselIndicators6" data-bs-slide-to="5"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./img/portfolio/6-1.png" alt="関節体モデル">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/6-2.png" alt="関節体モデル補正処理">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/6-3.png" alt="人物識別">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/6-4.png" alt="関節体モデル生成">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/6-5.png" alt="識別フェーズ">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/6-6.png" alt="ポスター画像">
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselIndicators6" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselIndicators6" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <!-- 内容 -->
                <div class="portfolio-field">
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>概　　要:</span>
                        </div>
                        <p class="portfolio-sentence">ポーズ推定モデルを活用した歩容認証技術の実装</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発期間:</span>
                        </div>
                        <p class="portfolio-sentence">約４ヶ月 (個人開発)</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発環境:</span>
                        </div>
                        <p class="portfolio-sentence">Python3<br>Tensorflow, GluonCV, MXNet, OpenCV</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>U　R　L :</span>
                        </div>
                        <p class="portfolio-sentence">
                            <a href="https://github.com/himazin331/Pose-GaitRecognition" target="_blank" rel="noopener noreferrer">GitHub</a><br>
                            <a href="https://www.slideshare.net/secret/w0eNMQ0x0KUfnM" target="_blank" rel="noopener noreferrer">スライド(SlideShare)</a><br>
                            <a href="https://youtu.be/x1NnCyW9qvw" target="_blank" rel="noopener noreferrer">実行動画(YouTube)</a><br>
                        </p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>詳　　細:</span>
                        </div>
                        <p class="portfolio-sentence">
                            まず前提として歩容識別技術とは、人の歩き方で人物を認識する技術のことを指します。<br>
                            歩容識別技術はセンサであるカメラから対象人物に距離があっても認識に影響しないという長所があります。<br><br>

                            この技術には大別して２つの手法があり、１つはアピアランスベース手法と呼ばれ、見えに基づいた特徴量を利用する手法で、歩容シルエットを用いるのが一般的です。<br>
                            そしてもう１つはモデルベース手法と呼ばれる、関節体モデルを構築し、関節の座標や位置関係といった特徴量を利用する手法です。<br>
                            しかし、この手法は関節体モデルを作成するのに、高い技量と多くの時間を必要とするやり方が多く、コストが高いことが課題となっています。<br><br>

                            そこで、私は深層学習によるポーズ推定モデルを用いて関節体モデルを作成することでコストを削減できるのではないかと考え、<br>
                            その考えを具現化することを目的に取り組みました。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 閉じるボタン -->
            <div class="modal-footer">
                <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- ホームページ詳細 -->
<div class="modal fade" id="portfolio5_md" tabindex="-1" role="dialog" aria-labelledby="portfolio5_md_TT" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content">
            <!-- タイトル -->
            <div class="modal-header">
                <h5 class="modal-title" id="portfolio5_md_TT">ホームページ<span class="badge bg-info text-light">制作中</span><br><span style="font-size:15.43px;">WebSite</span></h5>
                <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <!-- 画像 -->
                <div class="carousel carousel-fade carousel-dark slide mx-auto" id="carouselIndicators5" data-bs-ride="carousel" data-bs-interval="false">
                    <ol class="carousel-indicators">
                        <li class="active" data-bs-target="#carouselIndicators5" data-bs-slide-to="0"></li>
                        <li data-bs-target="#carouselIndicators5" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselIndicators5" data-bs-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./img/portfolio/5-1.jpg" alt="メインページ">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/5-2.jpg" alt="スキルページ">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/5-3.jpg" alt="ポートフォリオページ">
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselIndicators5" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselIndicators5" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <!-- 内容 -->
                <div class="portfolio-field">
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>概　　要:</span>
                        </div>
                        <p class="portfolio-sentence">私のホームページ兼ポートフォリオ</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発期間:</span>
                        </div>
                        <p class="portfolio-sentence">現行 (個人開発)</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発環境:</span>
                        </div>
                        <p class="portfolio-sentence">HTML5/CSS, Javascript, PHP<br>Nginx, Laravel</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>U　R　L :</span>
                        </div>
                        <p class="portfolio-sentence">
                            <a href="https://github.com/himazin331/himazin-homepage" target="_blank" rel="noopener noreferrer">GitHub</a><br>
                        </p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>詳　　細:</span>
                        </div>
                        <p class="portfolio-sentence">
                            自宅サーバ(VMware)上の仮想マシンをWebサーバとして運用しています。<br>
                            レスポンシブデザインはBootstrapを用いて実現しています。<br><br>
                            脆弱性テストや負荷テストも実施して、セキュリティと可用性を確保しています。<br><br>
                            自作の技術ブログも当サイトで開設しようと奮闘していますので、もしご興味があれば覗いてみてください。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 閉じるボタン -->
            <div class="modal-footer">
                <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- スマートロック詳細 -->
<div class="modal fade" id="portfolio4_md" tabindex="-1" role="dialog" aria-labelledby="portfolio4_md_TT" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content">
            <!-- タイトル -->
            <div class="modal-header">
                <h5 class="modal-title" id="portfolio4_md_TT">セキュアなスマートロック<br><span style="font-size:15.43px;">Hardware, IoT, AI, WebApp</span></h5>
                <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <!-- 画像 -->
                <div class="carousel carousel-fade slide mx-auto" id="carouselIndicators4" data-bs-ride="carousel" data-bs-interval="false">
                    <ol class="carousel-indicators">
                        <li class="active" data-bs-target="#carouselIndicators4" data-bs-slide-to="0"></li>
                        <li data-bs-target="#carouselIndicators4" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselIndicators4" data-bs-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./img/portfolio/4-1.jpg" alt="スマートロック本体">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/4-2.png" alt="電子回路">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/4-3.jpg" alt="システム構成図">
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselIndicators4" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselIndicators4" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <!-- 内容 -->
                <div class="portfolio-field">
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>概　　要:</span>
                        </div>
                        <p class="portfolio-sentence">生体情報である顔と所有物であるスマホのMACアドレスの２要素認証で鍵の解錠ができる。<br>
                            また、Webアプリを通して施錠/解錠も可能。</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発期間:</span>
                        </div>
                        <p class="portfolio-sentence">約２ヶ月 (個人開発)</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発環境:</span>
                        </div>
                        <p class="portfolio-sentence">Python3, C/C++, HTML5, Javascript<br>
                            Ajax, pigpio, Tensorflow, OpenCV, Apache, Azure VM, Raspberry Pi, ESP32</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>U　R　L :</span>
                        </div>
                        <p class="portfolio-sentence">
                            <a href="https://github.com/himazin331/smartlock" target="_blank" rel="noopener noreferrer">GitHub</a><br>
                            <a href="https://youtu.be/xBleq3s7Xvk" target="_blank" rel="noopener noreferrer">YouTube</a>
                        </p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>詳　　細:</span>
                        </div>
                        <p class="portfolio-sentence">
                            インフラ構築から回路製作、Webアプリ開発まで一貫して作業しました。<br>
                            顔認識ではTensorflow Lite + MobileNetV2を用いて低性能なラズパイゼロでも高速に処理が可能となっています。<br><br>
                            システム構成について疑問に思うところがあるかと思いますが、詳細はGitHubをみてください。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 閉じるボタン -->
            <div class="modal-footer">
                <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- 掲示板サイト詳細 -->
<div class="modal fade" id="portfolio3_md" tabindex="-1" role="dialog" aria-labelledby="portfolio3_md_TT" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
        <div class="modal-content">
            <!-- タイトル -->
            <div class="modal-header">
                <h5 class="modal-title" id="portfolio3_md_TT">エンジニア向け匿名掲示板サイト<br><span style="font-size:15.43px;">WebApp, Database</span></h5>
                <button class="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <!-- 画像 -->
                <div class="carousel carousel-fade carousel-dark slide mx-auto" id="carouselIndicators3" data-bs-ride="carousel" data-bs-interval="false">
                    <ol class="carousel-indicators">
                        <li class="active" data-bs-target="#carouselIndicators3" data-bs-slide-to="0"></li>
                        <li data-bs-target="#carouselIndicators3" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselIndicators3" data-bs-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./img/portfolio/3-1.jpg" alt="メインページ">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/3-2.jpg" alt="スレッド作成モーダル">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./img/portfolio/3-3.jpg" alt="スレッドページ">
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselIndicators3" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselIndicators3" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <!-- 内容 -->
                <div class="portfolio-field">
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>概　　要:</span>
                        </div>
                        <p class="portfolio-sentence">マークダウン記法による掲示板投稿が可能なエンジニア向け匿名掲示板サイト</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発期間:</span>
                        </div>
                        <p class="portfolio-sentence">約２週間 (チーム開発)</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>開発環境:</span>
                        </div>
                        <p class="portfolio-sentence">HTML5/CSS3, PHP, Javascript, SQL<br>
                            Apache, AWS EC2, MySQL, jQuery, Marked.js, SimpleMDE</p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>U　R　L :</span>
                        </div>
                        <p class="portfolio-sentence">
                            <a href="https://github.com/himazin331/techanony" target="_blank" rel="noopener noreferrer">GitHub</a><br>
                            <a href="http://34.234.120.153/main/" target="_blank" rel="noopener noreferrer">サイト (予告なく非公開になる可能性があります)</a><br>
                        </p>
                    </div>
                    <div class="portfolio-item">
                        <div class="portfolio-subject">
                            <span>詳　　細:</span>
                        </div>
                        <p class="portfolio-sentence">
                            Marked.jsとSimpleMDEを使うことにより、マークダウン記法による書き込みができるようになっています。<br>
                            タグ機能やスレッド検索機能も備えています。<br><br>
                            注: レスポンシブ非対応ですので、レイアウト崩れご容赦ください。<br>
                            また、ある程度はセキュリティ面に配慮してますが、不完全な部分があるかと思いますので、<br>
                            攻撃や過負荷をかけるなどの行為はやめてください。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 閉じるボタン -->
            <div class="modal-footer">
                <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
@endsection