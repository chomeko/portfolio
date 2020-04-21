$(function () {
  //変数を作る
  var winScrollTop;
  //各btnにdata-target属性を与えたので,eachで回す
  $('.btn-wrapper').each(function () {
    //その中のモーダルをクリックしたら
    $(this).click(function () {
      //クリックした位置を取得し変数に代入
      winScrollTop = $(window).scrollTop();
      //data-target属性を値を取得し
      var target = $(this).data('target');
      //属性の値と紐づいたモーダルidを変数に代入
      var modal = document.getElementById(target);
      //そのモーダルを表示させる
      $(modal).fadeIn();
      $('body').toggleClass('body__noscroll');
    });
  });
  //モーダルから戻るボタンをクリックしたら
  $('.modal__close,.modal__close2').click(function () {
    //モーダルを非表示
    $('.production__modal').fadeOut();
    $('body').toggleClass('body__noscroll');
    //モーダルをクリックした位置に移動する
    $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
  });
  //モーダルの背景をクリックしたら
  $('.production__modal__bg').click(function () {
    //モーダルを非表示にする
    $('.production__modal').fadeOut();
    $('body').toggleClass('body__noscroll');
  });
});