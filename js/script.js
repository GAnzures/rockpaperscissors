let randomNumber = 0;
$(".play").click(function() {
  randomNumber = Math.random()*3;
  let choice = $(".input").val();
  $(".userChoice").text(choice);
  
  let computerChoice = "No choice"
  
  if (randomNumber <= 1){
    computerChoice = "Rock";
  } else if (randomNumber > 1 && randomNumber <= 2){
    computerChoice = "Paper"
  } else {
    computerChoice = "Scissors"
  }
  $(".computerChoice").text(computerChoice)
  
  //Figure out how to deicde who won
});



