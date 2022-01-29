$(function () {
	$('#histogram').click(function(){

    //---------------------Echarts begin---------------------

    // // datatablesから選択データ取得
    // graphData1D = getWindowData()
    // // 取得したデータを2次元に変換
    // graphData2D = splitArray(graphData1D, 1);


    // // カラム名が必要なため元データの1要素目に["col"]を追加
    // var col = ["col"];
    // graphData2D.unshift(col);
    // console.log(graphData2D);

  //   // 描画
  //   function drawChart() {
  //     graphData2D = google.visualization.arrayToDataTable(graphData2D);
  //     // optionの一覧はこちら https://developers.google.com/chart/interactive/docs/gallery/histogram?hl=ja
  //     var options = {
  //     title: "Histogram",
  //     legend: { position: "none" },
  //     colors: ["#42d35a"],

  //     histogram: {
  //       lastBucketPercentile: 5, // 上下5%のデータを削って可視化
  //       hideBucketItems: false,
  //       numBucketsRule: "sturges",
  //     },

  //     // Animation: {
  //     // 	duration: 1000,
  //     // 	easing: "linear",
  //     // 	startup: true,
  //     // },
  //     tooltip: {
  //       textStyle: { color: "#FF0000" },
  //       showColorCode: true,
  //     },
  //   };

  //   var chart = new google.visualization.Histogram(
  //     document.getElementById("chart_div")
  //   );
  //   chart.draw(graphData2D, options);
  // }
  // google.charts.load("current", { packages: ["corechart"] });
  // google.charts.setOnLoadCallback(drawChart);

    //---------------------Echarts end---------------------

    //---------------------plotly begin---------------------

  // datatablesから選択データ取得
  graphData1D = getWindowData()
  // 取得したデータを一次元配列に変換
  // console.log(graphData1D.length);
  // var boxLength = graphData1D.length - 1; //最後のデータがNan値であったため
  const fixData = graphData1D.filter(v => v);  //Nan値落とす
  // console.log("fixData");
  // console.log(fixData);

  var trace1 = {
    x: graphData1D,
    name: 'control',
    autobinx: true,
    histnorm: "count",
    marker: {
      color: "rgba(255, 100, 102, 0.7)",
      line: {
        color:  "rgba(255, 100, 102, 1)",
        width: 1
      }
    },
    opacity: 0.5,
    type: "histogram",
    xbins: {
      end: 2.8,
      size: 1.5,
      start: .5
    }
  };
  // var trace2 = {
  //   x: x2,
  //   y: y2,
  //   autobinx: false,
  //   marker: {
  //           color: "rgba(100, 200, 102, 0.7)",
  //           line: {
  //             color:  "rgba(100, 200, 102, 1)",
  //             width: 1
  //     }
  //   },
  //   name: "experimental",
  //   opacity: 0.75,
  //   type: "histogram",
  //   xbins: {
  //     end: 4,
  //     size: 0.06,
  //     start: -3.2

  //   }
  // };
  // var data = [trace1, trace2];
  var data = [trace1];
  var layout = {
    bargap: 0.05,
    bargroupgap: 0.2,
    barmode: "overlay",
    title: "Sampled Results",
    xaxis: {title: "Value"},
    yaxis: {title: "Count"}
  };
  Plotly.newPlot('main', data, layout);

      //---------------------plotly end---------------------

	});
});

