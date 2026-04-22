/**
 * 資料DL完了ページ: PDF パスは body[data-pdf-path] で差し替え可能。
 * ページ表示時はリンク設定のみ行い、ダウンロードは手動ボタン操作で実行する。
 */
(function () {
  function run() {
    var body = document.body;
    var path = body.getAttribute("data-pdf-path") || "/assets/pdf/neo_acc_service_document_20260420FIX.pdf";
    var name = body.getAttribute("data-pdf-filename") || "neo_acc_service_document_20260420FIX.pdf";
    var link = document.getElementById("js-dl-pdf-link");
    if (link) {
      link.setAttribute("href", path);
      if (name) {
        link.setAttribute("download", name);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
