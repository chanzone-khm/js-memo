// ----------------- Grobal Variant -----------------
var table;
var timeSeries = [];


// ----------------- Grobal Variant -----------------

$(function () {
  $('#graph').click(function(){
    jQuery(function($){
      table = $("#CSVtable").DataTable({
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
        	// orderCellsTop: true,
      fixedHeader: true,
      });
    });
//   })
// })

// select拡張機能を有効 cell選択モードにする。
	table.select.style("os");
	table.select.items("cell");

// 選択した行データをとってくる。
// table.on("select", function (e, dt, type, indexes) {
// 	table
// 		.rows(indexes["0"].row, { search: "applied" })
// 		.data()
// 		.each(function (value, index) {
// 			console.log(value, index);
// 		});
// });

// searchボックス状態に応じた列データを取得する。
table.on("select", function (e, dt, type, indexes) {
	var array = [];
	table
		.column(indexes["0"].column, { search: "applied" }) // search : "applied" で検索ボックスが反映されたあとのテーブルデータを取得する。
		.data()
		.each(function (value, index) {
			array.push(value);
		});
	// console.log("出力するよ", array);
	// グローバル変数に代入
	window.getTableData = array;
});

})
})

// 1Dを2Dに変換する関数
function splitArray(array, part) {
  var tmp = [];
  for (var i = 0; i < array.length; i += part) {
    tmp.push(array.slice(i, i + part));
  }
  return tmp;
}

function getWindowData(){
  // 取得したデータをグラフに入れてグラフ可視化する。
  graphData1D = window.getTableData;

  // _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_
  // _/_/_/_/_/_/_/_/取得したデータをグラフライブラリで読める形に処理する_/_/_/_/_/_/_/_/
  // ★★★★google chart★★★

	// 取得したデータが文字列の配列になっているので文字列を数値に変換
  graphData1D = graphData1D.map(Number);
  console.log(graphData1D);

  // // 1Dを2Dに変換する関数
  // function splitArray(array, part) {
  //   var tmp = [];
  //   for (var i = 0; i < array.length; i += part) {
  //   tmp.push(array.slice(i, i + part));
  // }
  // return tmp;
  // }

  // // 取得したデータを2次元に変換
  // graphData2D = splitArray(graphData1D, 4);

  // console.log(graphData2D);
  return(graphData1D);
}