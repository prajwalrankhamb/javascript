const coding = ["js", "py", "rb", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

coding.forEach( (item) => {
    // console.log(item);   
})

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        codingName: "javascript",
        codingExtension: "js"
    },
    {
        codingName: "c++",
        codingExtension: "cpp"
    },
    {
        codingName: "python",
        codingExtension: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.codingExtension);
    console.log(item.codingName);
    
})