//fadein__jsクラス
//opacity: 0
//transform: translate(0,10rem)
//transition: ease-out 3s

//scrollinクラス
//opacity: 1
//transform: translate(0,0)

$(function () {
  //まずcssで.fadein__jsとscrollinクラスを作っておく
  //ウインドウobjにスクロールメソッド
  $(window).scroll(function () {
    //class .fadein__jsを各セクションにつけてるからeachを使い
    $('.fadein__js').each(function () {
      //その.fadein__jsからTOPまでの高さを代入
      var elemPos = $(this).offset().top;
      //ウインドウからのスクロール量
      var scroll = $(window).scrollTop();
      //ウインドウの高さ
      var windowHeight = $(window).height();
      //スクロールした量 > 要素からTOPまでの高さ - ウインドウの高さ + 200px下にスクロールとフェードイン
      if (scroll > elemPos - windowHeight + 200) {
        //scrollinクラスをつける
        $(this).addClass('scrollin');
      }
    })
  });
});