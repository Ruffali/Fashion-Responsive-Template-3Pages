        // Slider-Start

var activeIndex = 0;
var slider = document.getElementById('myimage');
var allImages = document.querySelectorAll(".wrapper li img");
var numberDiv = document.querySelector('.number');


document.addEventListener("keydown", function(event){
    if(event.keyCode == 37){
        slideLeft();
    }else if(event.keyCode == 39){
        slideRight();
    }
})

for(var i = 0; i < allImages.length; i++){
    (function(){
        var current = i;
        var img = allImages[i];
        img.onclick = function(){
        activeIndex = current;
        var imgSource = allImages[activeIndex].getAttribute("src");
        slider.setAttribute("src",imgSource);
        Slide();
        }
    }())
}
function Slide(){
    var active = document.querySelector('.active');
    active.classList.remove("active");
    allImages[activeIndex].parentElement.classList.add("active");
}
function slideRight(){
    if(activeIndex == allImages.length - 1){
        activeIndex = 0;
    }else{
        activeIndex++;
    }
    Slide();
}
function slideLeft(){
    if(activeIndex == 0){
        activeIndex = allImages.length - 1;
    }else{
        activeIndex--;
    }
    Slide();
}
     // Slider-End
