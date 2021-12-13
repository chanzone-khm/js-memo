// jExcelの表示
document.getElementById("my_spreadsheet");

var data = [
	[2001, 2850],
	[2010, 5850],
	[2009, 3852],
	[2010, 6852],
	[2001, 2812],
	[2010, 5212],
	[2009, 3312],
	[2010, 6310],
	[2001, 2350],
	[2010, 5350],
	[2009, 3350],
	[2010, 6350],
	[2001, 2370],
	[2010, 5370],
	[2009, 3270],
	[2010, 6273],
	[2001, 2273],
	[2010, 5223],
	[2009, 3223],
	[2010, 6623],
	[2001, 2620],
	[2010, 5620],
	[2009, 3700],
	[2010, 6780],
	[2001, 2780],
	[2010, 5780],
	[2009, 3780],
	[2010, 6280],
	[2001, 2200],
	[2010, 5100],
	[2009, 3150],
	[2010, 6110],
	[2001, 2110],
	[2010, 5110],
	[2009, 3010],
	[2010, 6010],
];
// EXCELの表を作成
var table = jspreadsheet(document.getElementById("my-spreadsheet"), {
	data: data,
	columns: [{ width: 300 }, { width: 80 }, { width: 100 }],
});


//  _/_/_/_/_/_/_/_/指定した列全てのデータを取得する_/_/_/_/_/_/_/_/
var data_from_ss = table.getColumnData([1]);

// google chartsの処理
console.log("1:",data_from_ss);
var chart_data = [];
for (i=0; i < data_from_ss.length; i++){
    tmp = data_from_ss[i];
    chart_data[i] = [tmp];
}
var col = ["col"];
chart_data.unshift(col);

var e = document.getElementById("my_spreadsheet");

var data_from_ss = table.getValue()



google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	const data = google.visualization.arrayToDataTable(chart_data);
	var options = {
		title: "title",
		legend: { position: "none" },
		colors: ["42d35a"],

	};
    var chart = new google.visualization.Histogram(
        document.getElementById("chart_div")
    );
    chart.draw(data, options);
}
