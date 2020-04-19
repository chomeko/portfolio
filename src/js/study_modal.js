$(function () {
  //変数宣言
  var winScrollTop;
  $('.btn__wrapper').click(function () {
    //クリックした位置を取得
    winScrollTop = $(window).scrollTop();
    //モーダル出現
    $('.study__modal').fadeIn();
    //bodyをスクロールさせないようにする
    //sassにてこのクラスを作り、overflow:hiddenを当てる
    $('body').toggleClass('body__noscroll');
  });
  //2箇所のボタンをクリックでモーダルを閉じる。
  //セレクタで２箇所指定できる
  $('.study__modal__close,.study__modal__close2').click(function () {
    //モーダル消す
    $('.study__modal').fadeOut();
    $('body').toggleClass('body__noscroll');
    //モーダルをクリックした位置に戻す
    $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
  });

  //モーダルの背景をクリックしても、モーダルを閉じるようにする
  $('.study__modal__bg').click(function () {
    $('.study__modal').fadeOut();
    $('body').toggleClass('body__noscroll');
  });
});