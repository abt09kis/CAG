let shape = require('./lib/shapes.js');

let rect = new shape.Rectangle(10,20);

let tri = new shape.RightAngledTriangle(10,20,30);

let circ = new shape.Circle(5);

let comulative = new shape.ComulativeAreas(rect,tri,circ);


console.log("Omkrets: " + rect.circumference() + "\n");

console.log("Area: " + rect.area() + "\n");

console.log("sammanlagd area :  " +  comulative.totArea()); 