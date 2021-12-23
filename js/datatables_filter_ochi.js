jQuery(function ($) {
	$("#foo-table").DataTable();
});

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

	// rowreorderテスト
	// // セルをドラッグできるようにする
	rowReorder: {
		selector: "td:last-child",
		// selector: 'tr'
	},
});

$("#foo-table").on("select", function (e, dt, row, indexes) {
	var data = table.rows(indexes).data().pluck("id");
	console.log("selectテスト", data);
	// do something with the ID of the selected items
});

// クリックイベント
$("#foo-table").on("click", "tbody td", function () {
	//get textContent of the TD
	console.log("TD cell textContent : ", this.textContent);

	$(".table").on("click", "tbody tr", function () {
		console.log("API row values : ", table.columns(this).data());
	});
});
