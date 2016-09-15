$(document).ready(function () {

    $(".box .slide").click(function () {
        var parent = $(this).parent();
        $(this).toggleClass("active");
        console.log(parent);
        $(parent).find(".menu_list").slideToggle("slow");
    });

});
