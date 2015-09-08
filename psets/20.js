/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...
var array = ["red", "green", "blue", "black"];
var len = array.length;
for (var i = 0; i < len ; i++) {
  var number = i + 1;
  var choice = array[i];
  console.log("My #" + number + " choice is " + choice + ".");
}
