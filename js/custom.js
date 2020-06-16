$(function(){
	
	$('#slide img').each(function(aa){
		$(this).css("left",1200*aa);
		
	});
	/*fixed*/
	$(window).scroll(function(){
		$('#fixed').stop().animate({top:$(this).scrollTop()+200},500);
	});
	
	setInterval(function(){
		$('#slide img').each(function(){
			var nowLeft=parseInt($(this).css("left"));
			var movePos = nowLeft-1200;
			$(this).animate({left:movePos},1000,function(){
				if(movePos<=-2400){
					$(this).css("left",1200);
				}
			});
		});
	
	},3000);
	
	$('#clinic li').mouseenter(function(){
		$(this).find('a>p').stop().show();
		}); 
	$('#clinic li').mouseleave(function(){
		$(this).find('a>p').stop().hide();
		});
	
	
	$('#header h1').click(function(){
		$('#pop').show();
	});
	
	
	
	
	
	$('.lang').mouseenter(function(){
		$('.lang ul').stop().slideDown(200);
	});
	$('.lang').mouseleave(function(){
		$('.lang>ul').stop().slideUp(200);
	});
	
	$('.lang>ul>li').click(function(){
		$('img').remove(".on");
		$('.lang').prepend("<img src ='" + $(this).children("img").attr("src") + "'>");
		$(".lang>img").addClass("on");
		console.log($(this).children("img").attr("src"));
		$(".lang a").text($(this).text());
	});
	
	$('#pop span').click(function(){
		$('#pop').hide();
	});
	$('#mainMenu>li, #topBack').mouseenter(function(){
		$('.menu').stop().slideDown(500);
		$("#topBack").stop().slideDown(500);
	});
	$('#mainMenu>li').mouseleave(function(){
		$('.menu').stop().slideUp(500);
		$("#topBack").stop().slideUp(500);
	});
	

	
});