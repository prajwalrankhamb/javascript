
const myNum = [1,2,3]

// const numbers = myNum.reduce( function (acc, currval) {
//     console.log(`acc ${acc} and the current val ${currval}`);
//     return acc + currval
// }, 0)

// console.log(numbers);


// const numbers = myNum.reduce( (acc, currval) => acc + currval, 0)

// console.log(numbers);


const shoppingCart = [
    {
        shopItem: "t-shirt",
        price: 299
    },
    {
        shopItem: "shirt",
        price: 999
    },
    {
        shopItem: "pant",
        price: 699
    },
    {
        shopItem: "towel",
        price: 299
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(totalPrice);
