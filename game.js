var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");

    playSound(randomChosenColour);
}
function playSound(color){
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}

$(".btn").click(function () {
   var userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);

   playSound(userChosenColour);
//    console.log(userClickedPattern); 

});

function animatePress(currentColour){
    
}
