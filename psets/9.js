/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...
  var notPos = sentence.indexOf("not");
  var badPos = sentence.indexOf("bad");
  if (notPos > -1 && badPos > notPos){
    var subSentence = sentence.substring(0, notPos);
    sentence = subSentence + "good!";
    return sentence;
  }
  else{
    return sentence;
  }
}

var string1 = "This JavaScript is not that bad!";
var string2 = "This JavaScript is bad!";

console.log("1st string: " + string1 + " || 1st string after function: " + notBad(string1
));
console.log("2nd string: " + string2 + " || 2nd string after function: " + notBad(string2
));
