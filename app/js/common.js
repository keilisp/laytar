
$(window).on('load', function(){$("#my-menu").css('opacity','1');});
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
  });
});
