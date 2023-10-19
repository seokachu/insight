$(function(){
    /* Include Files */
    $('.header-include').load('../include/header.html',function(){
        
        //브라우저가 로드될때 (실시간 반영X)
        $(window).resize(function(){
            var trigger = $('header .gnb .trigger');
            var nav = $('.mega-navi');

            if($(this).innerWidth() > 767){
                //pc navi
                trigger.click(function(e){
                    e.preventDefault();
                    $(this).toggleClass('active');
                    nav.stop().slideToggle(300);
                });
                    $('section').click(function(){
                    nav.stop().slideUp();
                });
        
            }else if($(this).innerWidth() < 767){

                //mobile navi
                trigger.click(function(e){
                    e.preventDefault();
                    nav.stop().animate({'left' : 0},300);
                });

                //close Btn
                $('section, .btn-mega-navi-close').click(function(){
                    nav.stop().animate({'left': -300},300);
                });

                //navi mobile
                $('.mega-navi-item b').click(function(){
                    $('.mega-navi-item-wrap').slideUp(200);
                    $(this).next().stop().slideDown(200);
                    $(this).addClass('active');
                    $(this).parent().siblings().children('b').removeClass('active');
                });

                /* slick responsive header gnb */
                var slider = $('.gnb');  	
                var slickOptions = { 		
                    dots: false,
                    arrows:false,
                    infinite:false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    centerMode: false,
                    variableWidth: true
                };  

                var viewportWidth = $(this).innerWidth();
                    if(viewportWidth < 767) { 			
                        slider.not('.slick-initialized').slick(slickOptions); 		
                    }else{ 	
                        slider.slick('unslick');
                    } 
            }
        }).resize();


        /* login */
        var loginPw = $('.login-field .toggle-pw');

        loginPw.click(function(){
            //toggle icon shape
            $(this).toggleClass('bi-eye');
            //toggle input type = text 변경
            var inputType = $(this).parent().children('input').attr('type');
            
            if(inputType == 'password'){
                $(this).parent().children('input').attr('type','text');
            }else{
                $(this).parent().children('input').attr('type','password');
            }
        });

        /* header login modal */
        var loginBtn = $('.btn-login, .login-member a');
        var loginOverlay = $('.member-login-overlay');
        var closeBtn = $('.member-login-overlay .btn-modal-close');

        loginBtn.click(function(e){
            e.preventDefault();
            loginOverlay.fadeIn();
            $('body').addClass('active');
        });

        closeBtn.click(function(){
            loginOverlay.fadeOut();
            $('body').removeClass('active');
        });


        /* After login header ui */
        $('.btn-menber-primary').click(function(){
            $('.member-login-overlay').fadeOut();
            $('.user-alarm').show();
            $('.login-register-buttons').hide();
            $('body').removeClass('active');
        });






    });



    $('.footer-include').load('../include/footer.html',function(){

        /* footer lnb */
        $('.link-item-title').click(function(){
            $(this).next().stop().slideToggle(200);
            $(this).toggleClass('active');
        });

        $('.company-info-trigger').click(function(){
            $(this).next().stop().slideToggle(200);
            $(this).toggleClass('active');
        });


    });


    /* scroll header fixed */
    /* go-to-top Btn */
    $(window).scroll(function(){
        var headerActive = $('header');
        var scrollOST = $(this).scrollTop();
        var gotopBtn = $('.go-to-top');
    
        //scroll header
        if(scrollOST > 200){
            headerActive.addClass('active');
        }else{
            headerActive.removeClass('active');
        }

        //go top Btn
        gotopBtn.click(function(){
            $('html,body').stop().animate({scrollTop: 0},500);
        });

        if(scrollOST > 500){
            gotopBtn.fadeIn();
        }else{
            gotopBtn.fadeOut();
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
    } );

    /* Focus Class Slider */
    $('.focus-class-items').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        dots: false, //pc까지
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: false,
                arrows: false
                }
            }
        ]
    });

    
    
    /*##############- Subpage -################*/
    /* catecory-main.html detail-Buttons */
    var btnShortcut = $('.btn-shortcut');
    btnShortcut.click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    /* catecory-main.html cate-class-sort-Buttons */
    var btnSort = $('.cate-class-sort button');
    btnSort.click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });


    /* take-course.html All btn fuction */
    // 전체선택 체크박스 클릭
    var cartAllcheckBox = $('#all-check');
    var cartcheckBox = $('.cart-item .cart-event');

    cartAllcheckBox.click(function(){
        console.log(cartcheckBox);

        var isChecked = this.checked;
        cartcheckBox.prop('checked', isChecked);
    });

    var cartItem = $('.cart-wrap .cart-item'),
    closeBtn = $('.cart-overview .btn-clear'),
    allcloseBtn = $('.cart-header .btn-all-clear'),
    cartitemEmpty = $('.cart-item-empty'),
    cartHeader = $('.cart-header');

    //장바구니 비었을시 나오는 messge
    //장바구니 x버튼클릭시 삭제 
    function cartClear(){
        if($('.cart-wrap .cart-item').length == 0){
            cartitemEmpty.show();
            cartHeader.hide();
        }
    }

    closeBtn.click(function(){
        $(this).parents('.cart-item').remove();
        cartClear();
    });
    
    //전체클릭시 삭제
    allcloseBtn.click(function(){
        cartItem.remove();
        cartClear();
    });


    /* member-register.html */
    //sligan-slide
    var slide = $('.sligan-slide');
    var slideLi = slide.find('p');
    var slideCount = slideLi.length;
    var count = 0;

    function doActive(){
        slideLi.each(function(){
            $(this).removeClass('active');
        });

        var nextIdx = (count + 1) % slideCount;
        count = nextIdx;
        slideLi.eq(nextIdx).addClass('active');
    }
    doActive();
    
    //2.4초마다 움직이기
    function Timer(){
        setInterval(function(){
            doActive();
        },2400);
    }
    Timer();

    /* class-detail.html */
    //share modal
    var shareBtn = $('.btn-sidebar-badge.share');
    var sharemodalBtn = $('.class-share-overlay .btn-modal-close');

    shareBtn.click(function(){
        $('.class-share-overlay').fadeIn();
        $('body').addClass('active');
    });

    sharemodalBtn.click(function(){
        $('.class-share-overlay').fadeOut();
        $('body').removeClass('active');
    });

    //공유하기 버튼 클릭시 나오는 text
    $('.chare-choice-item .share').click(function(){
        $('.copied-link').show();
    });

    //class-detail-nav active
    $('.class-detail-nav > a').click(function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        /* scrolling smooth */
        
        var linklocation = $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop : $(linklocation).offset().top - 200 + 'px'
        },500);
    });

    //class-detail-accordion
    $('.chapter-title').click(function(){
        $(this).next().stop().slideToggle(200);
        $(this).toggleClass('active');
    });

    //class-detail btn
    $('.btn-curriculum-fold').click(function(){
        $('.chapter-content').slideUp(200);
        $(this).parents().siblings().children('button').removeClass('selected');
        $(this).addClass('selected');
        $('.chapter-title').addClass('active');
    } );

    $('.btn-curriculum-expand').click(function(){
        $('.chapter-content').slideDown(200);
        $(this).parents().siblings().children('button').removeClass('selected');
        $(this).addClass('selected');
        $('.chapter-title').removeClass('active');
    });

    //class-faq
    $('.class-detail-wrap .faq-title').click(function(){
        $(this).next().stop().slideToggle(200);
    });

    //cart confirm 장바구니 담기
    $('.btn-primary.btn-cart').click(function(){
        $('.cart-confirm').show();
        setTimeout(function(){
            $('.cart-confirm').hide();
        },4000);
    });

    //cart confirm 장바구니 닫기
    $('.cart-confirm .btn-close').click(function(){
        $('.cart-confirm').hide();
    });

    //class heart
    $('.btn-sidebar-badge.heart').click(function(){
        $(this).children().toggleClass('bi-heart bi-heart-fill');
    });









});




