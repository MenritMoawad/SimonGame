var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).on("keydown",function(){
    if(!started){
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
   var userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   
   playSound(userChosenColour);
   animatePress(userChosenColour);
   //    console.log(userClickedPattern); 
   var lastIndex = userClickedPattern.length-1;
   console.log("last index "+lastIndex);
    checkAnswer(lastIndex);
});
function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("game pattern " +gamePattern);
    $("#"+randomChosenColour).fadeOut("fast").fadeIn("fast");
    level = level + 1;
    $("#level-title").text("level "+level);

    playSound(randomChosenColour);
}
function playSound(color){
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
            playSound("wrong");
            $("body").addClass("game-over");
                setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);

            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
        }
}
function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
}