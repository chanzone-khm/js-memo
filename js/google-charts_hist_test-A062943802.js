var e = document.getElementById("start_charts");
var col = ['col']

var data = [
	[24],
	[24.1],
	[23.5],
	[24.3],
	[25.6],
	[24.2],
	[24],
	[24.1],
	[23.09],
	[23],
	[22.9],
	[24.5],
	[24],
	[23],
	[25.5],
	[24.6],
	[22.5],
	[22.6],
];

// 配列の要素 1番目に追加する。(dataの配列が1個ずつうしろにずれる)
data.unshift(col)
console.log(data)
e.addEventListener(
	"click",
	function () {
		
		google.charts.load("current", { packages: ["corechart"] });
		google.charts.setOnLoadCallback(drawChart);
		function drawChart() {

			data = google.visualization.arrayToDataTable(data);
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
			chart.draw(data, options);
		}
	},
	false
);
