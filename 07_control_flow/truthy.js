// ------- truthy value  -------
// -------   Example : 1  -------
// const userEmail = 'roman@gmail.com'

// if (userEmail) {
//     console.log('Got user email');
// } else {
//     console.log('Dont have user email');
// }

// -------   Example : 2  -------
// const userEmail1 = ''

// if (userEmail1) {
//     console.log('Got user email');
// } else {
//     console.log('Dont have user email');
// }

// -------   Example : 3  -------
// const userEmail2 = []

// if (userEmail2) {
//     console.log('Got user email');
// } else {
//     console.log('Dont have user email');
// }


// ------- falsy value  -------
// falsey value --> 0, -0 ,BigInt 0n, "", null, undefined, NaN

// --------  truthy value  ---------
// truthy value --> "0" , 'false', " ", [], {}, function(){}

// ------   Example : 3   -----
// if (userEmail2.length === 0) {
//     console.log('Array is empty');
// }


// const emptyObj = {}

// if (Object.keys(emptyObj)) {
//     console.log('Object is empty');
// }
// if (Object.keys(emptyObj.length === 0)) {
//     console.log('Object is empty');
// }

// Nulllish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);


// Ternary Operator
// condition ? true : false

const iceTeaPrice = 70
iceTeaPrice >= 80 ? console.log('more than 80') : console.log('less than 80');;