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
// Section 4: Typescript and ES6 features
var variable = "Test";
console.log(variable);
variable = "Another val";
console.log(variable);
// let allows to reassign values, const cannot be changed -> allows you to crete immutable values
// Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset(); // output null
console.log(variable); // output: Another val
// Arrow functions
console.log("Arrow Functions");
var addNumbersRegular = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbersRegular(2, 3));
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(5, 5));
// addNumbers same as addNumbers2
var addNumbers2 = function (number1, number2) { return number1 + number2; };
console.log(addNumbers2(3, 4));
var greet = function () {
    console.log("Hello");
};
greet();
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countdown();
// REST & SPREAD
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3, 4));
// DESTRUCTURING
console.log("DESTRUCTURING");
var hobbies = ["Cooking", "Sports"];
console.log(hobbies[0], hobbies[1]);
var hobby1 = hobbies[0], hobby2 = hobbies[1];
console.log(hobby1, hobby2);
var userData1 = { username: "Sasha", age: 34 };
var myUsername = userData1.username;
var myAge = userData1.age;
console.log(myUsername, myAge);
var username = userData1.username, age = userData1.age;
console.log(username, age);
// Template Literals
console.log("TEMPLATE LITERALS");
var userName = "Sasha";
var greeting = "Hello, I'm " + userName;
console.log(greeting);
var greeting2 = "Hello, I'm " + userName + ".\nThis is cool!";
console.log(greeting2);
// Section 5
// Using Classes
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 34;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Cool girl");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Sasha", "sasha.havia@mail.com");
console.log(person);
person.printAge();
// person.setType("Cool girl")
// Inheritance
// class Max extends Person {
// }
