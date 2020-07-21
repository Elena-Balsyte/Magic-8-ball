$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes – definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

  $("#answer").hide();

// onClick function will open a window to input a question
	var onClick = function(){
    $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      setTimeout(
    function() {
	  var question = prompt("Ask Me Anything?");
	 magic8Ball.askQuestion(question)}, 500);
	};
	$("#questionButton").click( onClick ); //when the questionButton is clicked the onClick function runs


      magic8Ball.askQuestion = function(question) {
     $("#8ball").effect("shake");
     $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
     $("#answer").fadeIn(4000);
     // create a random number
     var randomNumber = Math.random();

     // make the random number between 0 and the number of items in your array
     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

     // round down the number to be a whole number
     var randomIndex = Math.floor(randomNumberForListOfAnswers);

     // use that number to index a random number from the answers array
     var answer = this.listOfAnswers[randomIndex];
   $("#answer").text(answer);
     console.log(question);
     console.log(answer);
};

});
