// jQuery(function ($) {
// 	$("#foo-table").DataTable();
// });

var table = $("#foo-table").DataTable({
	// 件数切替機能 無効
	lengthChange: true,
	// 検索機能 無効
	searching: true,
	// ソート機能 無効
	ordering: true,
	// 情報表示 無効
	info: true,
	// ページング機能 無効
	paging: false,
	// 横スクロールバーを有効にする (scrollXはtrueかfalseで有効無効を切り替えます)
	scrollX: true,
	// 縦スクロールバーを有効にする (scrollYは200, "200px"など「最大の高さ」を指定します)
	scrollY: 500,

	// selectの拡張機能があれば以下をすることでselectの拡張を有効にできる その1
	// select: trueで 行を選択されるようになる。cellもしくはcolumnの指定も可
	// select: true,

	// select: {
	// 	items: 'column'
	// }
});
// selectの拡張機能を有効にする方法その2 こっちのほうがいいかも。
table.select.style("os");// 単一選択の場合はOS 複数選択の場合がmulti
table.select.items("cell");
// selectイベントをつかってデータを吸い上げる。 selectの拡張機能を入れる必要がある。
table.on("select", function (e, dt, type, indexes) {
	// 行データを持ってくる。 行選択されたときのみ行データをもってきたいときは
	// type === column でif文つくってあげれば良い。
	console.log("type:", type);
	console.log("indexes:", indexes);

	// 選択したセルのカラム番号
	columnNo = indexes["0"].column;
	console.log("indexes[0]:", columnNo);
	// 選択したセルの行番号
	rowNo = indexes["0"].row;
	console.log("indexes[1]:", rowNo);
	
	var data = table.columns(columnNo).data();
	console.log(data[0]);

	// 行データから1こずつデータを取り出す
	for (var i = 0; i < data[0].length; i++) {
		var read_data = data[0][i];
		console.log(read_data);
	}
});
