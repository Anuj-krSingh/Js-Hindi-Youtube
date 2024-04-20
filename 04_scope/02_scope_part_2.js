// =====  Example:- 1  =====
// function one() {
//     const username = "Roman"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }
// one()

// =====  Example:- 2  =====

// if (true) {
//     const username = "John"
//     if (username === "John") {
//         const website = "youtube"
//         console.log(username +" " + website);
//     }
//     // console.log(website);
// }


// ========  Interesting  =========

console.log(addOne(10));
function addOne(num) {
    return num + 1
}
// Note: In general function,we can access 'addOne()' before initialization

// console.log(addTwo(20));
const addTwo = function addTwo(num) {
    return num + 2
}
// Note: In function expression,we can't access 'addTwo()' before initialization
