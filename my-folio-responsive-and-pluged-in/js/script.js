$(document).ready(function () {
    //for scroll up
    $('.scroll_top_button').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });



    //for scrollup button fade out
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll_top_button').fadeIn();
        } else {
            $('.scroll_top_button').fadeOut();
        }
    });

    //animation scroll js
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });
    //for menu bg change
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 550) {
            $('#navigation').addClass('newnavigation');
        } else {
            $('#navigation').removeClass('newnavigation');
        }
    });
    //for animate css
    new WOW().init();
});
