//Import chai. 
let chai = require('chai');

//Make sure that chai is aware of the fact that we're using the assertion type "shoul"
chai.should();

//Import the shapes class.
let shape = require('./../lib/shapes.js');
//let shape = require(path.join(__lib,'..', 'shapes'));


//Test runner for the Rectangle class
describe('Rectangle', () => {
	describe('#area and circumference', () => {
		let rectangle;

		beforeEach(() => {
			rectangle = new shape.Rectangle(10,20);
		});

		it('Test that object is instantiated', () => {
			rectangle.should.exist;
		});

		it('returns the correct value of the area', () => {
			//The test will fail if the area is not 200
			rectangle.area().should.equal(200);
		});

		it('returns the correct value of the circumference', () => {
			rectangle.circumference().should.equal(60);
		})
	});
});

describe('Triangle', () => {
	describe('#area and circumference', () => {
		let triangle;

		beforeEach(() => {
			triangle = new shape.RightAngledTriangle(10,20,30);
		});

		it('Test that object is instantiated', () => {
			triangle.should.exist;
		});

		it('returns the correct value of the area', () => {
			//The test will fail if the area is not 200
			triangle.area().should.equal(100);
		});

		it('returns the correct value of the circumference', () => {
			triangle.circumference().should.equal(60);
		})
	});
});

describe('Circle', () => {
	describe('#area and circumference', () => {
		let circle;

		beforeEach(() => {
			circle = new shape.Circle(5);
		});

		it('Test that object is instantiated', () => {
			circle.should.exist;
		});

		it('returns the correct value of the area', () => {
			//The test will fail if the area is not 200
			circle.area().should.equal(78.53981633974483);
		});

		it('returns the correct value of the circumference', () => {
			circle.circumference().should.equal(31.41592653589793);
		})
	});
});


describe('ComulativeAreas', () => {
	describe('#Comulative areas of a collection of sets', () => {
		let circ = new shape.Circle(5);
		let rect = new shape.Rectangle(10,20);
		let tri = new shape.RightAngledTriangle(10,20,30);
		let comAreas;

		beforeEach(() => {
			comAreas = new shape.ComulativeAreas(circ,rect,tri);
		});

		it('Test that object is instantiated', () => {
			comAreas.should.exist;
		});

		it('Returns the total area of objects passed in', () => {
			comAreas.totArea().should.equal(378.53981633974483);
		});
	});
});