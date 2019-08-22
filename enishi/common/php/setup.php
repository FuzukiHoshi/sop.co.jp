<?php
$dr = $_SERVER['DOCUMENT_ROOT'];
$projectdir = '/enishi/';
$siteroot = $dr;
$ua = $_SERVER['HTTP_USER_AGENT'];

$sptablet = "(strpos($ua, 'Android') !== false) && (strpos($ua, 'Mobile') !== false) || (strpos($ua, 'iPhone') !== false) || (strpos($ua, 'iPad') !== false) || (strpos($ua, 'Windows Phone') !== false)";

date_default_timezone_set('Asia/Tokyo');

if ($page == 'top'){
    $basetitle = "";

}
else {
    $basetitle = "麻布十番のBar&Restauranta｜縁";
}


//本番
//DEFINE('sslurl', 'https://' . $_SERVER['HTTP_HOST']);


// //テスト
// DEFINE('sslurl', 'http://' . $_SERVER['HTTP_HOST']);
//
//
// //本番
// DEFINE('defaulturl', 'http://' . $_SERVER['HTTP_HOST']);
//

$canonical ="";
$cvtag = "";

//header

$head = $siteroot.'/enishi/common/php/head.php';
$header = $siteroot.'/enishi/common/php/header.php';
$footer = $siteroot.'/enishi/common/php/footer.php';
// $header = $siteroot.'/common/php/header.php';

?>
