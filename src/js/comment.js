$(function () {
  var text = [
    '<p>フロントエンドエンジニアになりたいな〜</p>',
    '<p>転職活動中です</p>',
    '<p>独学で１年間勉強続いています</p>',
    '<p>コーディングがもっと速くなりたい</p>'
  ]

  for (var i = 0; i < text.length; i++) {
    console.log(i);
    (function (pram) {
      setTimeout(function () {
        console.log(text[pram]);
        $('.top__comment').html(text[pram]);
      }, pram * 2000);
    })(i);
  }
});