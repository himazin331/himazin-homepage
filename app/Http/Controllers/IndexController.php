<?php
//* トップページ - コントローラ */
/*
 * Route:       
 *  Method:         GET|HEAD
 *  Name - Action:  index - App\Http\Controllers\IndexController@view
 * Controller:      app\Http\Controllers\IndexController.php
 * View:            resources\views\layouts\index.blade.php
*/

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;    // 認証モジュール

class IndexController extends Controller
{
    //* トップページ - 表示
    public function view() {
        return view('HP.index');
    }
}