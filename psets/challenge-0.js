/*
The Calculator

- Write a function called squareNumber that will take one argument (a number),
  square that number, and return the result.
  It should also log a string like "The result of squaring the number 3 is 9."

- Write a function called halfNumber that will take one argument (a number),
  divide it by 2, and return the result.
  It should also log a string like "Half of 5 is 2.5.".

- Write a function called percentOf that will take two numbers,
  figure out what percent the first number represents of the second number,
  and return the result. It should also log a string like "2 is 50% of 4."

- Write a function called areaOfCircle that will take one argument (the radius),
  calculate the area based on that, and return the result.
  It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  - Bonus: Round the result so there are only two digits after the decimal.

Write a function that will take one argument (a number) and perform the following operations,
  using the functions you wrote earlier:
  - Take half of the number and store the result.
  - Square the result of #1 and store that result.
  - Calculate the area of a circle with the result of #2 as the radius.
  - Calculate what percentage that area is of the squared result (#3).
*/

// write your solution here...
function squareNumber(number) {
  var result = number * number;
  console.log ("The result of squaring the number " + number + " is " + result + ".");
  return result;
}

function halfNumber(number) {
  var result = number / 2.0;
  console.log("Half of " + number + " is " + result + ".");
  return result;
}

function percentOf(number1, number2) {
  var result = ((number1 / number2) * 100.0).toFixed(2);
  console.log(number1 + " is " + result + "% of " + number2 + ".");
  return result;
 }

function areaOfCircle(radius) {
  var pi = Math.PI;
  var area = (pi * (radius * radius)).toFixed(2);
  console.log("The area for a circle with radius " + radius + " is " + area + ".");
  return area;
}

function theCalculator(number) {
  var halfNum = halfNumber(number);
  var square = squareNumber(halfNum);
  var area = areaOfCircle(square);
  var percentage = percentOf(area, square);
  return percentage;

}
console.log("The percentage that area is of the squared result is " + theCalculator(7) + "%.");
