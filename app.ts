console.log('It works!');

// enum
enum Color {
    Gray, // 1
    Green = 100, // 100
    Blue = 2, // otherwise it would be 101
}

let myColor: Color = Color.Blue;
console.log(myColor); // output is index 2

// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);

// function() :string - refers to the return value
let myName: string = 'Sasha';

function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

// void - function does not return anything
function sayHello(): void {
    console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 3));

// functions are types on their own
// function types
let myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// example function type
let myFuncMultiply: (val1: number, val2: number) => number;

// objects
let userData: { name: string; age: number } = {
    name: 'Max',
    age: 27,
};

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    },
};

// complex types
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
        return this.data;
    },
};

// union types
let myRealAge: number | string = 27;
// myRealAge = true // error

// check types
let finalValue = 'A string';
if (typeof finalValue == 'number') {
    console.log('Final value is a number');
}

// Typescript 2.0

// never
function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable types
let canBeNull = 12;
// canBeNull = null; // this gives error - cannot reasign to null
let canAlsoBeNull;
canAlsoBeNull = null;

// Section 4: Typescript and ES6 features

let variable = "Test"
console.log(variable)
variable = "Another val"
console.log(variable)

// let allows to reassign values, const cannot be changed -> allows you to crete immutable values

// Block scope
function reset() {
    const variable = null
    console.log(variable)
}

reset() // output null

console.log(variable) // output: Another val

// Arrow functions



// Section 5

// Using Classes
class Person {
    name: string
    private type: string
    protected age: number = 34

    constructor(name: string, public username: string) {
        this.name = name
    }

    printAge() {
        console.log(this.age)
        this.setType("Cool girl")
    }

    setType(type: string) {
        this.type = type
        console.log(this.type)
    }
}

const person = new Person("Sasha", "sasha.havia@mail.com")

console.log(person)
person.printAge()
// person.setType("Cool girl")

// Inheritance
// class Max extends Person {

// }

