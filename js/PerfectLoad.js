﻿/*******************************************
 * 
 * Plug-in:友好的页面加载效果
 * Author:sqinyang (sqinyang@sina.com)
 * Time:2015/04/20
 * Explanation:随着HTML5的流行，页面效果越来越炫，同时也需要加载大量的插件及素材，万恶的网速，特别对于挂在国外服务器的网站，一打开一堆素材缓缓加载，位置错乱不齐，故编写此方法，方便大家使用
 *
*********************************************/

jQuery.MyCommon = {
    PageLoading: function (options) {
        var defaults = {
            opacity: 1,
            //loading页面透明度
            backgroundColor: "#003473",
            //loading页面背景色
            loadingTips: "<img src='img/tail-spin.svg' style='display:block;width:100%;' />",
            //提示文本
            delayTime: 0,
            //页面加载完成后，加载页面渐出速度
            zindex: 999,
            //loading页面层次
            sleep: 10
            //设置挂起,等于0时则无需挂起

        }
        var options = $.extend(defaults, options);

        //获取页面宽高
        var _PageHeight = document.documentElement.clientHeight,
        _PageWidth = document.documentElement.clientWidth;

        //在页面未加载完毕之前显示的loading Html自定义内容
        var _LoadingHtml = '<div id="loadingPage" style="position:fixed;left:0;top:0;_position: absolute;width:100%;height:' + _PageHeight + 'px;background:' + options.backgroundColor + ';opacity:' + options.opacity + ';filter:alpha(opacity=' + options.opacity * 100 + ');z-index:' + options.zindex + ';"><div id="loadingTips" style="position: absolute; cursor1: wait; width: 160px;height:160px;">' + options.loadingTips + '</div></div>';

        //呈现loading效果
        $("body").append(_LoadingHtml);

        //获取loading提示框宽高
        var _LoadingTipsH = document.getElementById("loadingTips").clientHeight,
        _LoadingTipsW = document.getElementById("loadingTips").clientWidth;

        //计算距离，让loading提示框保持在屏幕上下左右居中
        var _LoadingTop = _PageHeight > _LoadingTipsH ? (_PageHeight - _LoadingTipsH) / 2 : 0,
        _LoadingLeft = _PageWidth > _LoadingTipsW ? (_PageWidth - _LoadingTipsW) / 2 : 0;

        $("#loadingTips").css({
            "left": _LoadingLeft + "px",
            "top": _LoadingTop + "px"
        });

        //监听页面加载状态
        document.onreadystatechange = PageLoaded;

        //当页面加载完成后执行
        function PageLoaded() {
            if (document.readyState == "complete") {
                var loadingMask = $('#loadingPage');
                setTimeout(function () {
                    loadingMask.animate({
                        "opacity": 0
                    },
                    options.delayTime,
                    function () {
                        $(this).hide();

                    });
                },
                options.sleep);
                
				var mcookie = cookie('mvisit');
				mcookie = mcookie && mcookie.split(';');
				if(!mcookie) mcookie = [];
				$(".indext_logo a").click(function(i){
					mcookie.push($(this).attr("class"));
					mcookie = unique(mcookie);
					cookie('mvisit', mcookie.join(';'), {expires:3});	
				});
				for(i in mcookie){
					$("." + mcookie[i] + ' div').hide();
				}
			
				if(mcookie.length <= 0) {
					//显示第一级首页
					setTimeout(function(){
						$('.indexf_box').fadeIn();
					},300)
					//隐藏第一级首页
					setTimeout(function(){
						$('.indexf_box').addClass('z_zoomOut');
					},4600)
					setTimeout(function(){
						$('.indexf_box').css('display','none');
						$('.indexs_box').css('display','block');
					},5000)
					
					//隐藏第二级首页
					setTimeout(function(){
						$('.indexs_box').fadeOut();
					},6200)
					//显示第三级首页
					setTimeout(function(){
						$('.indext_box').fadeIn();
					},7200);
					//显示办卡按钮
					setTimeout(function(){
						$('.z_btn').fadeIn();
					},9800);
				}else{
					$('#loadingPage').hide();
					$('.indexf_box').hide();
					$('.indexs_box').hide();
					$('.indext_box').show();
					//显示办卡按钮
					setTimeout(function(){
						$('.z_btn').fadeIn();
					},1200);
				}

            }
        }
    }
}