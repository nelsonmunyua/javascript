function pow(x, y) {
  let total = 1;
  for (let i = 0; i < y; i++) {
    total *= x;
  }
  return total;
}
console.log(pow(3,3))

// // function expression
// const pizza = function pow(x,y) {
//     let total = 1;
//     for(let i = 0; i<y; i++) {
//         total *= x;
//     }
//     return total;
// }
// console.log(pizza(3,3))

function pow(x, y) {
  let total = 1;
  for (let i = 0; i < y; i++) {
    total *= x;
  }
  return total;
}
console.log(pow(3,3))
// Adding a function to an array
const coolFunctions = [pow];
console.log(coolFunctions[0](3,2));

// Adding a function to an object
const coolObject = {
    power:pow
}
console.log(coolObject.power(3,5))

//pass a function as a parameter

function callBackExample(callback) {
    return callback(3,6);
}
console.log(callBackExample(pow))

//return a function
function returnAfunction(){
    return pow;
}
console.log(returnAfunction()(2,3))