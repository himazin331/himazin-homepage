<?php
//* サイトポリシー - コントローラ */
/*
 * Route:       
 *  Method:         GET|HEAD
 *  Name - Action:  sitepolicy - App\Http\Controllers\SitePolicyController@view
 * Controller:      app\Http\Controllers\SitePolicyController.php
 * View:            resources\views\layouts\sitepolicy.blade.php
*/

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;    // 認証モジュール

class SitePolicyController extends Controller
{
    //* ブログ - 表示
    public function view() {
        return view('HP.sitepolicy');
    }
}