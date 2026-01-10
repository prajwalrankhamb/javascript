//singleton
//Object.create

// object literals

const mySym = Symbol("key1")

const myObj = {
    name : "prajwal",
    "full name" : "Prajwal Rankhamb",
    [mySym] : "mykey1",
    email : "prajwal@google.com",
    location : "washim",
    age : 20,
    isLoggedIn : false,
    loggedInDays : ["monday","tuesday"]
}

// console.log(myObj.name);
// console.log(myObj["name"]);
// console.log(myObj["full name"]);
// console.log(myObj[mySym]);


// update

myObj.email = "prajwal@microsoft.com"
// console.log(myObj);

//freeze

// Object.freeze(myObj)
myObj.email = "prajwal@amazon.com"
// console.log(myObj);

myObj.greeting = function() {
    console.log("hello JS user");
}

myObj.greetingTwo = function() {
    console.log(`hello JS user, ${this.name}`);
}

// console.log(myObj.greeting);

console.log(myObj.greeting());
console.log(myObj.greetingTwo());
