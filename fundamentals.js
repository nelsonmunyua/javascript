/**
 * There are two categories of data types
 * -->Primitive -This are a set of immutable values that are stored directly, (value type)
 * -->Objects - Consists of mutable values that are stored by reference (array,functions,objects)
 */

// Hoisting 
//    -->  Js moves declaration to the top of their scope during compilation.

// Function declaration
greet();
function greet() {
    console.log("Hi");
}

// var -> For var only the declaration is hoisted and not the initialization.

console.log(x)
var x = 10;

// const/let -> They are hoisted but stored in(TDZ) temporal dead zone, until they are initializede /declaration line is executed,

console.log(y);
const y = 20;

// A function declaration is a function declared with a function key word at the top level--> 
// can be called before it is declared.

console.log(sum(3.4))
function sum(a,b) {
    return a + b;
}

// A function expression is a function that is passed to a variable it can have a function name key word or not
// It cannot be hoisted since it will require to be assigned first.
// can be anonymous Used in callback functions

const reading = function () {
    return "Nelson is reading";
}
console.log(reading());

// Var is a functional scope since it ignores the block scope it is safe to say that it declaration is
// hoisted on the function scope

function test() {
    // var x;
    if(true) {
        x = 10;  
    }
    console.log(x);
}
test();

// let && const are block scoped --> this means that they cannot be accessed outside the if code block,

function test1() {
    if(true) {
        let y = 20;
        const z = 40;
    }
    console.log(y); // This should return a reference error 
    console.log(z)
}
test1();