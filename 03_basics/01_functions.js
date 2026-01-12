function printMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("W");
    console.log("A");
    console.log("L");
}

// printMyName()


function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

// addTwoNumbers(2,"3")


function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2
}


// let result = addTwoNumbers(2,5)
// console.log(result)

// function loginUserMessage(username = "karan") {
//     if(!username){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("prajwal"));


//Rest operator

function calculateUserCart(...num1){
    return num1
}

// console.log(calculateUserCart(200,300,400,5000))


//Rest operator with object

const user = {
    username: "prajwal",
    price: 199
}

function getUserData(anyobject){
    return `username is ${anyobject.username} and price is ${anyobject.price}`
}

// console.log(getUserData(user));

// console.log(getUserData({
//     username: "Rohan",
//     price: 399
// }));


//Rest operator with array

const myArray = [200, 300, 400, 500]

function getArrayElements(getvalue){
    // console.log(getvalue[0]);
    
    return getvalue[1]
}

// console.log(getArrayElements(myArray))
console.log(getArrayElements([101,201,301,401]))