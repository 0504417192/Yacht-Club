$(document).ready(function(){


	 $('.menu').on('click', '.menu-item', function(event) {
         $(this).addClass("active").siblings().removeClass("active");  
         // event.preventDefault();
    });

	 $('.nav-item').mouseenter(function(){
	 	$('.desc ').show()
	 });
	 $('.nav-item').mouseout(function(){
	 		$('.desc').hide()
	 });

});