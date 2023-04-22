<!-- スキルページ -->

@extends('layouts.layout')

@section('title', "Skills | himazin331's page")

@section('FB_OGP')
<meta property="og:site_name" content="Skills | himazin331's page" />
<meta property="og:url" content="https://himazin331.com/skills" />
<meta property="og:title" content="Skills | himazin331's page" />
<meta property="og:description" content="その辺の情報系専門学生himazin331の低スキル"/>
@endsection
@section('TW_OGP')
<meta property="og:url" content="https://himazin331.com/skills" />
<meta property="og:title" content="Skills | himazin331's page" />
<meta property="og:description" content="その辺の情報系専門学生himazin331の低スキル" />
@endsection

@section('pageCSS')
<link href="./css/skills.css" rel="stylesheet">
@endsection

@section('navitem')
<a class="nav-item nav-link" href="{{ route('index') }}">Home</a>
<a class="nav-item nav-link" href="{{ route('blog') }}">Blog</a>
<a class="nav-item nav-link active" href="#">Skills</a>
<a class="nav-item nav-link" href="{{ route('portfolio') }}">Portfolio</a>
@endsection

@section('content')
<div class="container">
    <h1 class="page-top-sentence">Skills</h1>

    <!-- 勉強したプログラミング言語 -->
    <div class="content-field">
        <h2 class="content-head-text">Programming Languages</h2>

        <div class="text-center">
            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/1python.png" alt="Python3ロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">Python3</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/2vbnet.png" alt="VB.NETロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">VB.NET</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/3c.png" alt="Cロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">C</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/4htmlcss.png" alt="HTML5/CSS3ロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">HTML5/CSS3</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/5js.png" alt="JSロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">JavaScript</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/6php.png" alt="PHPロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">PHP</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 勉強したフレームワーク -->
    <div class="content-field">
        <h2 class="content-head-text">Framework</h2>

        <div class="text-center">
            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/7tensorflow.png" alt="TensorFlowロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">TensorFlow</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/8opencv.png" alt="OpenCVロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">OpenCV</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/9selenium.png" alt="Seleniumロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">Selenium</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/10jquery.png" alt="jQueryロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">jQuery</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/11bootstrap.png" alt="Bootstrapロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">Bootstrap</p>
                </div>
            </div>

            <div class="card">
                <img class="bd-placeholder-img card-img-top" src="./img/skills/12laravel.png" alt="Laravelロゴ"></img>
                <div class="card-body">
                    <p class="card-title p-h5replace">Laravel</p>
                </div>
            </div>

            <div class="card block-start">
                <div class="card-body">
                    <p class="card-title p-h5replace">Flask</p>
                </div>
            </div>

            <div class="card block-start">
                <div class="card-body">
                    <p class="card-title p-h5replace">PyQt(PySide2)</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 勉強したミドルウェア等 -->
    <div class="content-field">
        <h2 class="content-head-text">Other</h2>

        <div class="text-center">
            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">MySQL</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">Apache</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">Nginx</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">Azure</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">AWS</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">Git</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">Arduino</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">Fusion360</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">Cisco</p>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <p class="card-title p-h5replace">VMware</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 保有資格/合格試験 -->
    <div class="content-field">
        <h2 class="content-head-text">Certifications</h2>

        <ul class="cert-list">
            <li>G検定(ジェネラリスト検定)</li>
            <li>情報処理安全確保支援士試験</li>
            <li>応用情報技術者試験</li>
            <li>基本情報技術者試験</li>
        </ul>
    </div>
    
    <br>

    <!-- 経歴/経験 -->
    <div class="content-field">
        <h2 class="content-head-text">Experiences</h2>

        <ul class="timeline">
        <li>
            <span class="timeline-title">ITインフラ業務アルバイト</span>
            <span class="timeline-time">July, 2021 - February, 2022</span>
            <p>インフラ領域を専門とした企業にてアルバイトとして従事させていただきました。<br>
                インフラ技術を実機を用いて学べるハンズオン形式の勉強会の講座作成や講師、その他サポートが主な業務内容でした。<br><br>
                このアルバイトにより、Cisco、Fortigate、Paloalto、Linux/Windows Server、VMwareなどの知識・技術を深めることができ、
                ここでバイトできてよかったなと感じた、そんなアルバイトでした。<br>
                現在もアルバイトで得た経験や知識を使って自宅サーバで遊んだりしてます。
            </p>
        </li>
        <li>
            <span class="timeline-title">デジタルマーケティング支援業務アルバイト</span>
            <span class="timeline-time">October, 2021 - March, 2022</span>
            <p>海外市場進出の支援などを主軸としたマーケティング企業のデジタルマーケティング事業部にてアルバイトとして従事させていただきました。<br>
                自社やグループ企業、クライアント様のWebサイト(LP、企業HP)の保守・運用や開発といった技術系業務であったり、
                競合他社の調査や海外マーケティング調査、デジタルマーケティングの動向調査といった調査業務が主な業務内容でした。<br><br>
                このバイトではマーケティングの知識はもちろん、諸外国における法規制や価値観などの知見を深めることができました。<br>
                また、詳細は語れませんが、セキュリティ動向についても深い知見を得ることができました。
            </p>
        </li>
        <li>
            <span class="timeline-title">独立系SIer入社</span>
            <span class="timeline-time">April, 2022</span>
            <p>独立系SIerに入社しました。AI・IoTを主軸とした組み込み系の部署に配属される予定です。
            </p>
        </li>
        </ul>
    </div>
</div>
@endsection
