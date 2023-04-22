<?php
//* ポートフォリオページ - コントローラ */
/*
 * Route:       
 *  Method:         GET|HEAD
 *  Name - Action:  index - App\Http\Controllers\PortfolioController@view
 * Controller:      app\Http\Controllers\PortfolioController.php
 * View:            resources\views\layouts\portfolio.blade.php
*/

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;    // 認証モジュール

class PortfolioController extends Controller
{
    //* トップページ - 表示
    public function view() {
        return view('HP.portfolio');
    }
}