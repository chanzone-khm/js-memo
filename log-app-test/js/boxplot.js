$(function () {
	$('#boxplot').click(function(){

    graphData1D = getWindowData()
    // 取得したデータを一次元配列に変換
    const s = new dfd.Series(graphData1D);
    // console.log(s);

    // data加工関数に飛ばす！！！！
    const fixData = s.values;
    console.log("fixData");
    console.log(fixData);

    var data = [
        {
            y:fixData,
            boxpoints: 'all',
            jitter: 0.3,
            pointpos: -1.8,
            type: 'box'
        }
    ];

    Plotly.newPlot("main", data);

    //---------------------plotly end---------------------

	});
});