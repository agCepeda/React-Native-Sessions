class Foo {
	constructor() {
		console.log("Foo::Constructor")
	}
}


var arrNumbers = [5, 3, 4, 2, 1, 3, 0];

arrNumbers.forEach((o, i) => {console.log("Element[" + i + "]: " + o)})

var fooInstance = new Foo()