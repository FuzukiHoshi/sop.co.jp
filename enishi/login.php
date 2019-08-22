<?php

    session_start();
    header('Expires:-1');
    header('Cache-Control:');
    header('Pragma:');

    require_once('./config.php');
    $message = '';
    if(isset($_POST['login'])){
        if ($_POST['pass'] == $passwordStr){
            header( "Location:https://yoyaku.toreta.in/enishi" ) ;
	exit ;
        }
        else{
            $message = 'パスワードが間違っています';
        }
    }

?>

<!DOCTYPE html>
<html class="no-js" lang="ja" dir="ltr">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta charset="utf-8">
<title>bar&restauranta 縁</title>
<meta name="description" content="【公式】縁のサイトはこちらから。麻布十番の完全会員制Bar&Restaurant。顔認証・指紋認証完備の入口。大人の完全プレイベート空間を演出。個室完備でデートやパーティーにも最適。" />
<meta name="keywords" content="縁,えにし,enishi,bar ,restaurant, バー,レストラン,都営地下鉄大江戸線「麻布十番」駅, 都営メトロ南北線「麻布十番」駅 ,東京都港区 ,会員制,VR, ボードゲーム,顔認証,指紋認証,デート,パーティー" />
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, user-scalable=yes">
<meta name="format-detection" content="telephone=no">
<meta property="og:locale" content="ja_JP" />
<meta property="og:type" content="website" />
<meta property="og:title" content="bar&restauranta 縁" />
<meta property="og:description" content="【公式】縁のサイトはこちらから。麻布十番の完全会員制Bar&Restaurant。顔認証・指紋認証完備の入口。大人の完全プレイベート空間を演出。個室完備でデートやパーティーにも最適。" />
<link href="/enishi/common/css/reset.min.css" rel="stylesheet">
<link href="/enishi/common/css/style.min.css" rel="stylesheet">
<script src="/enishi/common/js/lib/modernizr-2.8.3.min.js"></script>
</head>

<body class="login">
    <div class="p-login">
        <div class="p-login-inner">
            <p class="p-login-text p-login-text--top">パスワードを入力してください</p>
            <p class="p-login-text--error"><? echo $message?></p>
            <form method="post" action="login.php">
                <input type = "text" name="pass" value="" placeholder="PW" class="p-login-textBox">
                <input type="submit" name="login" class="p-login-submit" value="ログイン">
            </form>
            <p class="p-login-text">当店は完全会員制のため、<br>ご予約は会員様のみ受付しております。<br>予めご了承ください。</p>
        </div>
    </div>
</body>
</html>
