$(function () {
  //最初はbackのbodyをスクロールさせない
  $('body').addClass('body__noscroll');
  //右に移動
  //cssにて(-50%)のtranstion: 3秒かけている
  $('#img').css({ 'transform': 'translateX(100%)' });
  //3秒後にフェードアウトさせてbodyのスクロール解除
  setTimeout(function () {
    $('#loader').fadeOut(1000);
    //fadeOutしたらbodyをスクロールできるようにする
    $('body').removeClass('body__noscroll');
  }, 3000);
});