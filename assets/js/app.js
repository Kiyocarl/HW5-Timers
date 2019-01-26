$(document).ready(function(){
  $("#start-button").click(function(){
// ----------------------------------------------------------------
 // declaring the value for the timer to 60 seconds
 // hide the start button and rules
  	var number = 60;
  	alert("The let game begin!");
    $("#start-button").on("click", start);  // starts the games 
    $("#submit").on("click", finish);  // submits answers and finishes the game
    $("#restart").on("click", restart);  // restarts the games 
// ----------------------------------------------------------------
// functions
    function start(){
    	counter = setInterval(timer, 1000);
    	showMe(".question");
    	showMe(".answers");
    	showMe("#submit");
	    hideMe("#start-button");
	    hideMe(".rules");
	    hideMe("#restart");
	    hideMe("#results");
    }
    function timer(){
      number-- // decrements the timer by 1
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        alert("Times Up!")
        stop(); // calls the stop function
      }
    }
    function stop(){
    	clearInterval(counter); // stops the timer
    	$("#results").show();
    	$("#restart").show();
		$(".question").hide();
		$(".answers").hide();
		$("#submit").hide();
    }
    function finish(){
    	number = 1; // if number is equal to 0 number will show -1 so 1 has to be selected
    	clearInterval(counter); // stops the timer
    	timer();
    }

    function restart(){
    	number = 60;
    	start();
    }

    function hideMe(e) {
    	$(e).hide();
    }
    function showMe(e) {
    	$(e).show();
    }

// ----------------------------------------------------------------
//calling functions
  	start(); // calls the start function
  });
});


//  // Our array of questions
// var questions = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15'];
// var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; 
// var messages = {
// 	endTime: "Out of time!",
// 	finished: "Alright! Let's see how well you did."
// }






