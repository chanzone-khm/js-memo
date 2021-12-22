var e = document.getElementById("button");

function var1func() {
	var var1 = "global-var1.js-file";
	alert("this is var1 file");
	return var1;
}
e.addEventListener( 
	"click",
	var1func(),
	// global変数を表示＋加工する場合
	// alert(window.global1);
	// window.global1 = "上書き";
	// alert(window.global1);

	false
);
