$(function () {
	$('#scatter').click(function(){

// 日付データ取得
  timeSeries =table.column(14,{ search: "applied" }).data( )

    // x軸
// 日付データ変換

  var timeSeries = timeSeries.filter(function(series){

  return series != "-";
  });
  // console.log("fixtimeSeries2");
  // console.log(timeSeries);
  // console.log(timeSeries.length);

// var len=timeSeries.length
  for(var i=0; i<timeSeries.length; i++){
    timeSeries[i] = timeSeries[i].replace('/', '-');
    timeSeries[i] = timeSeries[i].replace('/', '-');
  }
  console.log("timeSeries2");
  console.log(timeSeries);
  // console.log(timeSeries.length);

  // y軸
  graphData1D = getWindowData()

  const fixData = graphData1D.filter(v => v);  //Nan値落とす

    // data加工関数に飛ばす！！！！
    // const fixData = s.values;
    // console.log("fixData");
    // console.log(fixData);
    // console.log(s);

  console.log(fixData.length);
  var trace1 = {
    x: timeSeries,
    // x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
    // x: ['2019-03-20 00:55:00', '2019-03-19 22:14:00', '2019-03-20 02:08:00'],
    y: fixData,
    mode: 'lines',
    type: 'scatter',
    // name: '2000'
  };

  var data = [ trace1 ];

  var layout = {
    xaxis: {
      type: 'date',
      // title: 'January Weather'
    },
    yaxis: {
      // title: 'Daily Mean Temperature'
    },
    // title:'2000 Toronto January Weather'
  };

  Plotly.plot('main', data, layout, {showSendToCloud: true});

  });
});