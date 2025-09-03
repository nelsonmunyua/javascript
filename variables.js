// Variables -> a container in which we can store values for later retrival

/**
 * Rules for creating variables
 * 1.Should use the camelCase naming convection
 * 2. JS is case sensitive
 * 3.Don't start variables with numbers, always start with a lowercase letter
 * Do not use keywords reserved for JS
 */

// The var keyword has issues with scoping (global, local) and allows redeclaring

var firstName = "Joyce";
console.log(firstName);

var firstName = "John"
console.log(firstName);

// Const keyword allows us to create immutable (the values cannot/should not change) values
//it does not allow redeclaring or reassigning
const fullName = "John Doe";

//var fullName = "Jane Doe";

//console.log(fullName);

// let keyword which allows us to create mutable values
let age =18
console.log(age)

age = 19 //reassinging
console.log(age)

