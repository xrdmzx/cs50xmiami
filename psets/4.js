/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

var celsiusIn = 100;
var fahrenheitOut = ((celsiusIn * 9) / 5) + 32;
console.log (celsiusIn + "°C is " + fahrenheitOut + "°F." )

var fahrenheitIn = 100;
var celsiusOut = ((fahrenheitIn - 32) * 5) / 9;
console.log (fahrenheitIn + "°F is " + celsiusOut + "°C." )
