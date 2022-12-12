<?php
//フォームデータが空の場合は処理終了
if (empty($_POST)){
    header('Location: https://xn--iphone-855js12cqo8houj.com/2/');
    exit;
}

//セッション開始
session_start();

// ポストされたワンタイムチケットを取得する。
$ticket = isset($_POST['ticket']) ? $_POST['ticket'] : '';

// セッション変数に保存されたワンタイムチケットを取得する。
$save = isset($_SESSION['ticket']) ? $_SESSION['ticket'] : '';

// セッション変数を解放し、ブラウザの戻るボタンで戻った場合に備え
// る。
unset($_SESSION['ticket']);

// ポストされたワンタイムチケットの中身が空だった、または、ポス
// トすらされてこなかった場合、不正なアクセスとみなして強制終了す
// る。
if ($ticket === '') {

    // die('不正なアクセスです');
    header('Location: https://xn--iphone-855js12cqo8houj.com/2/');
    exit;

}

// ポストされたワンタイムチケットとセッション変数から取得したワン
// タイムチケットが同じ場合、正常にポストされたとみなして処理を行
// う。
if ($ticket === $save) {

//echo 'Normal Access';

} else {
// ブラウザの戻るボタンで戻った場合は、セッション変数が存在しない
// ため、2重送信とみなすことができる。
// また、不正なアクセスの場合もワンタイムチケットが同じになる確率
// は低いため、不正アクセス防止にもなる。
    echo 'Dual Posted';
    header('Location: https://xn--iphone-855js12cqo8houj.com/2/');
    exit;

}

//文字化け防止設定
mb_language("Japanese");
mb_internal_encoding("UTF-8");


//入力値の取得・加工
$kinds = htmlspecialchars($_REQUEST["kinds"], ENT_QUOTES, "UTF-8");
$product = htmlspecialchars($_REQUEST["product"], ENT_QUOTES, "UTF-8");
$product_iph = htmlspecialchars($_REQUEST["product_iph"], ENT_QUOTES, "UTF-8");

if(($_REQUEST['kinds']) == "2台（2種類）以上"){ 
$product1 = htmlspecialchars($_REQUEST["product"], ENT_QUOTES, "UTF-8");
$product_iph1 = htmlspecialchars($_REQUEST["product_iph"], ENT_QUOTES, "UTF-8");
$kinds1 = htmlspecialchars($_REQUEST["kinds2"], ENT_QUOTES, "UTF-8");

$product2 = htmlspecialchars($_REQUEST["product2"], ENT_QUOTES, "UTF-8");
$product_iph2 = htmlspecialchars($_REQUEST["product_iph2"], ENT_QUOTES, "UTF-8");
$kinds2 = htmlspecialchars($_REQUEST["kinds3"], ENT_QUOTES, "UTF-8");

$product3 = htmlspecialchars($_REQUEST["product3"], ENT_QUOTES, "UTF-8");
$product_iph3 = htmlspecialchars($_REQUEST["product_iph3"], ENT_QUOTES, "UTF-8");
$kinds3 = htmlspecialchars($_REQUEST["kinds4"], ENT_QUOTES, "UTF-8");

$product4 = htmlspecialchars($_REQUEST["product4"], ENT_QUOTES, "UTF-8");
$product_iph4 = htmlspecialchars($_REQUEST["product_iph4"], ENT_QUOTES, "UTF-8");
$kinds4 = htmlspecialchars($_REQUEST["kinds5"], ENT_QUOTES, "UTF-8");
}
$user_name2 = htmlspecialchars($_REQUEST["user_name2"], ENT_QUOTES, "UTF-8");
$user_tel1 = htmlspecialchars($_REQUEST["user_tel1"], ENT_QUOTES, "UTF-8");
$user_tel2 = htmlspecialchars($_REQUEST["user_tel2"], ENT_QUOTES, "UTF-8");
$user_tel3 = htmlspecialchars($_REQUEST["user_tel3"], ENT_QUOTES, "UTF-8");
$user_email = htmlspecialchars($_REQUEST["user_email"], ENT_QUOTES, "UTF-8");
$postal1 = htmlspecialchars($_REQUEST["postal1"], ENT_QUOTES, "UTF-8");
$postal2 = htmlspecialchars($_REQUEST["postal2"], ENT_QUOTES, "UTF-8");
$prefecture = htmlspecialchars($_REQUEST["prefecture"], ENT_QUOTES, "UTF-8");
$city = htmlspecialchars($_REQUEST["city"], ENT_QUOTES, "UTF-8");
$address = htmlspecialchars($_REQUEST["address"], ENT_QUOTES, "UTF-8");
$age = htmlspecialchars($_REQUEST["age"], ENT_QUOTES, "UTF-8");

$adminEmail = "info@iphone-plaza.com";
$mailFrom = mb_encode_mimeheader("iPhonePLAZA")."<info@iphone-plaza.com>";

$addHeader = "Content-Type: text/plain; charset=\"ISO-2022-JP\"\n";
$addHeader .= "Return-Path: ".$mailFrom. " \n";
$addHeader .= "From: ".$mailFrom." \n";
$addHeader .= "Sender: ".$mailFrom." \n";
$addHeader .= "Reply-To: ".$mailFrom. " \n";

$addOption = '-f'.$mailFrom;

