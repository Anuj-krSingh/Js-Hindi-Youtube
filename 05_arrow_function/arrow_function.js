const user = {
    username: 'Roman',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "john"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     console.log(this);
// }
// chai()


// function chai() {
//     let username = "kane"
//     console.log(this);
// }


// function chai() {
//     let username = "kane"
//     console.log(this.username);
// }
// chai()


// ======  Function Expression  ======

// const chai = function () {
//     let username = "Jade"
//     console.log(this.username);
// }
// chai() 

// =====   Arrow Function   =====

// const chai = () => {
//     let username = "Shawn"
//     console.log(this.username);
// }
// chai()


// const chai = () => {
//     let username = "Shawn"
//     console.log(this);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 6))


// ---------   Points to be Noted   ---------
// It is Myth some people say that "this" keyword is used only in normal function not others[function Expression & arrow function]
// If we had to write code within {} curly braces, would have to use "return" keyword.
// If we had to write code within () parenthesis, wouldn't have to use "return" keyword.
// But we can use () parenthesis only in single statement.
// Implicit means no need to write return keyword.
// Explicit means needs to write return keyword.


// Implicit return Arrow function
// -----   First Way  -----
// const addTwo = (num1, num2) => num1 +num2 
// console.log(addTwo(5, 7));

// Implicit return Arrow function
// -----   Second Way   -----
// const addTwo = (num1, num2) => (num1 +num2)
// console.log(addTwo(5, 7));


// ----- Can't return object like this -----
// const addTwo = (num1, num2) => {username: "Brock"} 
// console.log(addTwo(6, 8))

// ------   return object like this   --------
const addTwo = (num1, num2) => ({username: "Brock"})
console.log(addTwo(6, 8))

