// --------------- HEADER -----------------
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".cabecalho").addClass("cabecalho-white");
            console.log('Uepa');
        } else {
            $(".cabecalho").removeClass("cabecalho-white");
            console.log('Opa');
        }
    })
})