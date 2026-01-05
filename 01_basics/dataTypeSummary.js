// primitive 
// 7 types => String, Number, Boolean, Null, Undefined, Symbol, BigInt

const str = "prajwal"
const value = 33
const anotherValue = 33.4
const isLoggedIn = true
const isTemp = null
let email;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3875834566646436n


//Reference (non-primitive)
// array, object, function

const students = ["prajwal", "vaibhav", "soham"]

let myObj = {
    name: "prajwal",
    age: 20,
    city: "washim",
}

const myFunction = function() {
    console.log("hello world");   
}


// console.log(typeof id);



// type of
// String => string
// Number => number
// Boolean => boolean
// Null => object
// Undefined => undefined
// Symbol => symbol
// Bigint => bigint
// array => object
// Object => object
// function => function


// **********************************************
// stack(primitive) , Heap(non-primitive)


// ***** stack *****
let myYoutubeName = "hiteshchoudhary"

let anotherChannel = myYoutubeName

anotherChannel = "chaiaurcode"

// console.log(myYoutubeName);
// console.log(anotherChannel);


// ***** Heap *****
let userOne = {
    name: "prajwal",
    email: "prajwal@gmail.com"
}

let userTwo = userOne

userTwo.email = "google.com"

console.log(userOne.email);
console.log(userTwo.email);
