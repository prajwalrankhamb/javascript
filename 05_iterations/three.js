//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }

const greetings = "Hello World"

// for (const greet of greetings) {
//     console.log(greet);
    
// }

//map

const map = new Map()
map.set('IN', 'India')
map.set('FR', 'France')
map.set('USA','United States of America')

// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

// [ 'IN', 'India' ]
// [ 'FR', 'France' ]
// [ 'USA', 'United States of America' ]

// for (const [key,value] of map) {
//     console.log(`${key} is short of ${value}`);
    
// }

const myObject = {
    game1: "coc",
    game2: "bgmi",
    game3: "mini militia"
}

for (const [key,value] of myObject) {
    console.log(`${key} is ${value}`);
    
}

//error myObject is not iterable