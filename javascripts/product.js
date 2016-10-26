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
	$("#product_list").sticky({topSpacing:50}); //距顶端位置
	
});
