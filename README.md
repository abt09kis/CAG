<a name="cag-geometry-lib"></a>

This javascript library was built in accordance with the the C.A.G Geometry Calculator
requirements.

<h2>How to install the library and basic usage.</h2>

**Installation:** 

In order to install the library use the command: ``` npm install git+https://github.com/abt09kis/CAG.git ```

**Basic usage:**

```js
let shapes = require('cag-geometry-lib');


let rectangle = new shapes.Rectangle(10,20);


console.log(rectangle.area()); // 200

console.log(rectangle.circumference()); // 60

```

<h2>How to run the tests in the repository.</h2>

In order to run the tests that are attached to the repository after having cloned it run the following command.

``` npm test ```


<h2>Documentation</h2>

**Disclaimer:** Basic geometrical knowledge is assumed.


 **Version**: 1.0.0  
**Author:** abt09kis <freiyan@gmail.com>  
**Copyright**: abt09kis

* [cag-geometry-lib](#module_cag-geometry-lib)
    * [Shape](#module_cag-geometry-lib..Shape)
        * [`new Shape()`](#new_module_cag-geometry-lib..Shape_new)
        * [`.circumference()`](#module_cag-geometry-lib..Shape+circumference) ⇒ <code>number</code>
        * [`.area()`](#module_cag-geometry-lib..Shape+area) ⇒ <code>number</code>
    * [RightAngledTriangle](#module_cag-geometry-lib..RightAngledTriangle)
        * [`new RightAngledTriangle(x, y, h)`](#new_cag-geometry-lib..RightAngledTriangle_new)
        * [`.circumference()`](#module_cag-geometry-lib..RightAngledTriangle+circumference) ⇒ <code>number</code>
        * [`.area()`](#module_cag-geometry-lib..RightAngledTriangle+area) ⇒ <code>number</code>
    * [Rectangle](#module_cag-geometry-lib..Rectangle)
        * [`new Rectangle(x, y)`](#new_module_cag-geometry-lib..Rectangle_new)
        * [`.circumference()`](#module_cag-geometry-lib..Rectangle+circumference) ⇒ <code>number</code>
        * [`.area()`](#module_cag-geometry-lib..Rectangle+area) ⇒ <code>number</code>
    * [Circle](#module_cag-geometry-lib..Circle)
        * [`new Circle(r)`](#new_module_cag-geometry-lib..Circle_new)
        * [`.circumference()`](#module_cag-geometry-lib..Circle+circumference) ⇒ <code>number</code>
        * [`.area()`](#module_cag-geometry-lib..Circle+area) ⇒ <code>number</code>
    * [ComulativeAreas](#module_cag-geometry-lib..ComulativeAreas)
        * [`new ComulativeAreas(...varArgs)`](#new_module_cag-geometry-lib..ShapesArea_new)
        * [`.area()`](#module_cag-geometry-lib..ComulativeAreas+area) ⇒ <code>number</code>

<a name="module_cag-geometry-lib..Shape"></a>

### cag-geometry-lib~Shape
**Purpuose**: Used as an abstract class to <code>[cag-geometry-lib](#module_cag-geometry-lib)</code>  
**this**: <code>{Shape}</code>  
**Access:** public  

* [~Shape](#module_cag-geometry-lib..Shape)
    * [`new Shape()`](#new_module_cag-geometry-lib..Shape_new)
    * [`.circumference()`](#module_cag-geometry-lib..Shape+circumference) ⇒ <code>number</code>
    * [`.area()`](#module_cag-geometry-lib..Shape+area) ⇒ <code>number</code>

<a name="new_module_cag-geometry-lib..Shape_new"></a>

#### `new Shape()`
The base object for all of the other objects of type(objects extending the base shape) shape to inherit from.

<a name="module_cag-geometry-lib..Shape+circumference"></a>

#### `shape.circumference()` ⇒ <code>number</code>
Will return zero for the default shape.

**Kind**: instance method of <code>[Shape](#cag-geometry-lib..Shape)</code>  
**Returns**: <code>number</code> - The numerical value of the circumference  
**this**: <code>{Shape}</code>  
**Access:** public  
<a name="module_cag-geometry-lib..Shape+area"></a>

#### `shape.area()` ⇒ <code>number</code>
Will return zero for the default shape.

**Kind**: instance method of <code>[Shape](#module_cag-geometry-lib..Shape)</code>  
**Returns**: <code>number</code> - The numerical value of the area.  
**this**: <code>{Shape}</code>  
**Access:** public  
<a name="module_cag-geometry-lib..RightAngledTriangle"></a>

### cag-geometry-lib~RightAngledTriangle
**Kind**: inner class of <code>[cag-geometry-lib](#module_cag-geometry-lib)</code>  
**this**: <code>{RightAngledTriangle}</code>  
**Access:** public  

* [~RightAngledTriangle](#module_cag-geometry-lib..RightAngledTriangle)
    * [`new RightAngledTriangle(a ,b, c)`](#new_module_cag-geometry-lib..RightAngledTriangle_new)
    * [`.circumference()`](#module_cag-geometry-lib..RightAngledTriangle+circumference) ⇒ <code>number</code>
    * [`.area()`](#module_cag-geometry-lib..RightAngledTriangle+area) ⇒ <code>number</code>

<a name="new_module_cag-geometry-lib..RightAngledTriangle_new"></a>

#### `new RightAngledTriangle(a, b ,c )`

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | The length of the base. |
| b | <code>number</code> | The height of the triangle. |
| c | <code>number</code> | The hypotenuse of the triangle. |

**Example**  
```js
var triangle = new RightAngledTriangle(10, 20, 30);
console.log(triangle.circumference()); // 60
console.log(triangle.area()); // 100
```
<a name="module_cag-geometry-lib..RightAngledTriangle+circumference"></a>

#### `rightAngledTriangle.circumference()` ⇒ <code>number</code>
In case that you don't know the basic formula of the circumference of a Right Angled Triangle it's circumference  is the sum of the three
side lengths.
<pre>Circumference = a + b + c</pre>

**Kind**: instance method of <code>[RightAngledTriangle](#module_cag-geometry-lib..RightAngledTriangle)</code>  
**Returns**: <code>number</code> - The numerical value of the circumference. 
**this**: <code>{RightAngledTriangle}</code>  
**Access:** public  
<a name="module_cag-geometry-lib..RightAngledTriangle+area"></a>

#### `rightAngledTriangle.area()` ⇒ <code>number</code>
The area is given by the area formula for an arbitrary triangle.
<pre>Area = (1 / 2) * Base * Height</pre>
In case that the triangle is right angled, as it is in this case, the side (a) is the same as the height and (b) is the same as the base line.
<pre>Area = (1 / 2) * a * b</pre>

**Kind**: instance method of <code>[RightAngledTriangle](#module_cag-geometry-lib..RightAngledTriangle)</code>  
**Returns**: <code>number</code> - The numerical value of the area.  
**this**: <code>{RightAngledTriangle}</code>  
**Access:** public  
<a name="module_cag-geometry-lib..Rectangle"></a>

### cag-geometry-lib~Rectangle
**Kind**: inner class of <code>[cag-geometry-lib](#module_cag-geometry-lib)</code>  
**this**: <code>{Rectangle}</code>  
**Access:** public  

* [~Rectangle](#module_cag-geometry-lib..Rectangle)
    * [`new Rectangle(x, y)`](#new_module_cag-geometry-lib..Rectangle_new)
    * [`.circumference()`](#module_cag-geometry-lib..Rectangle+circumference) ⇒ <code>number</code>
    * [`.area()`](#module_cag-geometry-lib..Rectangle+area) ⇒ <code>number</code>

<a name="new_module_cag-geometry-lib..Rectangle_new"></a>

#### `new Rectangle(x, y)`

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> | The base of the rectangle. |
| b | <code>number</code> | The height of the rectangle. |

**Example**  
```js
var rectangle = new Rectangle(10,20);
console.log(rectangle.circumference()); // 60
console.log(rectangle.area()); // 200
```
<a name="module_cag-geometry-lib..Rectangle+circumference"></a>

#### `rectangle.circumference()` ⇒ <code>number</code>
The circumference of a rectangle is the sum of the two side
lengths then doubled.
<pre>Circumference = (a + b) * 2</pre>

**Kind**: instance method of <code>[Rectangle](#module_cag-geometry-lib..Rectangle)</code>  
**Returns**: <code>number</code> - The circumference of the rectangle  
**this**: <code>{Rectangle}</code>  
**Access:** public  
<a name="module_cag-geometry-lib..Rectangle+area"></a>

#### `rectangle.area()` ⇒ <code>number</code>
To find the area of a rectangle, multiply the length by the width.
<pre>Area = x * y</pre>

**Kind**: instance method of <code>[Rectangle](#module_cag-geometry-lib..Rectangle)</code>  
**Returns**: <code>number</code> - The area of the rectangle.  
**this**: <code>{Rectangle}</code>  
**Access:** public  
<a name="module_cag-geometry-lib..Circle"></a>

### cag-geometry-lib~Circle
**Kind**: inner class of <code>[cag-geometry-lib](#module_cag-geometry-lib)</code>  
**this**: <code>{Circle}</code>  
**Access:** public  

* [~Circle](#module_cag-geometry-lib..Circle)
    * [`new Circle(r)`](#new_module_cag-geometry-lib..Circle_new)
    * [`.circumference()`](#module_cag-geometry-lib..Circle+circumference) ⇒ <code>number</code>
    * [`.area()`](#module_cag-geometry-lib..Circle+area) ⇒ <code>number</code>

<a name="new_module_cag-geometry-lib..Circle_new"></a>

#### `new Circle(r)`

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | The radius of the circle |

**Example**  
```js
var circle = new Circle(5);
console.log(circle.circumference()); // 31.41592653589793
console.log(circle.area()); // 78.53981633974483
```
<a name="module_cag-geometry-lib..Circle+circumference"></a>

#### `circle.circumference()` ⇒ <code>number</code>
<pre>Circumference = 2 * PI * r</pre>

**Kind**: instance method of <code>[Circle](#module_cag-geometry-lib..Circle)</code>  
**Returns**: <code>number</code> - The circumference unit distance measurement.  
**this**: <code>{Circle}</code>  
**Access:** public  
<a name="module_cag-geometry-lib..Circle+area"></a>

#### `circle.area()` ⇒ <code>number</code>
To find the area of a circle.
<pre>Area = PI * (r^2)</pre>

**Kind**: instance method of <code>[Circle](#module_cag-geometry-lib..Circle)</code>  
**Returns**: <code>number</code> - The area of the circle.  
**this**: <code>{Circle}</code>  
**Access:** public  
<a name="module_cag-geometry-lib..ComulativeAreas"></a>

### cag-geometry-lib~ComulativeAreas
**Kind**: inner class of <code>[cag-geometry-lib](#module_cag-geometry-lib)</code>  
**this**: <code>{ComulativeAreas}</code>  
**Access:** public  

* [~ComulativeAreas](#module_cag-geometry-lib..ComulativeAreas)
    * [`new ComulativeAreas(...varArgs)`](#new_module_cag-geometry-lib..ComulativeAreas_new)
    * [`.area()`](#module_cag-geometry-lib..ComulativeAreas+area) ⇒ <code>number</code>

<a name="new_module_cag-geometry-lib..ComulativeAreas_new"></a>

#### `new ComulativeAreas(...shapes)`
Total area of multiple shapes (not only triangles and rectangles but also
other types of shapes that implements an  #area method). Makes use of the concept of rest variable in order to facilitate an input of multiple objects of type {Shape}


| Param | Type | Description |
| --- | --- | --- |
| ...varArgs | <code>Object</code> | The shapes of which one desires the total area. |

**Example**  
```js
var comArea = new ComulativeAreas(triangle, rectangle, circle);
console.log(comArea.totArea()); // 378.53981633974485
```
<a name="module_cag-geometry-lib..ComulativeAreas+area"></a>

#### `comArea.totArea()` ⇒ <code>number</code>
To find the area of all the shapes supplied to the constructor.

**Kind**: instance method of <code>[ShapesArea](#module_cag-geometry-lib..ComulativeAreas)</code>  
**Returns**: <code>number</code> - The numerical value of the combined area of the shapes sent in as arguments.  
**this**: <code>{ComulativeAreas}</code>  
**Access:** public  