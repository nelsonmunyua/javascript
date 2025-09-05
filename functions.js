/**
 * Functions -> reusability, blocks of code organized together
 * and can be called at any time
 *
 * parameters -> these are variables that are used inside the function paranthesis
 * arguments -> arguments are the values we pass to functions when we call/invoke them
 */

// function declaration
function calculateTax(parameters) {
	console.log('Calculate tax');
}

// executing a function via calling/invoking
// we have to use the function name and provide the paranthesis which
// may optionally have arguments
calculateTax();

function greet(name, time) {
	// return;
	return `Good ${time}, ${name}`;
	console.log('Am i working?');
}

// greet("assistant tm");
console.log(greet('Elly', 'afternoon'));

/**
 * return keyword -> allows functions to give(return values)
 * we can only have one return statement in a scope or block of code
 * stops execution of a function
 */
function sum(x, y) {
	if (typeof x === 'number' && typeof y === 'number') {
		// we are checking for truthy
		return x + y;
	} else {
		return 'x and y must be a number';
	}
}

/**
 * Expression -> evaluation
 * -> constant
 * -> assignment
 * -> lookup
 */

console.log(sum(3));
const output = sum(4, 3);
console.log(output);
const mySum = 83 + 7;
console.log(mySum);
/*
 In JavaScript, the same function can be written in many different ways: 
 - Function declaration (classic)
 - Function expression (stored in a variable)
 - Arrow function (ES6 shorthand)
 - IIFE (immediately invoked function)
 - As a method in objects or classes
 - Higher-order functions (functions that return functions)
 - Using built-ins like reduce()

This shows how flexible JavaScript is — the style you choose depends on context,
readability, and personal preference.
*/

//function declaration
function add(x, y) {
  return x + y;
}
console.log(add(3, 4));



//function expression
const add = function(x, y) {
  return x + y;
};
console.log(add(3, 4));


//Arrow function(ES6)
const add = (x, y) => {
  return x + y;
};
console.log(add(3, 4));


//Arrow shorthand
const add = (x, y) => {
  return x + y;
};
console.log(add(3, 4));


//Anonymous Function Immediately Invoked (IIFE)
console.log((function(x, y) {
  return x + y;
})(3, 4));


//Arrow IIFE
console.log(((x, y) => x + y)(3, 4));


//Using function constructor
const add = new Function("x", "y", "return x + y;");
console.log(add(3, 4));


//Method inside an object
const calculator = {
  add: function(x, y) {
    return x + y;
  }
};
console.log(calculator.add(3, 4));



//Method inside an object with shorthand (ES6):
const calculatar = {
  add(x, y) {
    return x + y;
  }
};
console.log(calculatar.add(3, 4));


//class method
class Calculator {
  add(x, y) {
    return x + y;
  }
}
const calc = new Calculator();
console.log(calc.add(3, 4));


//Higher order function
function makeAdder() {
  return (x, y) => x + y;
}
const add = makeAdder();
console.log(add(3, 4));


//reduce
const add = (...args) => args.reduce((a, b) => a + b, 0);
console.log(add(3, 4));
//inline reduce
[3, 4].reduce((a, b) => a + b); // 7

