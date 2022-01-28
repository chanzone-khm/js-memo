$(function () {
	$('#scatter').click(function(){

  // x軸

  // 日付データ取得
    var timeSeries =table.column(14,{ search: "applied"}).data();

  // 日付データ変換
  // for(var i=0; i<timeSeries.length; i++){
  // timeSeries[i] = timeSeries[i].replace('/', '-');
  // timeSeries[i] = timeSeries[i].replace('/', '-');
  // }

  // var series = new Date.UTC(timeSeries);

  console.log("timeSeries");
  console.log(timeSeries);
  // console.log(Array.isArray(timeSeries));
  // console.log(GetDimension(timeSeries));


  // var dateDf = new dfd.Series(timeSeries);
  // console.log("dateDf");
  // console.log(dateDf);

  // var dateTimeDf = dfd.toDateTime(dateDf);
  // console.log("dateTimeDf");
  // console.log(dateTimeDf);

  // var dateObj = new Date(timeSeries);
  // console.log("dateObj");
  // console.log(dateObj);

  var newDateArr=[];
  for (var k = 0; k < timeSeries.length; k++){
    newDateArr[k] = timeSeries[k];
  }

  var dateObj = [];
  for (var l = 0; l < newDateArr.length; l++){
    dateObj[l] = new Date(newDateArr[l]);
  }

  // var newDateArr = dateTimeDf.loc([1:]);
  // console.log("newDateArr");
  // console.log(newDateArr);

  // var df = new dfd.DataFrame(dateTimeDf);
  // console.log("DataFrame");
  // console.log(df);
  // console.log(dateTimeDf.data[0]);
  // console.log(dateTimeDf.data(0));

  // dateTimeDf.print();

  // y軸
    graphData1D = getWindowData();
    const fixData = graphData1D.filter(v => v);  //Nan値落とす

    // data加工関数に飛ばす！！！！
    // const fixData = s.values;
    // console.log("fixData");
    // console.log(fixData);
    // console.log(s);

    var arr = ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'];
    console.log("array");
    console.log(arr);

  // console.log(fixData.length);
    var trace1 = {
    // x: timeSeries,
    // x: dateDf,
    // x: dateTimeDf,
    // x: newDateArr,
    // x: arr,
    x: dateObj,
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
        type: 'Date',
      title: 'January Weather'
    },
    yaxis: {
      title: 'Daily Mean Temperature'
    },
    title:'2000 Toronto January Weather'
    };

    Plotly.plot('main', data, layout);

    //_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/






  });
});