$bodyAdmin .= "下記内容でお問合せがございました。\n";
$bodyAdmin .= "ご対応の程宜しくお願いいたします。\n";
$bodyAdmin .= "――――――――――――――――――――\n";
if(($_REQUEST['kinds']) == "1台のみ"){
$bodyAdmin .= "台数　：{$kinds}\n";
$bodyAdmin .= "製品　：{$product}\n";
$bodyAdmin .= "モデル　：{$product_iph}\n";
}
if(($_REQUEST['kinds']) == "2台（2種類）以上"){ 
$bodyAdmin .= "■1台目\n";
$bodyAdmin .= "製品　：{$product1}\n";
$bodyAdmin .= "モデル　：{$product_iph1}\n";
$bodyAdmin .= "台数　：{$kinds1}\n";
$bodyAdmin .= "■2台目\n";
$bodyAdmin .= "製品　：{$product2}\n";
$bodyAdmin .= "モデル　：{$product_iph2}\n";
$bodyAdmin .= "台数　：{$kinds2}\n";
$bodyAdmin .= "■3台目\n";
$bodyAdmin .= "製品　：{$product3}\n";
$bodyAdmin .= "モデル　：{$product_iph3}\n";
$bodyAdmin .= "台数　：{$kinds3}\n";
$bodyAdmin .= "■4台目\n";
$bodyAdmin .= "製品　：{$product4}\n";
$bodyAdmin .= "モデル　：{$product_iph4}\n";
$bodyAdmin .= "台数　：{$kinds4}\n";
}
$bodyAdmin .= "お名前　：{$user_name2}\n";
$bodyAdmin .= "電話番号　：{$user_tel1}-{$user_tel2}-{$user_tel3}\n";
$bodyAdmin .= "メールアドレス　：{$user_email}\n";
$bodyAdmin .= "郵便番号：{$postal1}-{$postal2}\n";
$bodyAdmin .= "住所：{$prefecture}{$city}{$address}\n";
$bodyAdmin .= "ご年齢：{$age}\n";
$bodyAdmin .= "個人情報保護指針へ同意：する\n";
$bodyAdmin .= "――――――――――――――――――――\n";
$bodyAdmin .= "\n";


$bodyAdmin2 .= "{$user_name2}様\n";
$bodyAdmin2 .= "この度はiPhonePLAZAの宅配買取をお申込み頂きまして誠にありがとうございます。\n";
$bodyAdmin2 .= "お申込み頂いた内容は弊社スタッフが確認のうえ、順次ご記載いただいた住所まで無料宅配キットをお送りさせていただきます。\n";
$bodyAdmin2 .= "お申込みから2~3日でお届けさせていただきますので到着までお待ちくださいませ。\n";
$bodyAdmin2 .= "\n";
$bodyAdmin2 .= "なお、5日以上経ってもご自宅に届かない場合は　\n";
$bodyAdmin2 .= "お手数をおかけいたしますが下記までお問い合わせくださいませ。\n";
$bodyAdmin2 .= "TEL　045-325-9837\n";
$bodyAdmin2 .= "\n";
$bodyAdmin2 .= "▼ご入力いただいた情報\n";
$bodyAdmin2 .= "――――――――――――――――――――\n";
if(($_REQUEST['kinds']) == "1台のみ"){
$bodyAdmin2 .= "台数　：{$kinds}\n";
$bodyAdmin2 .= "製品　：{$product}\n";
$bodyAdmin2 .= "モデル　：{$product_iph}\n";
}
if(($_REQUEST['kinds']) == "2台（2種類）以上"){ 
$bodyAdmin2 .= "■1台目\n";
$bodyAdmin2 .= "製品　：{$product1}\n";
$bodyAdmin2 .= "モデル　：{$product_iph1}\n";
$bodyAdmin2 .= "台数　：{$kinds1}\n";
$bodyAdmin2 .= "■2台目\n";
$bodyAdmin2 .= "製品　：{$product2}\n";
$bodyAdmin2 .= "モデル　：{$product_iph2}\n";
$bodyAdmin2 .= "台数　：{$kinds2}\n";
$bodyAdmin2 .= "■3台目\n";
$bodyAdmin2 .= "製品　：{$product3}\n";
$bodyAdmin2 .= "モデル　：{$product_iph3}\n";
$bodyAdmin2 .= "台数　：{$kinds3}\n";
$bodyAdmin2 .= "■4台目\n";
$bodyAdmin2 .= "製品　：{$product4}\n";
$bodyAdmin2 .= "モデル　：{$product_iph4}\n";
$bodyAdmin2 .= "台数　：{$kinds4}\n";
}
$bodyAdmin2 .= "お名前　：{$user_name2}\n";
$bodyAdmin2 .= "電話番号　：{$user_tel1}-{$user_tel2}-{$user_tel3}\n";
$bodyAdmin2 .= "メールアドレス　：{$user_email}\n";
$bodyAdmin2 .= "郵便番号：{$postal1}-{$postal2}\n";
$bodyAdmin2 .= "住所：{$prefecture}{$city}{$address}\n";
$bodyAdmin2 .= "ご年齢：{$age}\n";
$bodyAdmin2 .= "個人情報保護指針へ同意：する\n";
$bodyAdmin2 .= "――――――――――――――――――――\n";
$bodyAdmin2 .= "\n";



mb_send_mail($adminEmail,"iPhonePLAZAの宅配買取にお問い合わせがありました。",$bodyAdmin,$addHeader,$addOption); 
mb_send_mail($user_email,"iPhonePLAZAの宅配買取にお申込みいただきありがとうございます。",$bodyAdmin2,$addHeader,$addOption); 

session_destroy();