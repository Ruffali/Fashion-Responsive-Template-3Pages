$(document).ready(function () {

    var footer = $('#footer');
    var changingTop = $('#box .upper');
   
    $( changingTop ).mouseover(function() {
        $(footer).css({"marginTop": "25%"});
      });
    $( changingTop ).mouseout(function() {
    $(footer).css("marginTop", "5%");
    });


    // animation strats
    var imgLeft = $('#firstPart .container-fluid .row .col-md-12 .models .imgLeft');
    var bigImg1 = $('#firstPart .bigImg1');
    var bigImg2 = $('#firstPart .bigImg2');
    var imgRight = $('#firstPart .imgRight');
    


    // function anime(){
    //     imgLeft.animate({left: '28%', width: "18%", height: "600px"}, 500);
    //     imgLeft.animate({left: '60%'}, 800);
    //     imgLeft.animate({left: '88%' , width: "13%", height: "450px"}, 1000);
    //     imgLeft.animate({left: '40%' , width: "9%", height: "250px", zIndex: "-1"}, 1200, "linear");
    //     imgLeft.animate({left: '0%' , width: "13%", height: "450px"}, 1400);

    //     bigImg1.animate({left: '32%'}, 500);
    //     bigImg1.animate({left: '59%' , width: "13%", height: "450px"}, 800);
    //     bigImg1.animate({left: '20%' , width: "9%", height: "250px", zIndex: "-1"}, 1000, "linear");
    //     bigImg1.animate({left: '-20%', width: "13%", height: "450px"}, 1200);
    //     bigImg1.animate({left: '0%' , width: "18%", height: "600px"}, 1400);

    //     bigImg2.animate({left: '26%' , width: "13%", height: "450px"}, 500);
    //     bigImg2.animate({left: '-10%' , width: "9%", height: "250px", zIndex: "-1"}, 800, "linear");
    //     bigImg2.animate({left: '-45%' , width: "13%", height: "450px"}, 1000);
    //     bigImg2.animate({left: '-32%' , width: "18%", height: "600px"}, 1200);
    //     bigImg2.animate({left: '0%'}, 1400);

    //     imgRight.animate({left: '-40%' , width: "9%", height: "250px", zIndex: "-1"}, 500, "linear");
    //     imgRight.animate({left: '-75%' , width: "13%", height: "450px"}, 800);
    //     imgRight.animate({left: '-59%' , width: "18%", height: "600px"}, 1000);
    //     imgRight.animate({left: '-26%'}, 1200);
    //     imgRight.animate({left: '0%' , width: "13%", height: "450px"}, 1400);
    //     anime();
    // };
    // anime();
    
});
