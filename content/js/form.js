$(function() {
  $(".ECM_CheckboxInput-Input").on("change", function(){
    if ($(this).is(":checked")) {
    // 送信ボタンを押せる
    $("#submit_btn").prop("disabled", false);
    $('.agree').addClass('btn_anime');
    $('.agree').removeClass('btn_anime_disabled');
    } else {
    // 送信ボタンを押せない
    $("#submit_btn").prop("disabled", true);
    $('.agree').removeClass('btn_anime');
    $('.agree').addClass('btn_anime_disabled');
    }
  });
});

$(function(){
   $( 'input[name="kinds"]' ).change( function() {
　　　　var iphone_selected = $('input[name="kinds"]:checked').prop("id");
　　　　// 1台のみ
　　　　if (iphone_selected == 'one') {
　　　　    $(".q_other").css('display', 'none');
            // 必須項目削除
　　　　    $("#product2").attr("required", false);
　　　　    $("#product_iph2").attr("required", false);
　　　　    $("input[name='kinds3']").attr("required", false);
　　　　    
　　　　    $("#product3").attr("required", false);
　　　　    $("#product_iph3").attr("required", false);
　　　　    $("input[name='kinds4']").attr("required", false);
　　　　    
　　　　    $("#product4").attr("required", false);
　　　　    $("#product_iph4").attr("required", false);
　　　　    $("input[name='kinds5']").attr("required", false);

　　　　    $('input[name="kinds2"]').attr("required", false);            

　　　　// 2台以上    
　　　　} else if (iphone_selected == 'same') {
　　　　    $(".q_other").slideDown(500).css('display', 'block');
　　　　    // 設定 初期化
　　　　    $(".product_list1").css('display', 'none');
　　　　    $(".product_list2").css('display', 'none');
　　　　    $(".product_list3").css('display', 'none');
　　　　    $(".product_add1").css('display', 'block');
　　　　    
　　　　    $('input[name="kinds2"]').attr("required", true);
　　　　}
   }); 
});

$(function(){
  $(".product_add1").click(function(){
     $(".product_list1").slideDown(500).css('display', 'block');
     $(".product_add1").css('display', 'none');

     // 必須項目に
     $("#product2").attr("required", true);
     $("#product_iph2").attr("required", true);
     $("input[name='kinds3']").attr("required", true);
  });

  $(".product_add2").click(function(){
     $(".product_list2").slideDown(500).css('display', 'block');
     $(".product_remove1").css('display', 'none');
     $(".product_add2").css('display', 'none');

     // 必須項目に
     $("#product3").attr("required", true);
     $("#product_iph3").attr("required", true);
     $("input[name='kinds4']").attr("required", true);
  });

  $(".product_add3").click(function(){
     $(".product_list3").slideDown(500).css('display', 'block');
     $(".product_remove2").css('display', 'none');
     $(".product_add3").css('display', 'none');

     // 必須項目に
     $("#product4").attr("required", true);
     $("#product_iph4").attr("required", true);
     $("input[name='kinds5']").attr("required", true);
  });
  
  $(".product_remove1").click(function(){
     $(".product_list1").slideUp(500);
     $(".product_add1").css('display', 'block');

     // selectbox
     if ($("#product2").val() !== "") {
       $("#product2").eq(0).prepend('<option value="">&#9660' + "製品" + '</option>');
       $("#product2").val("");
     }
     $("#product_iph2").eq(0).prepend('<option value="">&#9660' + "iPhone" + '</option>');
     $("#product_iph2").val("");

     // checkbox
     $('input[name="kinds3"]').prop("checked", false);
     
     // 必須項目に
     $("#product2").attr("required", false);
     $("#product_iph2").attr("required", false);
     $("input[name='kinds3']").attr("required", false);
  });

  $(".product_remove2").click(function(){
     $(".product_list2").slideUp(500);
     $(".product_remove1").css('display', 'block');
     $(".product_add2").css('display', 'block');

     // selectbox
     if ($("#product3").val() !== "") {
       $("#product3").eq(0).prepend('<option value="">&#9660' + "製品" + '</option>');
       $("#product3").val("");
     }
     $("#product_iph3").eq(0).prepend('<option value="">&#9660' + "iPhone" + '</option>');
     $("#product_iph3").val("");
     
     // checkbox
     $('input[name="kinds4"]').prop("checked", false);
     
     // 必須項目に
     $("#product3").attr("required", false);
     $("#product_iph3").attr("required", false);
     $("input[name='kinds4']").attr("required", false);
  });

  $(".product_remove3").click(function(){
     $(".product_list3").slideUp(500);
     $(".product_remove2").css('display', 'block');
     $(".product_add3").css('display', 'block');
     
     // selectbox
     if ($("#product4").val() !== "") {
       $("#product4").eq(0).prepend('<option value="">&#9660' + "製品" + '</option>');
       $("#product4").val("");
     }
     $("#product_iph4").eq(0).prepend('<option value="">&#9660' + "iPhone" + '</option>');
     $("#product_iph4").val("");

     // checkbox
     $('input[name="kinds5"]').prop("checked", false);

     // 必須項目に
     $("#product4").attr("required", false);
     $("#product_iph4").attr("required", false);
     $("input[name='kinds5']").attr("required", false);
  });
});