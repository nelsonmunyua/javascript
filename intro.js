// syntax -> rules associated with a programming language

// Execution order -> Left to right then top to bottom

// ! Comments do not get executed in any language
// SIngle line comment

/**
 * multiple
 * Lines
 * like
 * so
 */

/**
 * Expression -> combination of numbers and variables and does not contain any equal signs
 * ->any valid unit of code that resolves to a value
 * ->combinaiton of data using symbols (+, -, *, **) (PEMDAS)
 * 
 * Constant -> cannot change
 * Assignment
 * Lookup
 * 
 * Evaluation -> An expression is a combination of values, variables, operators, and function calls that the programming language interprets and computes to produce a single result
 */

console.log(1 + 1) //2
console.log(2 + (3 -5)) //()

//2. Assignment expression -> assigning a value to a variable (container)
// we using the = operator
// on the left, we have the variable and on the rigth we have the value
// A variable is just a container to store values for later retrival

/**
 * Rules for creating variables
 * 1.Should use the camelCase naming convection
 * 2. JS is case sensitive
 * 3.Don't start variables with numbers, always start with a lowercase letter
 * Do not use keywords reserved for JS
 */

firstName = "Elly"
lastName = "Owuor"

//3. Lookup expression

console.log(firstName)
console.log(lastName)

//assignmet
const x = "2";

//lookup
if (x === 2) {
    console.log("two")
}else if (x === 3) {
    console.log("three")
}else{
    console.log(3)
}

// constant
// 3
