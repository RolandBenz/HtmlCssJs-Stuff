/* Replace everything with your code */

/* 
Both functions, init and anonymous below, 
emulate a class with private function(s) inside, called closure(s).
They both run on load of Template.html, function init() with init()
and the anonymous function automatically.
Check the console.log() output in the Web-Console of your Browser's Developer Tools (F12).
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function init() {
    var name = "Mozilla: run init function on load"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();

(()=>{
    var name = "Mozilla: run anonymous function on load"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
})();


/* Since 2015 and new ES6 standard, javascript has classes, too.
Class Rectangle has Prototype methods.  
Class Polygon has a Generator method, with yield instead of return.
Class Point has Static methods, which belong to the class, not the object.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }  
  const myrec = new Rectangle(10, 10);
  console.log(myrec.area); // 100


  class Polygon {
    constructor(...sides) {
      this.sides = sides;
    }
    // Method
    *getSides() {
      for (const side of this.sides) {
        yield side;
      }
    }
  }
  const pentagon = new Polygon(1,2,3,4,5);
  console.log([...pentagon.getSides()]); // Array(5) [ 1, 2, 3, 4, 5 ]


  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
  } 
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  p1.displayName; // undefined
  p1.distance;    // undefined
  p2.displayName; // undefined
  p2.distance;    // undefined 
  console.log(Point.displayName);      // "Point"
  console.log(Point.distance(p1, p2)); // 7.0710678118654755
  
  
  