$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-in').each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                $(this).css('opacity', '1');
            } else {
                $(this).css('opacity', '0');
            }
        });
    });
});
