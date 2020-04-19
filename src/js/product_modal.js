$(function () {
  var winScrollTop;
  //btnにdata-target属性を与えたので,eachで回す
  $('.btn-wrapper').each(function () {
    //その中のモーダルをクリックしたら
    $(this).click(function () {
      winScrollTop = $(window).scrollTop();
      //data-target属性を値を取得し
      var target = $(this).data('target');
      //属性の値と紐づいたモーダルidを変数に代入
      var modal = document.getElementById(target);
      //そのモーダルを表示させる
      $(modal).fadeIn();
    });
  });

  $('.modal__close,.modal__close2').click(function () {
    $('.production__modal').fadeOut();
    $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
  });

  $('.production__modal__bg').click(function () {
    $('.production__modal').fadeOut();
  });
});