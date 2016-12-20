$(document).ready(function () {
    navBarActive();
    showIframe();
    focusImage();
    showStrategy();

});


var focusImage = $(".section-five img").hover(function () {
    $(this).toggleClass("blur", 1000, "easeOutSine")
});
// nav Bar
var navBarActive = $("nav ul li a").click(function () {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
});

//section five show strategy function
var showStrategy = $(".strategy img").click(function () {
    $(".strategy-word").children("p").hide();
    var className = $(this).attr("alt");
    $("." + className).children("p").show("slow");
});


//show iframe function
var iconId;
var iframeId;
var showIframe = $("i").click(function () {
    iconId = $(this).attr("id");
    iframeId = "#" + iconId + "-iframe";
    $(iframeId).show("slow");
    $(this).style("cursor","hand");
});


