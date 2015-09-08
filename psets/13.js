/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
function calcCircumfrence(radius){

  var pi = 3.141592;
  var c = 2 *pi * radius;
  console.log("The circumference is " + c + ".");
}

function calcArea(radius) {
  var pi = 3.141592;
  var a = pi * (radius * radius);
  console.log("The a is " + a + ".");
}

calcCircumfrence(10);
calcArea(10);
