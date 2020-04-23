$(function () {
  //トップに戻るボタンを押したら
  $('.footer__topbtn').click(function () {
    //一番上に戻る
    $('body,html').animate({ scrollTop: 0 }, 2000);
  });
});