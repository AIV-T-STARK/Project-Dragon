/*-------------------------------------
---------------------------------------*/

$(document).ready(function () {
    $('#clients-owl').owlCarousel({
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3,
                margin: 20,
                autoplay: false,
                loop: false,
            }
        }
    });

    $('[data-fancybox="portfolio"]').fancybox({
        loop: true
    });

    $("a.nav-link").click(function() {
        let target = $(this).attr("href");

        $('html,body').stop().animate({
          scrollTop: $(target).offset().top - 75
        }, 600);
        event.preventDefault();
      });
});

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});