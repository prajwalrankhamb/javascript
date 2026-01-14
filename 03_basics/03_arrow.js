//********************* this keyword *********************

const user = {
    username: "prajwal",
    price: 599,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "gaurav"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     username: "prajwal"
//     console.log(this.prajwal);
    
// }

// chai()


// const chai = function() {
//     username: "prajwal"
//     console.log(this);
    
// }

// chai()



//********************* / arrow functions *********************

const chai = () => {
    username: "prajwal"
    console.log(this); //{}
    
}

// chai()

// const addTwoNums = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwoNums(2,5))

//implicit return

// const addTwoNums = (num1, num2) => num1 + num2

// const addTwoNums = (num1, num2) => num1 + num2

const addTwoNums = (num1, num2) => ({username: "prajwal"})

// const addTwoNums = (num1, num2) => {
//     return {username: "prajwal"}
// }

console.log(addTwoNums(2,5))