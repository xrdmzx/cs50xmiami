// Make a copy of an apple
var Apple function(color, flavor, worms){
  this.color = color; //"red";
  this.flavor = falvor; //"delicous";
  this.worms = worms; //false;
}
var apples []:
var i;

for (i=0; i<2; i++){
  apple[i] = new Apple('red','delicious', 'false');
}

_______________________________________

// how many green apples in a bag of 20 apples
var bagOfApples = [...];

var  greenApples = function (bagOfApples) {
  var greenAppleCount = 0;
  for (var i = 0; i < 20; i++) {
    if (hasOwnProperty(bagOfApples[i].color) == true {
      if (bagOfApples[i].color == "green") {
        greenAppleCount++;
      }
    }
  }
  return greenAppleCount;
};

________________________________________
// Extending the propotype class to checkfor color of apple

var Apple function(color, flavor, worms){
  this.color = "red";
  this.flavor = "delicous";
  this.worms = false;
}

// Class.prototype.newMethodWithinAClass
Apple.prototype.greenColorCheck = function(color) {
  return (this.color == "green");
}

// now refactor previous logic to check for green
var bagOfApples = [...];

var  greenApples = function (bagOfApples) {
  var greenAppleCount = 0;
  for (var i = 0; i < 20; i++) {
    if (bagOfApples[i].greenColorCheck) {
      greenAppleCount++;
    }
  }
  return greenAppleCount;
};
______________________________________________
// how to use call and apply

Apple.call(null, '', '', '')

Apple.apply(null, ['', '', ''])

______________________________________________

// make worms default to 0 if a parameter isnt entered

Apple.prototype.worms = 0;

// or when making the class
var Apple function(color, flavor, worms){
  this.color = color;
  this.flavor = falvor;
  this.worms = worms || 0;
}
