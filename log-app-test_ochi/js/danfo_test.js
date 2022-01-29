$(function () {
	$("#scatter").click(function () {
		// グラフ可したいデータと日付データを取得し、DataTableにする。

		// X軸 : datatableから日付データ取得 14列目
		timeArray = [];
		table
			.column(14, { search: "applied" })
			.data()
			.each(function (value, index) {
				timeArray.push(value);
			});

		// y軸 : 可視化したいデータ（グローバル変数）
		graphData1D = getWindowData();
		const fixData = graphData1D.filter((v) => v); //Nan値落とす

		// x軸とy軸を結合しn行2列のdataframeを作る
		obj_data = { time: timeArray, data: fixData }; // time列、data列を作成
		df = new dfd.DataFrame(obj_data);

		console.log("df");
		console.log(df.print());

		// datetimeに変換したdatetime列を用意しておく。

		var datetime = dfd.toDateTime(df["time"]); // ToDo ここでエラー
		console.log(datetime.values)
		console.log("timeDataStr");
		df.addColumn("datetime", datetime, { inplace: true }); // datetime絡むを作って datetimeを格納

		console.log("df_addtime");
		console.log(df.print());

		var trace1 = {
			// x: timeSeries,
			// x: dateDf,
			// x: dateTimeDf,
			// x: newDateArr,
			// x: arr,
			x: df["time"],
			// x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
			// x: ['2019-03-20 00:55:00', '2019-03-19 22:14:00', '2019-03-20 02:08:00'],
			y: df["data"],
			mode: "markers",
			type: "scatter",
			// name: '2000'
		};

		var data = [trace1];

		var layout = {
			xaxis: {
				type: "Date",
				title: "January Weather",
			},
			yaxis: {
				title: "Daily Mean Temperature",
			},
			title: "2000 Toronto January Weather",
		};

		Plotly.newPlot("main", data, layout);

		//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
	});
});
