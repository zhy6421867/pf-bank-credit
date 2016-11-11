/**
 * Created by Administrator on 2015/10/21.
 */

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







function left(pre, next) {
    $("." + next).show();
    $("." + next).css({ 'left': '0px'});
    $("." + pre).css({ 'display': 'none'});
    /*$("." + next).animate({'left': '0px'}, function () {
        $("." + pre).css({ 'display': 'none'});
    });*/
}
function right(pre, next) {
    $("." + next).show();
    $("." + next).css({ 'left': '0px'});
    $("." + pre).css({ 'display': 'none'});
    /*$("." + next).animate({'right': '0px'}, function () {
        $("." + pre).css({ 'display': 'none'});
    });*/
}





