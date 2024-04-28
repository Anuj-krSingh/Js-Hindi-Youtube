// -------   reduce()   -------- 

const myNums = [1, 2, 3, 4]

// ------  Using Normal Function   ------

// ------  Example - 1  -------

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// },0)
// console.log(myTotal);

// ------  Example - 2  -------

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}  and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

// ------  Example - 3  -------

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}  and currval: ${currval}`);
//     return acc + currval
// }, 3)
// console.log(myTotal);

// ------  Using Arrow Function   ------

// const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'py course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);