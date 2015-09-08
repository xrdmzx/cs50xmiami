/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...
  var firstTwoA = a.substring(0,2);
  var firstTwoB = b.substring(0,2);
  var lastOfA = a.substring(2);
  var lastofB = b.substring(2);
  return a = firstTwoB + lastOfA;
  return b = firstTwoA + lastofB;

}
var string1 = "java"
var string2 = "script"
console.log("string a =" + string1 + "\n" + "string b = " + string2 + "\n");

console.log("after mixup string a =" + mixUp(string1, string2) + "\n" + "after mixup string b = " + mixUp(string2, string1));
