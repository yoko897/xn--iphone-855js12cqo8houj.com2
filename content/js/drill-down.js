/*
* 連動プルダウン
* valueの値と一致させる
*/
$(function () {
var products = {
  "iPhone":[
    "iPhone8Plus",
    "iPhoneX ",
    "iPhoneXs ",
    "iPhoneXs Max",
    "iPhoneXR ",
    "iPhoneSE3",
    "iPhone11 ",
    "iPhone11Pro",
    "iPhone11ProMax ",
    "iPhone12",
    "iPhone12Pro ",
    "iPhone12ProMax",
    "iPhone12mini ",
    "iPhone13",
    "iPhone13Pro ",
    "iPhone13ProMax",
    "iPhone13mini",
    "iPhone14",
    "iPhone14Plus",
    "iPhone14Pro",
    "iPhone14ProMax",
  ],
  "iPad":[
    "iPadmini5",
    "iPadmini6 ",
    "iPadAir3",
    "iPadAir4 ",
    "iPadAir5",
    "iPadPro 12.9インチ ",
    "iPadPro 11インチ",
    "iPadPro 10.5インチ ",
    "iPadPro 9.7インチ",
    "2019年秋モデルiPad ",
    "2020年秋モデルiPad",
    "2021年秋モデルiPad",
  ],
  "Macbook":[
    "Macbook",
    "Macbook Air ",
    "Macbook Pro",
  ],
  "Apple Watch":[
    "Apple Watch（元箱なし）",
    "Apple Watch（元箱あり）",
  ],
};

/* 1 */
$('#product').on('change', function(){
  $('#product option[value=""]').remove();
  var cate = $(this).val();
  if(cate){
    var item = products[cate];
    $('#product_iph').html('');
    var op;
    var def;
    def = '<option value="">&#9660' + '選択してください' + '</option>';
    $('#product_iph').append(def);
    for(var i = 0; i < item.length; i++){
      op = '<option value="' + item[i] + '">' + item[i] + '</option>';
      $('#product_iph').append(op);
    }
  }
$("#product_iph").prop("disabled", false);
});

$('#product_iph').on('change', function(){
  $('#product_iph option[value=""]').remove();
});

/* 2 */
$('#product2').on('change', function(){
  $('#product2 option[value=""]').remove();
  var cate = $(this).val();
  if(cate){
    var item = products[cate];
    $('#product_iph2').html('');
    var op;
    var def;
    def = '<option value="">&#9660' + '選択してください' + '</option>';
    $('#product_iph2').append(def);
    for(var i = 0; i < item.length; i++){
      op = '<option value="' + item[i] + '">' + item[i] + '</option>';
      $('#product_iph2').append(op);
    }
  }
$("#product_iph2").prop("disabled", false);
});

$('#product_iph2').on('change', function(){
  $('#product_iph2 option[value=""]').remove();
});

/* 3 */
$('#product3').on('change', function(){
  $('#product3 option[value=""]').remove();
  var cate = $(this).val();
  if(cate){
    var item = products[cate];
    $('#product_iph3').html('');
    var op;
    var def;
    def = '<option value="">&#9660' + '選択してください' + '</option>';
    $('#product_iph3').append(def);
    for(var i = 0; i < item.length; i++){
      op = '<option value="' + item[i] + '">' + item[i] + '</option>';
      $('#product_iph3').append(op);
    }
  }
$("#product_iph3").prop("disabled", false);
});

$('#product_iph3').on('change', function(){
  $('#product_iph3 option[value=""]').remove();
});

/* 4 */
$('#product4').on('change', function(){
  $('#product4 option[value=""]').remove();
  var cate = $(this).val();
  if(cate){
    var item = products[cate];
    $('#product_iph4').html('');
    var op;
    var def;
    def = '<option value="">&#9660' + '選択してください' + '</option>';
    $('#product_iph4').append(def);
    for(var i = 0; i < item.length; i++){
      op = '<option value="' + item[i] + '">' + item[i] + '</option>';
      $('#product_iph4').append(op);
    }
  }
$("#product_iph4").prop("disabled", false);
});

$('#product_iph4').on('change', function(){
  $('#product_iph4 option[value=""]').remove();
});

});


