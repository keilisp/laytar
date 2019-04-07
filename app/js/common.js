$(window).on('load', function () {
  $("#my-menu").css('opacity', '1');
});
$(function () {
  $(document).ready(function () {
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
    $(".accordion_head").click(function () {
      if ($('.accordion_body').is(':visible')) {
        $(".accordion_body").slideUp(300);
        $(".plusminus").text('+');
      }
      if ($(this).next(".accordion_body").is(':visible')) {
        $(this).next(".accordion_body").slideUp(300);
        $(this).children(".plusminus").text('+');
      } else {
        $(this).next(".accordion_body").slideDown(300);
        $(this).children(".plusminus").text('-');
      }
    });
  });

  $('.offers__content-wrapper-1').sliphover({
    caption: 'title'
  })
  $('.offers__content-wrapper-2').sliphover({

  })
  $('.offers__content-wrapper-3').sliphover({

  })
  $('.offers__content-wrapper-4').sliphover({

  })

});

var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 49.078190,
        lng: 24.221556
      },
      zoom: 10
    });
  }