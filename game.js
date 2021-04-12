var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];
//console.log("color = "+randomChosenColour);
var gamePattern = [];
gamePattern.push(randomChosenColour);
console.log(gamePattern);

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    //console.log("random = "+randomNumber);
    return randomNumber;
}
