$(function () {
  //変数宣言
  var winScrollTop;
  $('.btn__wrapper').click(function () {
    //クリックした位置を取得
    winScrollTop = $(window).scrollTop();
    //モーダル出現
    $('.study__modal').fadeIn();
  });
  $('.study__modal__close').click(function () {
    //モーダル消す
    $('.study__modal').fadeOut();
    //モーダルをクリックした位置に戻す
    $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
  });
});