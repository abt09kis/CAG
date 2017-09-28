
class Shape {
	/*
	 *Create a shape object to be the base of all shapes.
	 */

	area(){
		return 0;
	}

	circumference(){
		return 0;
	}
}

class RightAngledTriangle extends Shape {

	/**
	 * Creates an object of the type RightAngledTriangle(Subclass to shape).
	 *
	 * @param {number} a This variable represents the base of the triangle
	 * @param {number} b This variable represents the width of the triangle
	 * @param {number} c This variable represents the hypotheneuse of the triangle
	 *
	 */
	 constructor(a, b, c){
	 	super();
	 	this._a = a;
	 	this._b = b;
	 	this._c = c;

	 }

	 /**
	  * @public
	  * @function area
	  * @this {RightAngledTriangle}
	  * @return {number} The area of the triangle.
	  *
	  */
	 area(){

	 	return this._a * this._b * (1/2);

	 }

	 /**
	  *
	  * @public
	  * @function cicrumference
	  * @this {RightAngöedTriangle}
	  * @return {number} The circumference of the triangle.
	  */ 
	  circumference(){

	  	return this._a + this._b + this._c;

	  }
}

class Rectangle extends Shape {

	/**
	 * Creates an object of the type Rectangle(Subclass to Shape).
	 *
	 * @param {number} a This variable represents the height of the rectangle
	 * @param {number} b This variable represents the width of the rectangle
	 *
	 */
	 constructor(a,b){
	 	super();
	 	this._a = a;
	 	this._b = b;

	 }

	 /**
	  * @public
	  * @function area
	  * @this {Rectangle} 
	  * @return {number} The area of the rectangle
	  *
	  *
	  */
	  area() {

	  	return this._a * this._b;
	  }

	  /**
	   * @public
	   * @function circumference
	   * @this {Rectangle}
	   * @return {number} The circumference of the rectangle
	   *
	   */
	  circumference(){

	  	return (this._a * 2) + (this._b * 2);

	  }

}

class Circle extends Shape {

	/**
	 * Creates an object of the type Circle(Subclass to Shape).
	 *
	 * @param {number} r This variable represents the radius of the circle
	 *
	 */	

	 constructor(r){
	 	super();
	 	this._r = r;

	 }

	 /**
	 * @public
	 * @function area
	 * @this {Circle} 
	 * @return {number} the area of the circle
	 *
	 */
	 area(){ 

	 	return Math.pow(this._r,2) * Math.PI;

	 }

	 /**
	  * @public
	  * @function circumference
	  * @this {Circle}
	  * @return {number} the circumference of the circle
	  *
	  */
	  circumference(){
	  	return Math.PI * this._r * 2; 
	  }
}

class ComulativeAreas{

	constructor(...shapes){

		this._shapes = Array.from(arguments);
	}

	/**
	 *
	 * @public
	 * @function areas
	 * @this(ComulativeAreas)
	 * @return {number} 
	 */
	 totArea(){
	 	return this._shapes.reduce( function(sum, shape){
	 		return sum + shape.area();
	 	},0);
	 }
}

module.exports = {
	Shape: Shape,
  RightAngledTriangle: RightAngledTriangle,
  Rectangle: Rectangle,
  Circle: Circle,
  ComulativeAreas: ComulativeAreas
  };