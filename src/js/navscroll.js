$(function () {
  //navのaタグクリック
  $('a[href^="#"]').click(function () {
    //そのaタグのhref属性の値を取得
    var href = $(this).attr("href");
    //hrefが'#'または空白の場合'html'をそれ以外なら変数hrefを代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    //変数ターゲットの位置をoffset().topで上から何pxか取得
    var position = target.offset().top
    //アニメーション
    $('body,html').animate({ scrollTop: position }, 500, "swing");
    //リンク内ページのURLに＃をつけない設定
    return false;
  });
});