$(window).on('load', function() {
  $("#my-menu").css('opacity', '1');
});
$(function() {
  $(document).ready(function() {
    $("#my-menu").mmenu({
      "extensions": [
        "position-right",
        "border-none",
      ],
      navbar: {
        title: ''
      },
      "slidingSubmenus": false
    });
    $(".accordion_head").click(function(){
		if ($('.accordion_body').is(':visible')) {
			$(".accordion_body").slideUp(300);
			$(".plusminus").text('+');
		}
        if( $(this).next(".accordion_body").is(':visible')){
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        }else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
	});
  });
});
