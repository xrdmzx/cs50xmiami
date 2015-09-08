/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
function greaterNum(x, y) {
  if (x > y) {
    console.log("The greater number of " + x + " and " + y + " is " + x + ".");
  }
  else if (x < y) {
    console.log("The greater number of " + x + " and " + y + " is " + y + ".");
  }
  else {
    console.log(x + " and " + y + " are even.");
  }
}
greaterNum(1, 2);
greaterNum(2, 1);
