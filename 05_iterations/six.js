
const coding = ["python", "c++", "ruby", "java", "cpp"]

// const lang = coding.forEach( (item) => {
//      console.log(item);
    
// })

// console.log(lang);

// const lang = coding.filter( (item) => {
//     console.log(item);
//     return item
// })

const myNums = [1, 2, 3, 4, 5 ,6]

// const newNums = myNums.filter( (num) => num > 2 )

// console.log(newNums);


// const newNums = []

// myNums.forEach ( (num) => {
//     if(num > 2){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {
        title: 'Book One', genre: 'Friction', publish: '1820', edition: '1937'
    },
    {
        title: 'Book Two', genre: 'History', publish: '1982', edition: '2010'
    },
    {
        title: 'Book Three', genre: 'Friction', publish: '2001', edition: '2005'
    },
    {
        title: 'Book Four', genre: 'Friction', publish: '1965', edition: '1997'
    },
    {
        title: 'Book Five', genre: 'History', publish: '2006', edition: '2015'
    },
    {
        title: 'Book Six', genre: 'Physics', publish: '1650', edition: '1820'
    },
    {
        title: 'Book Siven', genre: 'History', publish: '1956', edition: '2001'
    },
    {
        title: 'Book Eight', genre: 'Physics', publish: '1930', edition: '1933'
    }
]

let book = books.filter( (bk) => bk.edition > 1980)

// book = books.filter( (bk) => {
//     return bk.genre === 'History' && bk.publish > 2000
// })

console.log(book);
