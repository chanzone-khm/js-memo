// FIlter機能を実装

// ↓これいらない？？
// jQuery(function ($) {
// 	$("#foo-table").DataTable();
// });

// _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/ フィルターの設定を付与してdatatablesを作る_/_/_/_/_/_/
// https://datatables.net/extensions/fixedheader/examples/options/columnFiltering.html

$(document).ready(function () {
// Setup - add a text input to each footer cell
$("#foo-table thead tr")
	.clone(true)
	.addClass("filters")
	.appendTo("#foo-table thead");

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

	// セルをクリックすると列全体が選択される
	// select: true,
	// select: {
	// 	items: "column",
	// },

	//  うまくいかないので置いとく
	// buttons: [
	// 	{
	// 		extend: "selected",
	// 		action: function (e, dt, node, config) {
	// 			var rows = dt.rows({ selected: true }).count();

	// 			console.log("There are " + rows + "(s) selected in the table");
	// 		},
	// 	},
	// ],

	orderCellsTop: true,
	fixedHeader: true,

	initComplete: function () {
		var api = this.api();

		// For each column
		api
			.columns()
			.eq(0)
			.each(function (colIdx) {
				// Set the header cell to contain the input element
				var cell = $(".filters th").eq($(api.column(colIdx).header()).index());
				var title = $(cell).text();
				$(cell).html('<input type="text" placeholder="' + title + '" />');

				// On every keypress in this input
				filter_val = $(
					"input",
					$(".filters th").eq($(api.column(colIdx).header()).index())
				)
					.off("keyup change")
					.on("keyup change", function (e) {
						e.stopPropagation();

						// Get the search value
						$(this).attr("title", $(this).val());
						var regexr = "({search})"; //$(this).parents('th').find('select').val();

						var cursorPosition = this.selectionStart;
						// Search the column for that value
						api
							.column(colIdx)
							.search(
								this.value != ""
									? regexr.replace("{search}", "(((" + this.value + ")))")
									: "",
								this.value != "",
								this.value == ""
							)
							.draw();

						$(this)
							.focus()[0]
							.setSelectionRange(cursorPosition, cursorPosition);
						console.log("this.value" + this.value);
						return this.value;
					});
			});
	},
});

table.rows({ selected: true }).data();
// フィルタされた後のデータを見る
// function get_filtered_datatable() {
// 	var filteredrows = $("#foo-table")
// 		.dataTable()
// 		._('tr, {"filter": "applied"}');

// 	for (var i = 0; i < filteredrows.lentgh; i++) {
// 		debug.console(filteredrows[i]);
// 	}
// }

// select 拡張機能を列設定で有効にする。

table.select.style("os");
table.select.items("column");
// table.rows({ search: "applied" }).nodes();
// table.rows({ search: "removed" }).nodes();
// table.cell({ focused: true }).data();
// table.rows({ selected: true }).data();
// table.rows({ search: "applied" }).nodes();
// table.rows({ search: "removed" }).nodes();

table.on("select", function (e, dt, type, indexes) {
	var data = table.columns(indexes).data();
	console.log(data[0]);
	// console.log(table.rows({ selected: true }).data());
});
});

// _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//_//_//_//_//_//_/
