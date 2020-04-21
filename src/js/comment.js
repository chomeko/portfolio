$(function () {
  var text = [
    '<p>フロントエンドエンジニアになりたいな〜</p>',
    '<p>転職活動中です</p>',
    '<p>独学で１年間勉強続いています</p>',
    '<p>PHPも勉強したい',
    '<p>wordpreeも勉強したい',
    '<p>コーディングがもっと速くなりたい</p>',
    '<p>エンジニアとして手に職をつけたい</p>',
    '<p>ご連絡お待ちしてます</p>'
  ]
  setTimeout(function () {
    for (var i = 0; i < text.length; i++) {
      //変数iをクロージャでキープする
      (function (val) {
        setTimeout(function () {
          console.log(text[val]);
          $('.top__comment').hide().fadeIn(3000).html(text[val]);
        },val * 3000);
      })(i);
    }
  },3000);

});