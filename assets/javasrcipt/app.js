
var triviaQuestions = [{


	question: "which is the smallest colums HTML Grid?",
	answerList: ["Col-6", "Col-12", "Col-4", "Col-.05"],
	answer: "Col-6"
	
},
// function answerList =["Col-6", "Col-12", "Col-4", "Col-.05"];

// console.log(answerList[0]);
{
	question: "what is a variable used for in Javascript?",
	answerList: ["Storing Data", "Finding API's", "Console.loging", "Declaring Ajax's"],
	answer: "Storing Data"
},{
	question: "______ is the common format for sending data between APIs?",
	answerList: ["HTML", "JSON", "URL", "CSS"],
	answer: "JSON"
},{
	question: "A set of steps that a computer can take to solve a particular problem is known as a ______?",
	answerList: ["Arithmetic", "Algorithm", "Arrays", "Asynchronous"],
	answer:  "Ajax's"
},{
	question: "What JQuery method do we use to retrieve data from a URL?",
	answerList: ["Alex", "Corvettes", "Giphy", "Ajax's"],
	answer:  "Ajax's"
},{
	question: "a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.",
	answerList: ["Arithmetic", "Pseudo styles", "algorithm", "Origin Master"],
	answer:  "Origin Master"
},{
	question: "What famous artist was name Prince",
	answerList: ["Jeffery Jenkins", "Mario Aburto", "Roger Nelson", "Frank Long"],
	answer: "Roger Nelson"
},{
	question: "Who directed Pixar's first three feature films?",
	answerList: ["Peter Docter", "Brad Bird", "John Lasseter", "Peter John"],
	answer: "John Lasseter"
},{
	question: " The _____ object is used to store multiple values in a single variable",
	answerList: ["Array", "variable", "Method", "function"],
	answer: "."
},{
	question: "In a HTML document how would you identify a Class",
	answerList: ["*", "$", "#", "."],
	answer: "."
},{
	question: "JavaScript can update and change both _____ and _____",
	answerList: ["RPS and Java", "Scripts and Json", "HTML and CSS", "variable and Arrays"],
	answer: "HTML and CSS"
},{
	question: "What is a Apliction Programing Interface'?",
	answerList: ["Dom", "API", "CSS", "HTML"],
	answer: "API"
},{
	question: "Where was Michael Jackson born?",
	answerList: ["Michigan Detroit", "Chicago Illinois", "Birmingham Alabama", "Gary Indiana"],
	answer: "Gary Indiana"
},{
	question: "which one of these American muscle car have only two seat?",
	answerList: ["Chevy Corvette", "Dodge Challenger", "Ford Mustang", "Chevy Camaro"],
	answer: "Chevy Corvette"
},{
	question: "What is a function in HTML?",
	answerList: ["A place to store CSS variable", "A media query to create mobile responsive websites", "a JavaScript procedure—a set of statements that performs a task or calculates a value", "It how you check condition in document.write"],
	answer:  "a JavaScript procedure—a set of statements that performs a task or calculates a value"
}];



function countdown(){
	seconds = 100;
	$('#time').html('<h3>Time Remaining: ' + seconds + '</h3>');
	time = setInterval(showCountdown, 1000);
}



//  // Our array of questions
// var questions = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15'];
// var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; 
// var messages = {
// 	endTime: "Out of time!",
// 	finished: "Alright! Let's see how well you did."
// }






