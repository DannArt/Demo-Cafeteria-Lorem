$(function () {
	$("body").on('click',".btn, ul.yanone li:nth-child(3), ul.navegacion li:nth-child(3)", function()
		{
			$('html, body').animate({scrollTop : $('#nosotros').offset().top},1600);
			return false;
	 	});
 	$("body").on('click'," ul.yanone li:nth-child(2), ul.navegacion li:nth-child(2)", function()
	 	{
			$('html, body').animate({scrollTop : 2174},1600);
			return false;
	 	});
 	$("body").on('click'," ul.yanone li:nth-child(4), ul.navegacion li:nth-child(4)", function()
	 	{
			$('html, body').animate({scrollTop: $('#contacto').offset().top},1600);
			return false;
	 	});
 	
function initialize() {
  	var mapProp = {
    center:new google.maps.LatLng(19.958401, -99.532302),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  	};
  	var map = new google.maps.Map(document.getElementById("mapa"), mapProp);
}
	google.maps.event.addDomListener(window, 'load', initialize);
 $(window).scroll(function(event){
 	var y= $(this).scrollTop();
 	
 	if (y >= 929 && y<= 1600) {
 		$("#nosotros h1, #nosotros p").removeClass('hidee');
 		$("#nosotros h1, #nosotros p").addClass('animated fadeInLeft retraso3');
 		$("#nosotros p").addClass('animated fadeInLeft retraso3');
 	}
 	else if (y>=2573) {

 		$(" #contacto .contact p").removeClass('hidden');
 		$("#contacto .contact2").removeClass('hidden');
 		$("#contacto .contact").addClass('animated fadeInUp ');
 		$("#contacto .contact2").addClass('animated fadeInUp retraso');
 	}
 
 });
 
 	$('.navbar-collapse ul li a').mouseenter(function()
 		{ $(this).addClass('animated  pulse')});
 	$('.navbar-collapse ul li a').mouseleave(function()
 		{ $(this).removeClass('animated pulse')});
 	
});
