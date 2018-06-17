$(document).ready(function () {

    // $(window).scroll(function(){
    //     var scrollSize = window.scrollY;
    //     if(scrollSize>20){
    //         $("#navbar").css("top","0px");
    //         $("#navbar").css("padding","15px");
    //         $(".logo1 img").css("top","0px");
    //         $(".logo1 img").css("padding","15px");
            
    //     }else{
    //         $("#navbar").css("top","54px");
    //         $("#navbar").css("padding","20px");
    //         $(".logo1 img").css("top","54px");
    //         $(".logo1 img").css("padding","20px");
    //     }
    // })
    
    
    
    
        // Coursels Starts
        $('.owl-carousel').owlCarousel({
            animateIn:"fadeIn",
            animateOut:"fadeOut",
            loop: true,
            items:2,
            stagePadding: 0,
            // margin: 10,
            // nav:true,
            // center:true,
            autoplayTimeout: 4500,
            autoplay: true,
            // autoplaySpeed:true,
            smartSpeed: 1500,
            // dotsEach:false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
        var owl = $('.section2 .owl-carousel');
        
    
    
    
        $('.section2 .customNextBtn').click(function () {
            owl.trigger('next.owl.carousel');
        })
        $('.section2 .customPrevBtn').click(function () {
            owl.trigger('prev.owl.carousel');
    
        });
    
        $(document).keydown(function (event) {
            if (event.keyCode == 39) {
                owl.trigger('next.owl.carousel');
            }
            if (event.keyCode == 37) {
                owl.trigger('prev.owl.carousel');
            }
        });
        
        // Coursels  End
    
    // Header-lang
    
        // $(".lang").click(function(){
        //  $(".insideLang").slideToggle()
        // })
    
        // $(".insideLang li").click(function(){
    
        //   var txt =   $(this).html();
        //   var angle = $(".lang .angle")
        //   $(".lang a").html(txt)
    
        // })
    
        // Header-lang-end
    
    
    
    //   reservation
    
    // $(".flightBtn").click(function(){
    //     $(".hotel").addClass("non");
    //     $(".flight").removeClass("non");
        
    
    // })
    
    // $(".hotelBtn").click(function(){
    //     $(".flight").addClass("non");
    //     $(".hotel").removeClass("non");
        
    
    // })
    
    
    // reservation-end
    
    
    // video
    
    // $(".fa-play-circle").on("click",function(){
    
    //     $(".openVideo").css("display","block")
    //     $(".videoCamp").css("display","block")
    //     $("body").css("overflow-y","hidden")
    // });
    // $(".fa-window-close").on("click",function(){
    
    //     $('video').trigger('pause')
    //     $(".openVideo").css("display","none")
    //     $(".videoCamp").css("display","none")
    //     $("body").css("overflow-y","visible")
    
    // });
    // video-end
    
    // scroll
    // if($(window).scrollTop()<400){
    //     $(".scrollToTop").hide()
    // }
    
    // $(window).scroll(function(){
    //     if($(this).scrollTop()>300){
    //         $(".scrollToTop").fadeIn(1000);
    //     }else{
    //         $(".scrollToTop").fadeOut(1000);
    //     }
    // });
    
    // $(".scrollToTop").click(function(){
    //     $("html, body").animate({scrollTop : 0},2000);
    //     return false;
    // })
    
    // scroll-end
           
      
    
    
    
    
       
    
    });
    
    