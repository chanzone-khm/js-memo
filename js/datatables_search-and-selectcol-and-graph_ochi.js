// 参考 にあるhttps://www.webdevqa.jp.net/ja/jquery/jquery-datatables%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC%E3%81%95%E3%82%8C%E3%81%9F%E5%88%97%E3%81%AE%E5%80%A4%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B/1050353198/
//  これをベースに改造みた https://jsfiddle.net/q0e1bdcz/1/

// searchに青森と検索した状態で、青森のデータだけを引っ張ってくる方法

window.getTableData = 1;

var table = $("#foo-table").DataTable({
	// 件数切替機能 無効
	lengthChange: true,
	// 検索機能
	searching: true,
	// ソート機能
	ordering: false,
	// 情報表示
	info: true,
	// ページング機能
	paging: false,
	// 横スクロールバーを有効にする (scrollXはtrueかfalseで有効無効を切り替えます)
	// scrollX: true,
	// 縦スクロールバーを有効にする (scrollYは200, "200px"など「最大の高さ」を指定します)
	scrollY: 400,

	// orderCellsTop: true,
	fixedHeader: true,
});

// select拡張機能を有効 cell選択モードにする。
table.select.style("os");
table.select.items("cell");
// alert("click the cell");

// 選択した行データをとってくる。
// table.on("select", function (e, dt, type, indexes) {
// 	table
// 		.rows(indexes["0"].row, { search: "applied" })
// 		.data()
// 		.each(function (value, index) {
// 			console.log(value, index);
// 		});
// });

table.on("select", function (e, dt, type, indexes) {
	var array = [];
	table
		.column(indexes["0"].column, { search: "applied" })
		.data()
		.each(function (value, index) {
			array.push(value);
		});
	// console.log("出力するよ", array);
	// グローバル変数に代入
	window.getTableData = array;
});

// 選択箇所だけのデータを持ってくる まだうまく動かない。
// table.on("select", function (e, dt, type, indexes) {
// 	var array = [];
// 	table
// 		.column(indexes["0"].column, { selected: true })
// 		.data()
// 		.each(function (value, index) {
// 			array.push(value);
// 		});
// 	console.log("出力するよ", array);
// 	return array;
// });

// 取得したデータをボタンを押したら呼び出す (本来はここでグラフ化するイメージ)
$(".btn").on("click", function () {
	alert("aaa");
	// console.log("取得したデータは", window.getTableData);
	// 取得したデータをグラフに入れてグラフ可視化する。

	graphData1D = window.getTableData;
	graphData1D = graphData1D.map(Number);
	console.log(graphData1D);
	// 1Dを2Dに変換
	function splitArray(array, part) {
		var tmp = [];
		for (var i = 0; i < array.length; i += part) {
			tmp.push(array.slice(i, i + part));
		}
		return tmp;
	}
	// 取得したデータを2次元に変換
	graphData2D = splitArray(graphData1D, 1);
	console.log(graphData2D);
	var e = document.getElementById("start_charts");
	// 絡む名が必要なため元データの1要素目に["col"]を追加
	var col = ["col"];
	graphData2D.unshift(col);
	function drawChart() {
		graphData2D = google.visualization.arrayToDataTable(graphData2D);
		var options = {
			title: "Country Populations",
			legend: { position: "none" },
			colors: ["#42d35a"],
			// 上下5%のデータを削って可視化する場合は以下
			histogram: { lastBucketPercentile: 5 },
		};
		var chart = new google.visualization.Histogram(
			document.getElementById("chart_div")
		);
		chart.draw(graphData2D, options);
	}
	google.charts.load("current", { packages: ["corechart"] });
	google.charts.setOnLoadCallback(drawChart);
});

// { search: "applied"}とすることで searchされた後のテーブルから情報をとってくるということになるぽい
// 今はsearchだけど フィルタも同様に対応したい。

//  eachの使い方。 https://www.sejuku.net/blog/33609 の 配列・オブジェクトに対して繰り返し処理を行う方法 が該当
