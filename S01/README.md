# S01 - Introduction to ES6

## Playing with sintax

#### The "let" keyword

The ES6 let keyword is used to declare a block scoped variable, optionally initializing it to a value

The JavaScript variables that are declared using the var keyword are called as function scoped variables. The function scoped variables are accessible globally to the script, that is, throughout the script, if declared outside a function. Similarly, if the function scoped variables are declared inside a function, then they become accessible throughout the function, but not outside the function.

Example:
```javascript

var a = 12; //accessible globally
function myFunction()
{
    console.log(a);
    var b = 13; //accessible throughout function
    if(true)
    {
        var c = 14; //accessible throughout function
        console.log(b);
    }
    console.log(c);
}
myFunction();

```

Output:
```
12
13
14
```


Variables that are declared using the let keyword are called as block scoped variables. The block scoped variables behave the same way as the function scoped variables when declared outside a function, that is, they are accessible globally. But when the block scoped variables are declared inside a block, then they are accessible inside the block that they are defined in (and also any sub-blocks) but not outside the block.

Example:
```javascript
let a = 12; //accessible globally
function myFunction()
{
    console.log(a);
    let b = 13; //accessible throughout function
    if(true)
    {
        let c = 14; //accessible throughout the "if" statement
        console.log(b);
    }
    console.log(c);
}
myFunction();
```

Output:
```
12
13
Reference Error Exception
```

#### The "const" keyword

The ES6 const keyword is used to declare the read-only variables, that is, the variables whose value cannot be reassigned.
Before ES6, the programmers usually used to prefix the variables that were supposed to be constant.

Therefore, the const keyword was introduced to provide a native protection to the constant variables.

Example:

```javascript
const pi = 3.141;
var r = 2;
console.log(pi * r * r); //Output "12.564"
pi = 12; //throws read-only exception
```

#### Default parameters

```javascript
function myFunction(x, y, z)
{
    x = x === undefined ? 1 : x;
    y = y === undefined ? 2 : y;
    z = z === undefined ? 3 : z;
    console.log(x, y, z); //Output "6 7 3"
}
myFunction(6, 7);
```

```javascript
function myFunction(x = 1, y = 2, z = 3)
{
    console.log(x, y, z); // Output "6 7 3"
}
myFunction(6,7);
```

```javascript
function myFunction(x = 1, y = 2, z = 3)
{
    console.log(x, y, z); // Output "1 7 9"
}
myFunction(undefined,7,9);
```

```typescript
function myFunction(x = 1, y = 2, z = 3 + 5)
{
    console.log(x, y, z); // Output "6 7 8"
}
myFunction(6,7);
```

#### Spread operator

```javascript
function myFunction(a, b) {
    console.log(a + b);
}

var data = [2, 5];

myFunction(...data);
```

```javascript
function myFunction(a, b) {

}

myFunction.apply(null, data)
```

```javascript
function myFunction(a, b, c, ...d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

myFunction(1, 2, 3, 4, 5, 6, 7)
```

```
1
2
3
[4, 5, 6, 7]
```
#### Destructuring assigment

```javascript
let { prop1, prop2 } = { prop1: 10, prop2: 20 }
```

```javascript
let x, y;
{ prop1, prop2 } = { prop1:10, prop2:20 }

```

```javascript
let { prop1:x, prop2:y } = { prop1:10, prop2:20 }
```

#### The arrow functions

## ES6 library
## Asynchronous programming
## Object Oriented Javascript
## Modular programming
