$(document).ready(function () {
    $("button").on("click", function () {
        $(".dropdown-menu").animate({
            height: 'toggle'
        });
    });
    $(".dropdown-menu-items").on("click", function () {
        $(".dropdown-menu").animate({
            height: 'toggle'
        });
    });
});

