/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
  var firstChar = s.substring(0,1);
  var newStr = "";
  for (var i = 0, len = s.length; i < len; i++){
    if (firstChar === s[i] && i != 0){
       newStr = newStr + '*';
    }
    else{
      newStr = newStr + s[i];
    }
  }
  return newStr;
}
var string = "peter piper picked a peck of pickled peppers";
console.log(fixStart(string));
