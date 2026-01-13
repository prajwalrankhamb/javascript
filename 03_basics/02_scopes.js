//global scope
var c = 10
let a = 300

//functional or block scope
if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner ",a);

}

// console.log("Outer ",a);
// console.log(b);
// console.log(c);


function one(){
    const username = "prajwal"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    
    // two()
}

// one()


// if(true){
//     let username = "prajwal"
//     if(username === "prajwal"){
//         let website = " youtube"
//         console.log(username + website);
        
//     }
//     // console.log(website);
    
// }
// console.log(username);


//**************** mini hoisting *****************


console.log(addOne(4));

function addOne(num){
    return num + 1
}


// console.log(addTwo(6)); // This is not acceptable

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(10));