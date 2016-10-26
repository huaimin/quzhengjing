// JavaScript Document

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
	
var u = navigator.userAgent;
var isMobile = !!u.match(/AppleWebKit.*Mobile.*/) ;

if(isMobile == true){
	window.addEventListener('touchmove', function(e){
		if($(this).scrollTop()>60){
		$(".navbar-default").addClass("site_hide");
		$(".navbar-collapse.collapse").css("border-bottom","none");
	}else{
		$(".navbar-default").removeClass("site_hide");	
		$(".navbar-collapse.collapse").css("border-bottom","1px solid #636363");
	}
	});
}
else{
$(document).scroll( function() { 
	if($(this).scrollTop()>60){
		$(".navbar-default").addClass("site_hide");
		$(".navbar-collapse.collapse").css("border-bottom","none");
	}else{
		$(".navbar-default").removeClass("site_hide");	
		$(".navbar-collapse.collapse").css("border-bottom","1px solid #636363");
	}
 } );
}
// @ 给窗口加滚动条事件
	$(window).scroll(function(){
		var productTop = $("#header").height() - 70;
		
		// 在标题栏显示滚动的距离
		var ling = $(document).scrollTop();
		// 如果滚动距离大于productTop的时候让滚动框出来
		if(ling > productTop){
			$('.toolbar-contact').show();
		}else{
			$('.toolbar-contact').hide();	
		}
	});
	
	$(".back2top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
  		return false;	
	});		
/*  导航小屏 点击事件  */	
	$(".header_img").click(function(){
		var dp = $(".navside").css("display");
		if("none" == dp) {
			$(".navside").stop().slideDown();
			$(".header_img").css("background-color","rgba(0,0,0,0.5)");
			$(".header_img").css("width","50px");
			$(".header_img").css("height","40px");
		} else {
			$(".navside").stop().slideUp();
			$(".header_img").css("background","none");
		}
		return false;
	});
	$(document).click(function(){
		$(".navside").stop().slideUp();
		$(".header_img").css("background","none");
		
	});

	
	$(".pl_content").css("display","none");
	$(".pl_content").eq(0).css("display","block");
	$(".product_det").find(".p_content").css("display","none");
	$("#pl_content0").find(".p_content").eq(1).css("display","block");
	$("#pl_content1").find(".p_content").eq(1).css("display","block");
	$("#pl_content2").find(".p_content").eq(1).css("display","block");		
	$(".product_price li").click(function(){
		var i=$(this).index();
		var showDiv = $(this).parents(".product_price").siblings(".product_det").find(".p_content");
		$(this).siblings().find("a").removeClass("this");
		$(this).find("a").addClass("this")
		showDiv.css("display","none");
		showDiv.eq(i).css("display","block");
		
	});		
	$(".product_list a").click(function(){	
		
	});
	

	
});

/*  藏经阁  里面的滚动 至顶部  */		
//滚动到指定高度定位
$(document).ready(function(){
	dingwei_01('gundong');
});
function dingwei_01(id, s) {
	var obj = document.getElementById(id);
	if (obj == null) {
		return false;
	}
	if (typeof s != 'undefined') {
		var gaodu_f01 = s;
	} else {
		var gaodu_f01 = obj.offsetTop;
	}
	window.onscroll = function(){
		dingwei_02(id, gaodu_f01);
	}
}
function dingwei_02(id, height) {
	var obj = document.getElementById(id);
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop < height) {
	if (typeof document.body.style.maxHeight === "undefined") {
	//alert('IE6 Detected');
	obj.className='index_lclift';
	} else {
	obj.className='index_lclift';
	}
	} else {
	if (typeof document.body.style.maxHeight === "undefined") {
	//alert('IE6 Detected');
	obj.className='budingwei';
	} else {
	obj.className='budingwei';
	}
}
}	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		