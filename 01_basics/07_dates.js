let myDate = new Date ()

// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2005, 1, 7)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2005, 1, 7, 5,30)
// console.log(myCreatedDate.toLocaleString);

let myCreatedDate = new Date("01-25-2025")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


console.log(
 newDate.toLocaleString('default',{
    day: "2-digit",
    weekday: "long"
}));