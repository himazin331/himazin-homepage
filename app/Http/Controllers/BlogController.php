<?php
//* ブログ - コントローラ */
/*
 * Route:       
 *  Method:         GET|HEAD
 *  Name - Action:  blog - App\Http\Controllers\BlogController@view
 * Controller:      app\Http\Controllers\BlogController.php
 * View:            resources\views\layouts\blog.blade.php
*/

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;    // 認証モジュール

class BlogController extends Controller
{
    //* ブログ - 表示
    public function view() {
        return view('HP.blog');
    }
}