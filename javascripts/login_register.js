/**
 * Created by Administrator on 2016/3/29.
 */
$(document).ready(function () {
	//点击input内容消失
        var val = 0;
		$("#user-info input").focus(function(){
			val = $(this).attr('placeholder');
			$(this).attr('placeholder','');
			
		})
		$("#user-info input").blur(function(){
			
			$(this).attr('placeholder',val);
			
		})	
/*  弹出窗 js  */
	$("#plus").click(function(){
		$(".all").show();
		return false;
	});
	$(".xiala a").click(function(){
	    $(".all").hide();
	});	
/* 弹出协议  */
	$("#agreement").click(function(){
		$(".agreement").show();
		return false;
	});
	$(".xiala1 a").click(function(){
	    $(".agreement").hide();
	});	
/*  类型下拉切换  */	

	
});

	





