// -----  if  statement  -----

// NOTE:- '===' is used to check the same value and also for type checking.

const isUserLoggedIn = true
const temperature = 41

// ------   Question:-1  ------
// if(!isUserLoggedIn) {
//     console.log('executed');
// }

// ------   Question:-2   ------

// if (temperature < 50) {
//     console.log('Temperature is less than 50');
// }
// console.log('Temperature is more than 50');


// ------  if else statement  ------
// ------   Question:-3   ------

// if (temperature === 41) {
//     console.log('Temperature is less than 50');
// } else {
//     console.log('Temperature is greater than 50');
// }
// console.log('executed');

// --------   Checking for scope   --------
// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);    //ReferenceError: power is not defined


const balance = 743

// Immature Code / Bad Practice in the below line code.
// if (balance > 500) console.log('test1'), console.log('test2');

// ----  else if ----
// if (balance < 500) {
//     console.log('less than 500');
// } else if (balance < 750) {
//     console.log('less than 750');
// } else if (balance < 999) {
//     console.log('less than 1000');
// } else {
//     console.log('Equal');
// }


// -----  Example  -----

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log('Allow to buy couse');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User Logged in');
}