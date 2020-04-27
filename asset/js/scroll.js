$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    document
        .getElementById("myBody")
        .style
        .marginTop = (-100 - 0.3 * scroll) + "px";

    if (scroll >= 200) {
        $("#myNav").addClass("bg-dark");
    } else {
        $("#myNav").removeClass("bg-dark");
    }
});