/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

function verbing(word) {
  // write your solution here...
  var len = word.length;
  if (len > 2){
    if (word.substring(len - 3) != "ing"){
      word = word + "ing";
    }
  }
  return word;
}

var string = "redact";
console.log(verbing(string));
