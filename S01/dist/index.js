"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function Foo() {
	_classCallCheck(this, Foo);

	console.log("Foo::Constructor");
};

var arrNumbers = [5, 3, 4, 2, 1, 3, 0];

arrNumbers.forEach(function (o, i) {
	console.log("Element[" + i + "]: " + o);
});

var fooInstance = new Foo();