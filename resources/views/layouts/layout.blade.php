<!DOCTYPE html>
<html lang="ja">
    <head>
        <title>@yield('title')</title>
        <meta charset="UTF-8">
        <meta name="description" content="ゆるゆるITエンジニアhimazin331の普通のホームページ">
        <link href="/img/favicon.ico" rel="icon">

        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="format-detection" content="email=no,telephone=no,address=no">
        <meta name="viewport" content="width=device-width,initial-scale=1">

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id={{ env('G_TAGID') }}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '{{ env("G_TAGID") }}');
        </script>

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <!-- Original CSS -->
        <link href="/css/layout.css" rel="stylesheet">
        @yield('pageCSS')
        <!-- Icons -->
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <!-- facebookのOGPタグ -->
        @yield('FB_OGP')
        <meta property="og:type" content="website" /> 
        <meta property="og:image" content="https://himazin331.com/img/icon.png" />
        <meta property="fb:app_id" content="1656112441256050" />
        <meta property="og:locale" content="ja_JP" />

        <!-- twitterのOGPタグ -->
        @yield('TW_OGP')
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@himazin_shotaML" />
        <meta property="og:image" content="https://himazin331.com/img/icon.png" />
    </head>

    <body>
        <!-- ヘッダー -->
        <header class="sticky-top">
            <!-- ナビゲーション -->
            <nav class="navbar navbar-expand-lg navbar-dark">
                <!-- ヘッダーロゴ -->
                <a class="navbar-brand" href="{{ route('index') }}">
                    <img class="navbar-brand-img" src="/img/header_picture.png" alt="himazin331">
                </a>

                <!-- ナビゲーショントグル -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- ナビゲーションアイテム -->
                <div class="collapse navbar-collapse justify-content-end" id="navbar">
                    <div class="navbar-nav text-center">
                        @yield('navitem')
                    </div>
                </div>
            </nav>
        </header>

        <div class="wrapper">
            @yield('content')

            <!-- フッター -->
            <footer>
                <ul class="nav justify-content-center footer-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('index') }}">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('sitepolicy') }}">Policy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://nakayumc.com" target="_blank" rel="noopener noreferrer">nakayumc0278さんのページ</a>
                    </li>
                </ul>

                <span>Copyright © <?php echo date("Y")?> himazin331. All Rights Reserved.</span>
            </footer>
        </div>

        <!-- Bootstrap JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </body>
</html>
