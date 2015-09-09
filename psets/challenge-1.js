/*
The Word Guesser

You'll create a simple word guessing game where the user gets infinite tries to
guess the word (like Hangman without the hangman, or
like Wheel of Fortune without the wheel and fortune).


- Create two global arrays: one to hold the letters of the
  word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
  (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

- Write a function called guessLetter that will:
  - Take one argument, the guessed letter.
  - Iterate through the word letters and see if the guessed letter is in there.
  - If the guessed letter matches a word letter, changed the guessed letters
    array to reflect that.
  - When it's done iterating, it should log the current guessed letters ('F__')
  - and congratulate the user if they found a new letter.
  - It should also figure out if there are any more letters that need to be guessed,
  - and if not, it should congratulate the user for winning the game.

- Pretend you don't know the word, and call guessLetter multiple times with
  various letters to check that your program works.

- Bonus: Make it more like Wheel of Fortune:
  - Start with a reward amount of $0
  - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
  - When they guess the word, log their final reward amount.

- Bonus: Make it like Hangman:
  - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
  - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
  - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
*/

// write your solution here...
// answer String
var answer = ['F', 'O', 'O', 'D'];
// guess String
var guess = ['_', '_', '_', '_'];
// array of wrongly guessed letters
var wrong = [];
// length of guess word
var answerLen = answer.length;
// counts correctly guessed letters
var letterCount = 0;
// counts wrongly guessed letters
var strikes = 0;

// Game function
function guessLetter(letter) {
  // negate upper and lowercase entries
  letter = letter.toUpperCase();
  // iterate through each letter in answer
  for (var i = 0; i < answerLen; i++) {
    // if letter matches an answer letter
    if (letter == answer[i]) {
      // add letter to user guess array in i position
      guess[i] = letter;
      // increment correctly guessed count
      letterCount++;
    }
    // break out of loop if letter was in array and at the last answer pos
    if (guess.indexOf(letter) != -1 && i == answerLen - 1) {
      console.log("correct!: " + guess);
      break;
    }
    // check that user hasn't entered this letter already
    if (wrong.indexOf(letter) != -1) {
      console.log("You guessed that already -_-  --> " + wrong)
      break;
    }
    // if letter didnt match any letter in array
    if (letter != answer[i] && i == answerLen - 1) {
      // add letter to wrongly guessed letters
      wrong.push(letter);
      // increment wrong answer tally and alert loser, i mean player
      strikes++;
      console.log("wrong: " + wrong);
      // poor hangman >.<
      buildHangMan(strikes);
      // if 6 wrong answers end game
      if (strikes == 6) {
        console.log("GAME OVER!!");
        process.exit();
      }
    }
  }
  // Once count == answer length player wins
  if (letterCount == answerLen) {
    console.log("YAYY!! YOU WIN!!");
        process.exit();
  }
  // print a blank line for cleanliness
  console.log("\n");
}

// helper function to build hang man according to strikes
function buildHangMan(strikes) {
  if (strikes > 0){
    console.log ("    0    ");
    if (strikes == 2){
      console.log ("    |    ");
    }
    if (strikes == 3){
      console.log ("   (|    ");
    }
    if (strikes >= 4){
      console.log ("   (|)   ");
      if (strikes  == 5){
        console.log ("   /   ");
      }
      if (strikes == 6){
        console.log ("   / \\   ");
      }
    }
  }
  else{
    console.log ("\n");
  }
}

guessLetter('a');
guessLetter('e');
guessLetter('e');
guessLetter('e');
guessLetter('i');
guessLetter('o');
guessLetter('b');
guessLetter('d');
guessLetter('f');
guessLetter('x');
