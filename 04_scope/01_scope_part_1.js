// =====   Example:- 1  =====
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


// =====  Example:- 2  =====
// if (true) {
//     let a = 100
//     const b = 200
//     var c = 300
// }
//console.log(a);     //ReferenceError: a is not defined
// console.log(b);       //ReferenceError: b is not defined
// console.log(c);


// =====  Example:- 3  =====
var c = 500
let a = 600
if (true) {
    let a = 200
    const b = 300
    console.log("INNER: ", a);
    console.log('Outer: ', c);
}
console.log(a);
console.log(c);