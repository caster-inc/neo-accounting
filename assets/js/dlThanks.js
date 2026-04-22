/**
 * 資料DL完了ページ: PDF パスは body[data-pdf-path] で差し替え可能。
 * 表示後に自動ダウンロードを試みる（失敗しても手動リンクが残る）。
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

    window.setTimeout(function () {
      try {
        var a = document.createElement("a");
        a.href = path;
        a.setAttribute("download", name);
        a.rel = "noopener";
        a.style.position = "absolute";
        a.style.width = "0";
        a.style.height = "0";
        a.style.opacity = "0";
        a.setAttribute("aria-hidden", "true");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (e) {
        /* 手動のダウンロードボタンに任せる */
      }
    }, 400);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
