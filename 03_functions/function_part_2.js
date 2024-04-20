// =====  I. Question  =====
// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(2))

// =====  II. Question  =====

// function calculateCartPrice(val1, val2, ...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(200, 300, 400, 500))


// =====  III. Question  =====

// const user = {
//     userName: 'Roman',
//     price: 199
// }
// function handleObject(anyObject) {
//     console.log(`Username is ${anyObject.userName} and 
//     price is ${anyObject.price}`);
// }
// handleObject(user)

// =====  IV. Question  =====
// ===== Passing Object =====
// const user = {
//     userName: 'Roman',
//     prices: 199
// }
// function handleObject(anyObject) {
//     console.log(`Username is ${anyObject.userName} and 
//     price is ${anyObject.price}`);
// }
// handleObject(user)

// =====  V. Question  =====
// ===== Passing Object =====

// Here,we can also pass object directly.

// function handleObject(anyObject) {
//     console.log('Data:',anyObject);
//     console.log(`Username is ${anyObject.userName} and 
//     price is ${anyObject.price}`);
// }
// handleObject({
//     userName: 'John',
//     price: 2999
// })


// =====  VI. Question  =====
// ===== Passing Array =====

const myNewArray = [100, 200, 300, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))