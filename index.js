// $("h1").text("hello");
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern=[];

var level =0;
var started = false;

$(".btn").click(function() {
 
    var userChosenColour = $(this).attr("id");
  
    userClickedPattern.push(userChosenColour);
  
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
  
  });

$(document).keypress(function(){ 
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
    }
})


function nextSequence() {
  userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.random() * 4;
    randomNumber = Math.floor(randomNumber);
    
    var randomChosenColour = buttonColors[randomNumber];
    // console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);
    
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChosenColour);

}   
            
                                                                                                                 
function playSound(name){
    var audio= new Audio("sounds/"+name+'.mp3');
    audio.play();
}

function animatePress(currentColor){
     $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
                                                                  
    console.log("success");
          
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");
    var wrong=new Audio('sounds/wrong.mp3');
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game Over , Press Any Key to Restart");

    startOver();

  } 
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;

}


// function call(){
//   level =1;
//   wrong =new Audio("game-start");
//   start =true;
// }





































