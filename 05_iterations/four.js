const myObject = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

for (const key in myObject) {
    // console.log(`${key} is a extenstion of ${myObject[key]}`);
}

const programing = ["js","py","cpp","rb"]

for (const key in programing) {
//    console.log(`${programing[key]}`);
   
}

const map = new Map()
map.set('IN', 'India')
map.set('FR', 'France')
map.set('USA','United States of America')

for (const key in map) {
    // console.log(key);
}