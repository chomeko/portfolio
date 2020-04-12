//トグルをクリックしたらメニューを出したり引っ込めたり
$(function () {
  $('.header__toggle').click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $('.header__nav').addClass('open');
    } else {
      $('.header__nav').removeClass('open');
    }
    //メニューclickでnavを閉じる
    //トグルのクリックをトリガーにして、トグルを押したことにしてる
    $('.header__nav a').click(function () {
      $('.header__toggle').trigger('click');
    });
  });
});