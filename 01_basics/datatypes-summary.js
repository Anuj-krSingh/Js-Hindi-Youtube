// ========  Primitive  =========

// 7 types: String, Number, Boolean, null, undefined, 
//          Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false;
// const outsideTemp = null;

// let userEmail;
// let userEmail1 = undefined;

// console.log(userEmail);
// console.log(userEmail1);

// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id === anotherId);
// console.log(id);
// console.log(typeof id);
// console.log(anotherId);
// console.log(typeof anotherId);

// const bigNumber = 1222334455667788765n;
// console.log(bigNumber);

// =============  Reference(Non-Primitive)  =============

// Array, Objects, Functions

// =====  Array   ======
// const heros = ['Shaktimaan', 'Hatim', 'Karma']
// console.log(heros);
// console.log(typeof heros);

// =====  Object  =======
// let myObj = {
//     name: 'John',
//     age: 50
// }
// console.log(myObj);
// console.log(typeof myObj);


// =====  Function  =======
// const myFunction = function() {
//     console.log('Hello World');
// }

// console.log(typeof myFunction);
// console.log(myFunction);

// ==================================================

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = 'RomanReignsdotcom'

let anotherName = myYoutubename
anotherName = 'chaiaurcode'

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: 'user@google.com',
    upi: 'user@ybl'
}

let userTwo = userOne

userTwo.email = 'john@google.com'

console.log(userOne);
console.log(userTwo);