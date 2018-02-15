"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DoSomething = DoSomething;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LIB_EXAMPLE = exports.LIB_EXAMPLE = 10;

function DoSomething() {
	console.log(arguments);
}

var Example = exports.Example = function Example(arg1) {
	_classCallCheck(this, Example);

	this.arg1 = arg1;
};