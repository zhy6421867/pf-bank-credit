$(document).ready(function () {
	
	var u = navigator.userAgent,app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid){
		$(".z_bmg").click(function() {
			var audio = document.getElementById('music');
			if (audio.paused) {
				$(this).addClass('rotate');
				audio.play();
				return false;
			} else {
				audio.pause();
				$(this).removeClass('rotate');
			}
		});
	}else{
		//$('.z_bmg').removeClass('rotate');
		$(".z_bmg").click(function() {
			var audio = document.getElementById('music');
			if (audio.paused) {
				$(this).addClass('rotate');
				audio.play();
				return false;
			} else {
				audio.pause();
				$(this).removeClass('rotate');
			}
		});
	}
    
});