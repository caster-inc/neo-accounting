/**
 * 資料DL完了ページ
 * - body[data-pdf-path] がある場合: そのURLを href にし、data-pdf-filename があれば download 属性を付与（従来の PDF 直ダウンロード）
 * - data-pdf-path がない場合: マークアップの href のまま（同じタブで遷移。download は付与しない）
 */
(function () {
  function run() {
    var body = document.body;
    var path = body.getAttribute("data-pdf-path");
    var link = document.getElementById("js-dl-pdf-link");
    if (link) {
      if (path) {
        link.setAttribute("href", path);
        var name = body.getAttribute("data-pdf-filename");
        if (name) {
          link.setAttribute("download", name);
        } else {
          link.removeAttribute("download");
        }
      } else {
        link.removeAttribute("download");
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
