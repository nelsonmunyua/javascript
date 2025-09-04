// Boolean expressions -> anythings that evaluate to true or flase

// Number operators

console.log(10 < 5)
console.log(3 = 3)
consosle.log(67 >= 676)

//comparison

// loose equality operator == checks if the values are equal
console.log(7 == "7")
// loose inequality !=
console.loog(7 != "7")

// strict equality === (checks if the value and datatype matches)

console.log(7 == "7")

// Strict inequality !==
console.log(7 !== "7")

// ! bang operator - does the opposite
console.log(!true) //false
console.log(!false) //true
console.log(!"") //true
console.log(!Boolean("")) //true

// double bang !!
console.log(!!"") //false
console.log(!!"false") //true

// and && -> ampasnand ->we use to combine multiple expression (all expressions must be trues)

const age = 27
const location = "Nairobi"
const hasADegree = true
console.log(age >= 18 && location == "Nairobi") //true

// or || double pipes
console.log(age >= 18 || location === "Nairobi") //true

console.log(age >= 18 && (location === "Nairobi" || hasADegree))

//Do the evaluations today at the evvening





