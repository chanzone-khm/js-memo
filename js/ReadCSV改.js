var file = document.getElementById('file');
var result = document.getElementById('foo-table');

var tbody = document.getElementById('tableBody');



// File APIに対応しているか確認
if(window.File && window.FileReader && window.FileList && window.Blob) {
    file.addEventListener('change', loadLocalCsv, false);

    function loadLocalCsv(e) {
        // ファイル情報を取得
        var fileData = e.target.files[0];
        console.log(fileData); // 取得した内容の確認用
        // CSVファイル以外は処理を止める
        if(!fileData.name.match('.csv$')) {
            alert('CSVファイルを選択してください');
            return;
        }
        // FileReaderオブジェクトを使ってファイル読み込み
        var reader = new FileReader();
        // ファイル読み込みに成功したときの処理
        reader.onload = function() {
            var cols = reader.result.split('\n');
            var data = [];
            for (var i = 0; i < cols.length; i++) {
                data[i] = cols[i].split(',');
            }
            createTheadTable(data[0].length);
            var insert = createTable(data);
            result.appendChild(insert);
        }
        // ファイル読み込みを実行
        reader.readAsText(fileData);
    }
} else {
    file.style.display = 'none';
    result.innerHTML = 'File APIに対応したブラウザでご確認ください';
}

function createTable(data) {
    var table = document.getElementById('tableBody');
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < data[i].length ; j++) {
            // 最終行の改行コード無視するためのbreak
            if((i == data.length -1) && (j == data[i].length-1))break;
            var td = document.createElement('td');
            td.innerText = data[i][j];
            tr.appendChild(td);
        }
        // 最終行の改行コード無視するためのbreak
        if((i == data.length -1) && (j == data[i].length-1))break;
    table.appendChild(tr);
    }
    return table;
}

function createTheadTable(no) {
    var tableHead = document.getElementById('tableHeadRow');
    console.log('create thead table');
        for (var j = 0; j < no; j++) {
            var th = document.createElement('th');
            th.innerText = j;
            tableHead.append(th);
        }
}

