$(function () {
var now_date = new Date();
var days = [
    { start_date: '2022/8/25 0:00:00', end_date: '2022/8/26 23:59:59', img_path: '5' },// この1行を複製して、日付とアポストロフィ内の数字（表示される）を変更する
    { start_date: '2022/11/30 0:00:00', end_date: '2022/11/30 23:59:59', img_path: '2' },
    { start_date: '2022/12/1 0:00:00', end_date: '2022/12/3 23:59:59', img_path: '18' },
    { start_date: '2022/12/4 0:00:00', end_date: '2022/12/7 23:59:59', img_path: '13' },
    { start_date: '2022/12/8 0:00:00', end_date: '2022/12/10 23:59:59', img_path: '10' },
    { start_date: '2022/12/11 0:00:00', end_date: '2022/12/13 23:59:59', img_path: '7' },
    { start_date: '2022/12/14 0:00:00', end_date: '2022/12/15 23:59:59', img_path: '2' },
    { start_date: '2022/12/16 0:00:00', end_date: '2022/12/17 23:59:59', img_path: '18' },
    { start_date: '2022/12/18 0:00:00', end_date: '2022/12/20 23:59:59', img_path: '13' },
    { start_date: '2022/12/21 0:00:00', end_date: '2022/12/23 23:59:59', img_path: '10' },
    { start_date: '2022/12/24 0:00:00', end_date: '2022/12/27 23:59:59', img_path: '7' },
    { start_date: '2022/12/28 0:00:00', end_date: '2022/12/31 23:59:59', img_path: '2' },
   ];


// 配列daysを順に処理
$.each(days,
function(index, val) {
    start_date = new Date(val.start_date);
    end_date = new Date(val.end_date);
    if (start_date <= now_date && (!end_date || now_date <= end_date)) {
        console.log(index, start_date, now_date, end_date);
        let msg = val.img_path;
        document.getElementById("cp_img").innerHTML = msg;
        $('#days_img').css('display', 'block');
        return false;
    } else {
        $('#days_img').css('display', 'none');
    }
});

});