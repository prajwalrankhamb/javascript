const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "superman", "clash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5], 7, 6, [2, 3, [9, 8]]]
// const new_another_array = another_array.flat(Infinity)    
// console.log(new_another_array);


console.log(Array.isArray("prajwal"));
console.log(Array.from("prajwal"));
console.log(Array.from({name: "prajwal"})); //interesting


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));



