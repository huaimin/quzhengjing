
function tab_hanshu(price,p_content,ssxx_id,tab_length)
{
	for (zs_id=0;zs_id<tab_length;zs_id++)
{
	document.getElementById(price+zs_id).className = "moren";
	document.getElementById(p_content+zs_id).style.display = "none";
}
	document.getElementById(price+ssxx_id).className = "this";
	document.getElementById(p_content+ssxx_id).style.display = "block";
}

/*  导航下拉 的 js */
$(document).ready(function(){	
	$(".header_img").click(function(){
		$(".navside").stop().slideDown();
		return false;
	});
	$(document).click(function(){
		$(".navside").stop().slideUp();
	});
	
	$(".navside li").click(function(){
		$(".navside").stop().slideUp();
	});
/* 搜索 的定位  */
$(document).ready(function(){	
	$(".header_img").click(function(){
		$(".navside").stop().slideDown();
		return false;
	});
	$(document).click(function(){
		$(".navside").stop().slideUp();
	});
	
	$(".navside li").click(function(){
		$(".navside").stop().slideUp();
	});
	$("#search_banner").sticky({topSpacing:0}); //距顶端位置
	
});	
	
//点击input内容消失
        var val = 0;
		$("#user-info input").focus(function(){
			val = $(this).attr('placeholder');
			$(this).attr('placeholder','');			
		})
		$("#user-info input").blur(function(){
			
			$(this).attr('placeholder',val);			
		})
		
	$(".tab_nr_0").attr("state", "close");
	$(".tab_nr_0").click(function(){
		$(".tab_nr_1").css("display","none");
    	var state = $(this).attr("state");
    	$(".tab_nr_0").attr("state", "close");
		if(state == "close"){
			$(this).attr("state", "open");
			$(this).siblings(".tab_nr_1").css("display","block");
		}
	});
	
	$(".nr .li1").attr("state", "close");
	$(".nr .li1").click(function(){
		$(".nr .li2").css("display","none");
		var state = $(this).attr("state");
		
		$(".nr .li1").attr("state", "close");
	  
		if(state == "close"){
			$(this).attr("state", "open");
			$(this).siblings(".li2").css("display","block");
		}
		
	});
	
		
});

	
