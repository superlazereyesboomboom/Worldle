

export const evaluateGuess = (code, guesses, guessCounter) => {
  let feedback = "";


//evaluates word
  for (let i = 0; i <= 4; i++) {
    if (code[i] === guesses[i]) {
      feedback += "X";
    }
    else if (code.includes(guesses[i])) {
      feedback += "O";
    }
    else{
      feedback += "-";
    }
  }
guessCounter++;
//checks to see if they guessed the right word
if (feedback === 'XXXXX'){
  feedback = "You Win!"
}
else if(guessCounter===6){
  feedback = "You Lose!"
}


  return feedback;
};
