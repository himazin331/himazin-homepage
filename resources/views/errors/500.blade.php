<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>500 - Internal Server Error</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <style type="text/css">
            * {
                margin: 0;
                padding: 0;
            }
            ul {
                padding-left: 3em;
            }
            html {
                background: linear-gradient(#00008b,#00003b);
                height: 100%;
            }
            body {
                margin: 0;
                font-size: 75%;
                text-align: center;
                color: white;
            }
            h1 {
                font-size: 40px;
                font-weight: bold;
            }
            h1 {
                font-weight: bold;
                line-height: 1;
                padding-bottom: 20px;
                font-family: Arial, sans-serif;
            }
            h2 {
                text-align: center;
                font-weight: bold;
                font-size: 30px;
            }
            h3 {
                font-weight: bold;
                padding: 0;
            }
            p {
                    text-align: center;
                    margin: 0;
                    padding: 0;
                    font-size: 14px;
                    color: #ffffff;
            }
            a {
                text-decoration: none;
            }
            #factor {
                    text-align: left;
            }
            #factor li {
                    color: #333333;
            }
            #factor_list {
                margin: 10px auto 0;
                border-radius: 20px;
                background-color: #ffffff;
            }

            @media only screen and (min-width: 0) and (max-width: 767px) {
                #base {
                    padding: 30px 10px;
                }
                h1 {
                    font-size: 30px;
                }
                h1 span {
                    font-size: 60px;
                }
                h2 {
                    font-size: 25px;
                }
                h3 {
                    margin-top: 30px;
                    font-size: 20px;
                }
                #factor {
                    padding: 15px;
                    font-size: 15px;
                }
            }

            @media only screen and (min-width: 768px) {
                #base {
                    margin-top: 80px;
                }
                h1 {
                    font-size: 70px;
                }
                h1 span {
                    font-size: 120px;
                }
                h3 {
                    font-size: 25px;
                    letter-spacing: 5px;
                    margin-top: 80px;
                }
                #factor_list {
                    width: 680px;
                    margin-bottom: 50px;
                }
                #factor {
                    padding: 30px;
                    font-size: 20px;
                }
            }
            </style>
    </head>

    <body>
        <div id="base">
            <h1>
                <span>500</span></br>Internal Server Error</span>
            </h1>
            <h2>サーバーに問題が発生しています</h2>
            <h3>これらの原因が考えられます</h3>
            <div id="factor_list">
                <div id="factor">
                    <ul type="square">
                        <li>何らかの問題が発生し、リクエストを処理できない</li>
                        <li><a href="http://twitter.com/himazin_shotaML">Twitter</a>までご連絡ください</li>
                        @if(env('APP_DEBUG') == 1)
                            {{ $exception->getMessage() }}
                        @endif
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>