/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize(number, noun) {

  if (number == 1) {
    console.log (number + " " + noun + ".");
  }
  else if (noun == "goose" &&  number == 0 ) {
    console.log (number + " geese.");
  }
  else if (noun == "goose" &&  number > 1 ) {
    console.log (number + " geese.");
  }
  else if (noun == "sheep") {
    console.log (number + " " + noun + ".");
  }
  else if (number == 0 || number > 1 && noun != "goose" && noun != "sheep") {
    console.log (number + " " + noun + "s.");
  }
  else {
    console.log ("Invalid entry.");
  }
}

pluralize(1, "cat");
pluralize(3, "cat");
pluralize(1, "goose");
pluralize(0, "goose");
pluralize(1, "sheep");
pluralize(30, "sheep");
