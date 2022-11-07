
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
// // alert("moin");
// var gamePattern = [];
// var buttonColours = ["red", "blue", "green", "yellow"];
// //3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });


// function nextSequence() {
//     var randomNumber = Math.floor(Math.random() * 4);
//     var randomChosenColour = buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);
    
//     //1. Use jQuery to select the button with the same id as the randomChosenColour
//   //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
//     $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

//     //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
//     playSound(randomChosenColour);

//     level++;
//     $("h1").text("Level" + level);

// }

// //1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// $(".btn").click(function(){
//      //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//     var userChosenColour = $(this).attr("id");
//     //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
//     userClickedPattern.push(userChosenColour);
//     // console.log("userClickedPattern");
//     playSound(userChosenColour);
//     animatePress(userChosenColour);

//     //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
//     checkAnswer(userClickedPattern.length-1);
// })


// function playSound(name) {
//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();
// }


// //1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
// function animatePress(currentColour) {
//    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//   $("#" + currentColour).addClass("pressed");

//   //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
//   setTimeout(function () {
//     $("#" + currentColour).removeClass("pressed");
//   }, 100);
// }


// //1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
// function checkAnswer(currentLevel) {

//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//       //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){

//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);

//       }

//     } else {

//       console.log("wrong");

//     }

// }
