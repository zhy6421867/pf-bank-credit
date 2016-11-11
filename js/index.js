$(function(){
	
	//初始化加载动画
	$.MyCommon.PageLoading({ sleep: 0 });
	
	var H = $(window).height();
	var W = $(window).width();
	var indexfBoxH = W * ( 990 / 750 );
	var indexsBoxH = W * ( 144 / 750 ) + 20;
	var indextBoxH = W * ( 657 / 750 );
	var marginTB = indextBoxH * ( 10 / 657 );
	var marginLR = W * ( 20 / 750 );
	var indextStarH = W * ( 283 / 750 );

	//indexf_box居中
	$('.indexf_box').css('margin-top',( H - indexfBoxH ) / 2);
	//计算logo墙中logo的宽度
	$('.indexf_box > div').css('width',W * ( 115 / 750 ));
	//shu1
	$('.shu1').css('left',W * ( 175 / 6 / 750 ));
	//shu2
	$('.shu2').css('left',W * ( ( 175 / 6 * 2 + 115 ) / 750 ));
	//shu3
	$('.shu3').css('left',W * ( ( 175 / 6 * 3 + 115 * 2 ) / 750 ));
	//shu4
	$('.shu4').css('left',W * ( ( 175 / 6 * 4 + 115 * 3 ) / 750 ));
	//shu5
	$('.shu5').css('right',W * ( 175 / 6 / 750 ));
	//heng2
	$('.heng2').css('top',W * ( 125 / 750 ) );
	//heng3
	$('.heng3').css('top',W * ( 250 / 750 ) );
	//heng4
	$('.heng4').css('top',W * ( 375 / 750 ) );
	//heng5
	$('.heng5').css('top',W * ( 500 / 750 ) );
	//heng6
	$('.heng6').css('top',W * ( 625 / 750 ) );
	//heng7
	$('.heng7').css('top',W);
	//heng8
	$('.heng8').css('top',W * ( 875 / 750 ) );
	//兼容iphone4
	if( H < 420 ){
		$('.indexf_box').addClass('mtop50');
	}
	//indexs_box居中
	$('.indexs_box').css('margin-top',( H - indexsBoxH ) / 2.5);
	//indext_box居中
	$('.indext_box').css('margin-top',( H - indextBoxH ) / 2);
	//indext_star居中
	$('.indext_star').css('top',( indextBoxH - indextStarH ) / 2);
	//全屏背景
	$('.indext_bg').css('height',H);
	//计算logo宽度
	$('.indext_logo').css('width',W * ( 184 / 750 ));
	//计算间距
	$('#indext01').css('top',marginTB);
	$('#indext02').css('left',marginLR);
	$('#indext03').css('bottom',marginTB);
	$('#indext04').css('bottom',marginTB);
	$('#indext05').css('right',marginLR);
	$('#indext06').css('top',marginTB);
});

var cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}
function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}