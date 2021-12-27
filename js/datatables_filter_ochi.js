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

		orderCellsTop: false,
		fixedHeader: true,
		initComplete: function () {
			var api = this.api();

			// For each column
			api
				.columns()
				.eq(0)
				.each(function (colIdx) {
					// Set the header cell to contain the input element
					var cell = $(".filters th").eq(
						$(api.column(colIdx).header()).index()
					);
					var title = $(cell).text();
					$(cell).html('<input type="text" placeholder="' + title + '" />');

					// On every keypress in this input
					$(
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
						});
				});
		},
	});
	
});
// _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_//_//_//_//_//_//_/
