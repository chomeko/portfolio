//トグルをクリックしたらメニューを出したり引っ込めたり
$(function () {
  //ハンバーガーをクリックしたら
  $('.header__toggle').click(function () {
    //activeクラスをつける
    $(this).toggleClass("active");
    //もしactiveクラスを持っていたら
    if ($(this).hasClass("active")) {
      //openクラスをつける。持ってないならopenを外す
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