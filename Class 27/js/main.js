$('.go--top').hide();


$(window).scroll(function(){
    var jekono = $(this).scrollTop();
    $('.go--abc').html(jekono);
    if(jekono<500){
        $('.go--top').fadeOut(2000);
    }else{
        $('.go--top').fadeIn(2000);
    }
});

$(document).ready(function(){
    $('.go--top').click(function(){
        $('body,html').animate({
            scrollTop:0
        },500);
    });
});