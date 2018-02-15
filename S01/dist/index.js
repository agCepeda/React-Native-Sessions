"use strict";

var _lib = require("./lib");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                          class Foo {
                                                                                                                                                          	constructor() {
                                                                                                                                                          		console.log("Foo::Constructor")
                                                                                                                                                          	}
                                                                                                                                                          }
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          var arrNumbers = [5, 3, 4, 2, 1, 3, 0];
                                                                                                                                                          
                                                                                                                                                          arrNumbers.forEach((o, i) => {console.log("Element[" + i + "]: " + o)})
                                                                                                                                                          
                                                                                                                                                          var fooInstance = new Foo()
                                                                                                                                                          
                                                                                                                                                          */
/*
let arrayNumbers = [5, 3, 4, 1, 2, 4, 6, 7]

let [a1, a2, ...aN] = arrayNumbers

console.log(a1)
console.log(a2)
console.log(aN)
*/

/*
let object1 = [ 100, 200 ]
let object2 = { object1, prop1: 10, prop2: 20 }

let { prop1: x, object1: y } = object2

console.log(object2)
console.log(x)
console.log(y)
*/

var Foo = function Foo() {
	var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	_classCallCheck(this, Foo);

	this.name = name;
};

var arrNumbers = [5, 3, 4, 2, 1, 3, 0];
var arrObjects = [];
var obj = new _lib.Example(arrNumbers);

(0, _lib.DoSomething)();

arrNumbers.forEach(function (o, i) {
	arrObjects.push(new Foo("Element " + o));
});

console.log(arrObjects);
console.log(obj);