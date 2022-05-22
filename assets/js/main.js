// --------------- HEADER -----------------
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".fixed").addClass("fixed-white");
            $(".item-select").addClass("item-select-fixed");
        } else {
            $(".fixed").removeClass("fixed-white");
            $(".item-select").removeClass("item-select-fixed");
        }
    })
})
// --------------- SLIDER -----------------
$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  });