$(document).ready(function () {
    $(document).on("scroll", onScroll);
    var targetPos = $('#top-nav').offset().top;
    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > targetPos) {
            $('#header').addClass('fixed-nav');
            $('.welcome-section').css('padding-top','70px');
        } else {
            $('#header').removeClass('fixed-nav');
            $('.welcome-section').css('padding-top','0');
        }


    });
    $('.magnific').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
});

function onScroll(){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav .nav-item a.nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav .nav-item a.nav-link').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}