$(function () {
  var text = [
    '<p>フロントエンドエンジニアになりたいな〜</p>',
    '<p>転職活動中です</p>',
    '<p>独学で１年間勉強続いています</p>',
    '<p>PHPも勉強したい',
    '<p>wordpressも勉強したい',
    '<p>vue.jsも勉強したい</p>',
    '<p>コーディングがもっと速くなりたい</p>',
    '<p>エンジニアとして手に職をつけたい</p>',
    '<p>ご連絡お待ちしてます</p>'
  ]
  //3秒後に開始（開幕アニメーションさせるのでそれ用に調整）
  setTimeout(function () {
    //繰り返し文のforを使う
    for (var i = 0; i < text.length; i++) {
      //変数iをクロージャでキープする
      (function (val) {
        setTimeout(function () {
          console.log(text[val]);
          //hideで消し、3秒でfadeInし、htmlにテキストvalを入れる。テキスト毎に３秒スパンで繰り返す
          $('.top__comment').hide().fadeIn(3000).html(text[val]);
        },val * 3000);
      })(i);
    }
  },3000);

});