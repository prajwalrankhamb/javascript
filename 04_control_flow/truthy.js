
const userEmail = []

if (userEmail) {
    console.log("User Email exist");   
} else {
    console.log("User Email Not exist");   
}

// Flasy values

// false, 0, -0, Bigint 0n, "", null, undefined, NaN

// Truthy values

// "0", "false", true, " ", [], {}, function() {}

// if (userEmail.length === 0) {
//     console.log("Array is empty");   
// }

let myObj = {}

// if (Object.keys(myObj).length === 0) {
//     console.log("object is empty");
// }


// Nullish coalscing operator (??): null undefined

// let val1 = 0 ?? 10
// let val1 = null ?? 10
// let val1 = undefined ?? 10
let val1 = undefined ?? null ?? 20

// console.log(val1);

//Terniry Operator

// condition ? true : false

const  price = 100

price < 80 ? console.log("price is less") : console.log("Price is greater");

