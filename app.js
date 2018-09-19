console.log('It works!');
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor); // output is index 2
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// function() :string - refers to the return value
var myName = 'Sasha';
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void - function does not return anything
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
// functions are types on their own
// function types
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// example function type
var myFuncMultiply;
// objects
var userData = {
    name: 'Max',
    age: 27,
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    },
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    },
};
// union types
var myRealAge = 27;
// myRealAge = true // error
// check types
var finalValue = 'A string';
if (typeof finalValue == 'number') {
    console.log('Final value is a number');
}
// Typescript 2.0
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable types
var canBeNull = 12;
// canBeNull = null; // this gives error - cannot reasign to null
var canAlsoBeNull;
canAlsoBeNull = null;
