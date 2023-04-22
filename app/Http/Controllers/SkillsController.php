<?php
//* スキルページ - コントローラ */
/*
 * Route:       
 *  Method:         GET|HEAD
 *  Name - Action:  index - App\Http\Controllers\SkillsController@view
 * Controller:      app\Http\Controllers\SkillsController.php
 * View:            resources\views\layouts\skills.blade.php
*/

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;    // 認証モジュール

class SkillsController extends Controller
{
    //* トップページ - 表示
    public function view() {
        return view('HP.skills');
    }
}