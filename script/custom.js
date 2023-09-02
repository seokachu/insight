$(function(){
    /* Include Files */
    $('.header-include').load('./include/header.html',function(){

        /* Header menu */
        var trigger = $('header .gnb .trigger');
        var nav = $('.mega-navi');

        trigger.click(function(){
            nav.stop().slideToggle();
        });

        $('section').click(function(){
            nav.stop().slideUp();
        });

    });
    $('.footer-include').load('./include/footer.html');

    /* scroll header fixed */
    $(window).scroll(function(){
        var headerActive = $('header');
        var scrollOST = $(this).scrollTop();
       
        if(scrollOST > 200){
            headerActive.addClass('active');
        }else{
            headerActive.removeClass('active');
        }
    });

    /* Focus Class */
    $('.like').click(function(){
        $(this).toggleClass('active');
    });

    /* Countdown plugin */
    $("#early-bird-countdown")
    .countdown("2024/11/01", function(event) {
        $(this).html(
        event.strftime('<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음')
        );
    });

    /* front Slider */
    $('.front-slider-items').slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpdeed: 5000,
        fade: false,
        speed: 500,
        pauseOnHover: true
    }
    );

    /* Focus Class Slider */
    $('.focus-class-items').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        dots: false
    });

});