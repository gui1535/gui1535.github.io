$(function () {
    var filterList = {
        init: function () {
            $('.portfolio-grid').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: 'all' // show app tab on first load
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});



function defer(method) {
    if (window.jQuery)
        method();
    else
        setTimeout(function () {
            defer(method)
        }, 50);
}
defer(function () {
    (function ($) {

        function doneResizing() {
            var totalScroll = $('.logo-slider-frame').scrollLeft();
            var itemWidth = $('.logo-slider-item').width();
            var difference = totalScroll % itemWidth;
            if (difference !== 0) {
                $('.logo-slider-frame').animate({
                    scrollLeft: '-=' + difference
                }, 500, function () {
                    checkArrows();
                });
            }
        }

        function checkArrows() {
            var totalWidth = $('#logo-slider .logo-slider-item').length * $('.logo-slider-item').width();
            var frameWidth = $('.logo-slider-frame').width();
            var itemWidth = $('.logo-slider-item').width();
            var totalScroll = $('.logo-slider-frame').scrollLeft();

            // if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
            //   $(".next").css("visibility", "hidden");
            // }
            // else {
            //   $(".next").css("visibility", "visible");
            // }
            // if ( totalScroll < itemWidth ) {
            //   $(".prev").css("visibility", "hidden");
            // }
            // else {
            //   $(".prev").css("visibility", "visible");
            // }
        }

        $('.arrow').on('click', function () {
            var $this = $(this),
                width = $('.logo-slider-item').width(),
                speed = 500;
            if ($this.hasClass('prev')) {
                $('.logo-slider-frame').animate({
                    scrollLeft: '-=' + width
                }, speed, function () {
                    checkArrows();
                });
            } else if ($this.hasClass('next')) {
                $('.logo-slider-frame').animate({
                    scrollLeft: '+=' + width
                }, speed, function () {
                    checkArrows();
                });
            }
        });

        $(window).on("load resize", function () {
            checkArrows();
            $('#logo-slider .logo-slider-item').each(function (i) {
                var $this = $(this),
                    left = $this.width() * i;
                $this.css({
                    left: left
                })
            });
        });

        var resizeId;
        $(window).resize(function () {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 500);
        });

    })(jQuery);
});