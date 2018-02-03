var buttonOne = document.getElementById('one');
var buttonTwo = document.getElementById('two');
var resetButton = document.getElementById('reset');
var h1 = document.querySelector("h1");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


buttonOne.addEventListener("click", function(){
  if(!gameOver)
  p1Score++;
  if(p1Score === winningScore){
    p1Display.classList.add("winner");
    gameOver= true;
  }
  p1Display.textContent = p1Score;
  });

  buttonTwo.addEventListener("click", function(){
    if(!gameOver)
    p2Score++;
    if(p2Score === winningScore){
      p2Display.classList.add("winner");
      gameOver= true;
    }
    p2Display.textContent = p2Score;
    });

resetButton.addEventListener("click", function(){
  reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent= this.value;
  winningScore = Number(this.value);
  reset();
});
