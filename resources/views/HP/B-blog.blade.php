<!-- トップページ -->

@extends('layouts.layout')

@section('title', "Blog | himazin331's page")

@section('FB_OGP')
<meta property="og:site_name" content="Blog | himazin331's page" />
<meta property="og:url" content="https://himazin331.com/blog" />
<meta property="og:title" content="Blog | himazin331's page" />
<meta property="og:description" content="ゆるゆる情報系専門学生himazin331の技術ブログ"/>
@endsection
@section('TW_OGP')
<meta property="og:url" content="https://himazin331.com/blog" />
<meta property="og:title" content="Blog | himazin331's page" />
<meta property="og:description" content="ゆるゆる情報系専門学生himazin331の技術ブログ" />
@endsection

@section('pageCSS')
<link href="./css/blog.css" rel="stylesheet">
@endsection

@section('navitem')
<a class="nav-item nav-link" href="{{ route('index') }}">Home</a>
<a class="nav-item nav-link active" href="#">Blog</a>
<a class="nav-item nav-link" href="{{ route('skills') }}">Skills</a>
<a class="nav-item nav-link" href="{{ route('experiences') }}">Experiences</a>
<a class="nav-item nav-link" href="{{ route('portfolio') }}">Portfolio</a>
@endsection

@section('content')
<div class="container">
    <div class="text-center" style="padding-top:30vh;">
    
        <i class="fas fa-hammer fa-5x"></i>
        <h2>Comming soon</h2>
        <h2>このページは現在作成中です</h2>
        <hr>
        <a href="{{ route('index') }}" style="font-size:24px;">ホームへ戻る</a>
    </div>
</div>
@endsection
