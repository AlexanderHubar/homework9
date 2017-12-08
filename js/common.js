$(document).ready(function () {

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

        $('section[id]').each(function () {
            var id = $(this).attr('id');
            if ($(this).offset().top-70 < $(window).scrollTop()){
                $('.navbar .nav-link a[href='+id+']').addClass('active').siblings().removeClass('active');
            }
        });

    });

    var headerHeight = 70;
    $('.nav-link').click(function (e) {
        e.preventDefault();
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            'scrollTop': $(linkHref).offset().top - headerHeight
        }, 1000);
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