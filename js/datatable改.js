
function makeDataTables(){
  console.log("関数の中")

  jQuery(function($){
    $("#foo-table").DataTable({
    // // 件数切替機能 無効
    // lengthChange: true,
    // // 検索機能 無効
    // searching: true,
    // // ソート機能 無効
    // ordering: true,
    // // 情報表示 無効
    // info: true,
    // // ページング機能 無効
    // paging: true
    // // 横スクロールバーを有効にする (scrollXはtrueかfalseで有効無効を切り替えます)
    // scrollX: true,
    // // 縦スクロールバーを有効にする (scrollYは200, "200px"など「最大の高さ」を指定します)
    // scrollY: 200
    // pagingType: "full_numbers"
    // select: true,

    });


  });
}