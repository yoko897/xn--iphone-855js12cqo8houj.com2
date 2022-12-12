//例カラム
window.onload = function onLoad() {
tit1 = document.getElementById("tit1");
tit12 = document.getElementById("tit12");
tit2 = document.getElementById("tit2");
tit22 = document.getElementById("tit22");
tit3 = document.getElementById("tit3");
tit32 = document.getElementById("tit32");
tit4 = document.getElementById("tit4");
tit42 = document.getElementById("tit42");

//day1 = document.getElementById("day1");
//day2 = document.getElementById("day2");
//day3 = document.getElementById("day3");
//day4 = document.getElementById("day4");

rank1 = document.getElementById("rank1");
rank2 = document.getElementById("rank2");
rank3 = document.getElementById("rank3");
rank4 = document.getElementById("rank4");
price1 = document.getElementById("price1");
price2 = document.getElementById("price2");
price3 = document.getElementById("price3");
price4 = document.getElementById("price4");
let spimg1 = document.getElementById("spimg1");
let spimg2 = document.getElementById("spimg2");
let spimg3 = document.getElementById("spimg3");
let spimg4 = document.getElementById("spimg4");
let spimg12 = document.getElementById("spimg12");
let spimg22 = document.getElementById("spimg22");
let spimg32 = document.getElementById("spimg32");
let spimg42 = document.getElementById("spimg42");


//ここの””の中の文字を変えてください
//1例目
spimg1.src = spimg12.src = "img/img_iphone13promax_400_600.png";//画像
tit1.innerHTML = tit12.innerHTML = "iPhone13PRO MAX";//商品名
//day1.innerHTML = "7月31日";//日付※非表示中触らないで
rank1.innerHTML = "ランクSS";//ランク
price1.innerHTML = "最大￥170,000";//価格

//2例目
spimg2.src = spimg22.src = "img/img_iphone13_400_600.png";//画像
tit2.innerHTML = tit22.innerHTML = "iPhone13";//商品名
//day2.innerHTML = "7月31日";//日付※非表示中触らないで
rank2.innerHTML = "ランク中古B";//ランク
price2.innerHTML = "最大￥55,000";//価格

//3例目
spimg3.src = spimg32.src = "img/img_iphone12promax_400_600.png";//画像
tit3.innerHTML = tit32.innerHTML = "iPhone12PRO MAX";//商品名
//day3.innerHTML = "7月31日";//日付※非表示中触らないで
rank3.innerHTML = "ランク中古A";//ランク
price3.innerHTML = "最大￥70,000";//価格

//4例目
spimg4.src = spimg42.src = "img/img_iphone12_400_600.png";//画像
tit4.innerHTML = tit42.innerHTML = "iPhone12";//商品名
//day4.innerHTML = "7月31日";//日付※非表示中触らないで
rank4.innerHTML = "ランク中古B";//ランク
price4.innerHTML = "最大￥40,000";//価格

}


//ドロップダウン切り替え（シュミレーター）
function viewChange(){
    if(document.getElementById('sample')){
        id = document.getElementById('sample').value;
        if(id == 'select0'){
            document.getElementById('Box0').style.display = "";
            document.getElementById('Box1').style.display = "none";
            document.getElementById('Box2').style.display = "none";
            document.getElementById('Box3').style.display = "none";
            document.getElementById('Box4').style.display = "none";
            document.getElementById('Box5').style.display = "none";
            document.getElementById('Box6').style.display = "none";
            document.getElementById('Box7').style.display = "none";
            document.getElementById('Box8').style.display = "none";
        }
        else if(id == 'select1'){
            document.getElementById('Box0').style.display = "none";
            document.getElementById('Box1').style.display = "";
            document.getElementById('Box2').style.display = "none";
            document.getElementById('Box3').style.display = "none";
            document.getElementById('Box4').style.display = "none";
            document.getElementById('Box5').style.display = "none";
            document.getElementById('Box6').style.display = "none";
            document.getElementById('Box7').style.display = "none";
            document.getElementById('Box8').style.display = "none";
        }
        else if(id == 'select2'){
            document.getElementById('Box0').style.display = "none";
            document.getElementById('Box1').style.display = "none";
            document.getElementById('Box2').style.display = "";
            document.getElementById('Box3').style.display = "none";
            document.getElementById('Box4').style.display = "none";
            document.getElementById('Box5').style.display = "none";
            document.getElementById('Box6').style.display = "none";
            document.getElementById('Box7').style.display = "none";
            document.getElementById('Box8').style.display = "none";
        }
        else if(id == 'select3'){
            document.getElementById('Box0').style.display = "none";
            document.getElementById('Box1').style.display = "none";
            document.getElementById('Box2').style.display = "none";
            document.getElementById('Box3').style.display = "";
            document.getElementById('Box4').style.display = "none";
            document.getElementById('Box5').style.display = "none";
            document.getElementById('Box6').style.display = "none";
            document.getElementById('Box7').style.display = "none";
            document.getElementById('Box8').style.display = "none";
        }
        else if(id == 'select4'){
            document.getElementById('Box0').style.display = "none";
            document.getElementById('Box1').style.display = "none";
            document.getElementById('Box2').style.display = "none";
            document.getElementById('Box3').style.display = "none";
            document.getElementById('Box4').style.display = "";
            document.getElementById('Box5').style.display = "none";
            document.getElementById('Box6').style.display = "none";
            document.getElementById('Box7').style.display = "none";
            document.getElementById('Box8').style.display = "none";
        }
        else if(id == 'select5'){
            document.getElementById('Box0').style.display = "none";
            document.getElementById('Box1').style.display = "none";
            document.getElementById('Box2').style.display = "none";
            document.getElementById('Box3').style.display = "none";
            document.getElementById('Box4').style.display = "none";
            document.getElementById('Box5').style.display = "";
            document.getElementById('Box6').style.display = "none";
            document.getElementById('Box7').style.display = "none";
            document.getElementById('Box8').style.display = "none";
        }
        else if(id == 'select6'){
            document.getElementById('Box0').style.display = "none";
            document.getElementById('Box1').style.display = "none";
            document.getElementById('Box2').style.display = "none";
            document.getElementById('Box3').style.display = "none";
            document.getElementById('Box4').style.display = "none";
            document.getElementById('Box5').style.display = "none";
            document.getElementById('Box6').style.display = "";
            document.getElementById('Box7').style.display = "none";
            document.getElementById('Box8').style.display = "none";
        }
        else if(id == 'select7'){
            document.getElementById('Box0').style.display = "none";
            document.getElementById('Box1').style.display = "none";
            document.getElementById('Box2').style.display = "none";
            document.getElementById('Box3').style.display = "none";
            document.getElementById('Box4').style.display = "none";
            document.getElementById('Box5').style.display = "none";
            document.getElementById('Box6').style.display = "none";
            document.getElementById('Box7').style.display = "";
            document.getElementById('Box8').style.display = "none";
        }
        else if(id == 'select8'){
            document.getElementById('Box0').style.display = "none";
            document.getElementById('Box1').style.display = "none";
            document.getElementById('Box2').style.display = "none";
            document.getElementById('Box3').style.display = "none";
            document.getElementById('Box4').style.display = "none";
            document.getElementById('Box5').style.display = "none";
            document.getElementById('Box6').style.display = "none";
            document.getElementById('Box7').style.display = "none";
            document.getElementById('Box8').style.display = "";
        }
    }

window.onload = viewChange;
}