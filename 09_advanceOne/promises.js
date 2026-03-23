const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Promise one");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    setTimeout(() => {
        console.log("promise one resolve");
    }, 1000);
})

new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("promise two")
        resolve()
    }, 1000);
   
}).then(function(){
    console.log("promise two resolve");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "prajwal",email: "prajwal@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject) {
   setTimeout(() => {
    let error = true
    if (!error) {
        resolve({username: "Rohit", password: 123})
    }else{
        reject("ERROR: something went wrong");  
    }
   }, 1000);
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username  
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Either resolve or rejected");  
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
    let error = false
    if (!error) {
        resolve({username: "Rohan", password: 892})
    }else{
        reject("ERROR: something went wrong");  
    }
   }, 1000);
})

async function consumePromiseFive() {
    try {
        const responce = await promiseFive
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch ('https://api.github.com/users/hiteshchoudhary')

//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// }

// getAllUsers()


fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);  
})
.catch((error)=> console.log(error))

