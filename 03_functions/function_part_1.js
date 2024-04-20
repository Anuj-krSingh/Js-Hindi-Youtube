// ====   I. Question   =====
// function sayMyName() {
//     console.log("R")
//     console.log("O")
//     console.log("M")
//     console.log("A")
//     console.log("N")
// }
// sayMyName()

// =====  II.Question   =====
// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNumbers(5, 7)
// addTwoNumbers(5, "7")
// addTwoNumbers(5, "a")
// addTwoNumbers(5, null)

// =====  III. Question  =====
// function addTwoNumbers(num1, num2) {
//     // const result = num1+num2;
//     // return result; 

//     return num1+num2;   // Shorthand
// }
// const result = addTwoNumbers(5, 9)
// console.log("Result: ",result);

// =====  IV. Question  =====
// function loginUserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Roman"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())


// =====  V. Question  =====
// function loginUserMessage(username) {
//     if(username === undefined) {
//         console.log('Please enter a username');
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())


// =====  VI. Question  =====
// function loginUserMessage(username) {
//     if(!username) {
//         console.log("Plz enter a message");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())


// =====  VII. Question  =====
// function loginUserMessage(username="Rock") {
//     if(!username) {
//         console.log("Plz enter a message");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())


// =====  VIII. Question  =====
// function loginUserMessage(username="John") {
//     if(!username) {
//         console.log('Please enter a username');
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())
// console.log(loginUserMessage("Kane"))

// ====== Points to be Noted. ======
// 1. In Js, empty string ("") is considered as false value.
// 2. In Js, 'undefined' is also considered as false value.
