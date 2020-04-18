$(function () {
  var h1 = $('#top__title--js');
  //テキストを1文字づつ区切って配列にする
  var txt_array = $('#top__title--js').text().split('');
  console.log(txt_array);
  //一旦htmlを空にする
  $('#top__title--js').html('');
  //配列に入ってる文字数だけ処理を繰り返す
  $.each(txt_array, function (index, element) {
    //１文字づつspanタグにpacityをつける
    var new_element = $("<span/>").text(element).css({ opacity: 0 });
    //作成した要素をh1の末尾に追加していく
    new_element.appendTo(h1);
    //indexの数値 * ミリ秒だけ処理を遅延させる。
    //indexの数値は後方の文字にいくほど大きくなるので
    //それにミリ秒を乗じる事で後ろの文字ほど処理が遅延し文字が遅れて現れる
    new_element.delay(index * 50);
    new_element.animate({ opacity: 1 },3000);
  });
});