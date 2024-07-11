
$(function(){
    var pagetop = $('#to-top');
    pagetop.hide();

    $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        pagetop.fadeIn();
    } else {
        pagetop.fadeOut();
    }
    });

    pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
    });
});
$(".hamburger, .mask").click(function(){ 
    $(".hamburger, nav, .mask").toggleClass("active");
    });