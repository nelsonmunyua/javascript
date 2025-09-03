/**
 * Data types -> kind of values a program can store (they allow us to represent real world data in a programming language)
 * 
 * 1.Primitive -> string, boolean, number, symbols, null, undefined
 * 
 * 2.Non-primitive -> objects (classes create objects), array
 */

//1. Strings -> characters, texts, paragraphs
const firstName = "Victor" // double quotes
const lastName = 'Koech' //single quote
//const fullName = `Charles Babagge` // backtics

// string concatenation -> combining of strings using the + operator
console.log(firstName + " " + lastName)

//string interpolation -> injecting of values into stringsv (we must always use backticks)
//${} allow us to add complex expressions into a string 
console.log(`MBE ${firstName} ${lastName}, age is ${2025 - 2002}`)

// 2. numbers
console.log(typeof -14)
console.log(typeof 74)
console.log(typeof 8.3)

//console.log(2 (5/6))

// 3 .boolean-> true/false
console.log(Boolean( 'gh'))
console.log(Boolean( ``))
console.log(Boolean( 0 ))
console.log(Boolean( -23 ))
console.log(Boolean( null))
console.log(Boolean( undefined ))

// 4. objects -> collection of related data represented in key/value pairs separated by commas
const student = {
    name: 'John Doe',
    gender: 'Female',
    age: '20',
    single: 'true',
    class: {
        cohort: 'SDF-FT15',
        room: '103', 
    }
}

console.log(typeof student)
// accessing values in objects i.e lookup

// 1. dot notation
console.log(student.name);
console.log(student.class.room)

// 2. square bracket
console.log(student['class']['cohort'])

const car = {
    color: 'Black',
    brand: 'Mercedes',
    speed: 260,
    isOwned: true,
    owner: {
        name: 'Emmanuel',
        address: {
            county: 'Nairobi',
            phone: '+254748442693',
            postalAddress: 1000
        }
    }
}


// getting (car->owner->addres.county) with .(dot notation)
console.log(car.owner.address.county)

//// getting (car->owner->addres.county) with [] brackets

console.log(car['owner']['address']['county'])

// getting (car -> speed)
console.log()

// 5. arrays -> list of values (can be of any datatype) -> 

const cars = [
    {
        make: "Toyota", // string
        model: "Camry", // string
        year: 2022, // number
        isElectric: false, // boolean
        features: ["Bluetooth", "Backup Camera", "Cruise Control"], // array
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        isElectric: true,
        features: ["Autopilot", "Touchscreen", "Over-the-air updates"],
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2020,
        isElectric: false,
        features: ["V8 Engine", "Rear-Wheel Drive", "Convertible"],
    }
];

console.log(typeof cars)

console.log(cars[1].features[1])
console.log(cars[1]['features'][1][0])
console.log('object'[1])

// 5 null -> to intentionally indicte there are no values

const laptop = {
    serialNumber: null
}

const myvariable = 'Must provid a value'

let myAge;

console.log(typeof myAge)

myAge = 25;
console.log(myAge)




