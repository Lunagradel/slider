var currentSlide = 1;
var currentPos = 0;
var maxSlides;
var selectorText;
var infoShown = false;

var images = [
    {
        "title" : "cash",
        "fileName" : "cash.jpg",
        "photographer": "unknown",
        "info" : "something about Johnny Cash",
        "infoColor" : "d3e0ad"
    },
    {
        "title" : "elefant",
        "fileName" : "elefant.jpg",
        "photographer" : "Anders Andersen",
        "info" : "African elephant",
        "infoColor" : "e0c3ad"
    },
    {
        "title" : "caaaaash",
        "fileName" : "cash.jpg",
        "photographer" : "John Doe",
        "info" : "much wow",
        "infoColor" : "d3e0ad"
    },
    {
        "title" : "snfdsjkf",
        "fileName" : "elefant.jpg",
        "photographer" : "Safari Man",
        "info" : "Look at those big ears!",
        "infoColor" : "e0c3ad"
    }
];

setupImages();

function setupImages() {

    $(".images-wrapper, .images").css("width", images.length+"00%");

    maxSlides = images.length;

    $(".img-name, .title").append(images[0].title);
    $(".by").append("By "+images[0].photographer);
    $(".info").append(images[0].info);
    $(".more-info-box").css("background-color", "#"+ images[0].infoColor+"");

    for (var i = 0; i < images.length; i++){
        console.log(images.length);

        var template = '<div class="image-container" id="'+i+'"></div>';

        $(".images").append(template);

        $("#"+i).css("background-image", "url('img/"+images[i].fileName+"')");
    }
}

for (var i = 0; i < maxSlides; i++){

    if (i == 0) {
        selectorText = "#"+i+",";
    } else {
        if (i == maxSlides-1) {
            selectorText += ("#"+i);
        } else {
            selectorText += ("#"+i+",");
        }
    }
}

$(".slide-arrow").click(function () {
   if (this.id == 'right-arrow'){
       slideRight();
   }
   if (this.id == 'left-arrow'){
       slideLeft();
   }
});

function slideRight(){
    if (currentSlide == 1) {
        $("#left-arrow").css("color","#ffffff");
    }

    if (currentSlide < maxSlides){
        var nextPos = currentPos+100;
        $(selectorText).css("transform", "translate(-"+nextPos+"%)");

        //change title with opacity
        $(".img-name").css("opacity","0");
        setTimeout( function () {
             $(".img-name").empty().append(images[currentSlide-1].title).css("opacity","1");
        }, 500)

        //change info text
        $(".title").empty().append(images[currentSlide].title);
        $(".info").empty().append(images[currentSlide].info);
        $(".by").empty().append(images[currentSlide].photographer);
        $(".more-info-box").css("background-color", "#"+ images[currentSlide].infoColor+"");

        currentSlide = currentSlide+1;
        currentPos = nextPos;


        if (currentSlide == maxSlides) {
            $("#right-arrow").css("color","grey");
        }
    } else {
        console.log("current slide is more than max")
        //do nothing
    }
}

function slideLeft() {
    if (currentSlide == maxSlides){
        $("#right-arrow").css("color","#ffffff");
    }

    if (currentSlide > 1){
        var nextPos = currentPos-100;
        $(selectorText).css("transform", "translate(-"+nextPos+"%)");

        //change title
        $(".img-name").css("opacity","0");
        setTimeout( function () {
             $(".img-name").empty().append(images[currentSlide-1].title).css("opacity","1");
        }, 500);

        //change info text
        $(".title").empty().append(images[currentSlide-2].title);
        $(".info").empty().append(images[currentSlide-2].info);
        $(".by").empty().append(images[currentSlide-2].photographer);
        $(".more-info-box").css("background-color", "#"+ images[currentSlide-2].infoColor+"")

        currentPos = nextPos;
        currentSlide = currentSlide-1;

        if (currentSlide == 1) {
            $("#left-arrow").css("color","grey");
        }
    } else {
        //do nothing
    }
}

//slide with keys
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            slideLeft();
        break;

        case 39: // right
            slideRight();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$("#infoBtn").click(function() {

    if (infoShown) {
        $(".bottom-bar").css("transform", "translateY(0%)");
        $(".more-info-box").css("transform", "translateY(0%)");
        $("#arrow-up").css("transform", "rotate(0deg)");
        infoShown = false;
    } else {
        $(".bottom-bar").css("transform", "translateY(-370%)");
        $(".more-info-box").css("transform", "translateY(-100%)");
        $("#arrow-up").css("transform", "rotate(180deg)");
        infoShown = true;
    }
});

// $("#infoBtn").draggable({axis: "y"});







