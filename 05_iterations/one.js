// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }


// for(let i = 0; i<=10; i++){
//     console.log(`Outer loop i ${i}`);
//     for(let j = 0; j<=10; j++){
//         console.log(`Inner loop j ${j} and inner loop i ${i}`); 
//     }
// }


// let myArray = ["ironman", "spiderman", "thor"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//break and continue

// for (let i = 0; i <= 10; i++) {
//     if(i == 5){
//         console.log("detected 5");
//         break
//     }
//     console.log(i);  
// }


for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("detected 5");
        continue
    }
    console.log(i);  
}