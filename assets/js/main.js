$(document).ready(function() {
	$(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").css("background-color", "#16a086");
            $("#menu").css("box-shadow", "0 0 0.3em #000");
        } else {
            $("#menu").removeClass(".navbar-one");
        }
      });

	$(".button-collapse").sideNav();

});