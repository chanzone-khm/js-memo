window.addEventListener('load', function () {
  var parentNode = document.getElementById('grid');
  // create a new grid
  var grid = canvasDatagrid({
      parentNode: parentNode,
      data: [
          {col1: 'foo', col2: 0, col3: 'a'},
          {col1: 'bar', col2: 1, col3: 'b'},
          {col1: 'baz', col2: 2, col3: 'c'}
      ]
  });

  // セルをクリックするとセルのデータをアラート表示する
  grid.addEventListener("click", function (e) {
    // ↓意味不 セルオブジェクトが帰ってこない来ないとき ってこと? canvasが描画できなかったときの対処??不明
		if (!e.cell) {
			return;
		}
    // 列をクリックしても並べ替えさせないようにする
    e.preventDefault();
    // クリックされたときの挙動各種
    
    // console.log("e.cellのオブジェクト一覧"+e.cell)
    // 選択セルの値を取得
		console.log("Clicked on " + e.cell.value);
    // 列番号を取得
    console.log("列番号は "+ e.cell.columnIndex);

    // 列のデータを取得 ・・できないのかもしや。。。
    // console.log("列番号" + e.cell.columnIndex + "に格納されてるデータは" );
    console.log(e.cell.data);
    console.log(e);


	});
});


