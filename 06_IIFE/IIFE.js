// Immediately Invoked Function Expressions (IIFE)

// =======   Normal Function    =======
// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

// =======   IIFE   ========

// (function chai() {
//     console.log(`DB CONNECTED`);
// })()

// ========  Multiple IIFE   ========

// (function chai() {
//     console.log(`DB CONNECTED`);
// })();

// (function chaiTwo() {
//     console.log(`DB CONNECTED Two`);
// })();

// (function chaiThree() {
//     console.log(`DB CONNECTED Three`);
// })()


// why do we use IIFE ?
// Many times, are facing problems due to the pollution from the Global scope.
// To remove the pollution from the variables or declaration of Global scope, use IIFE .

// We can also write multiple IIFE .
// No need to use semicolon(;) to execute single IIFE but to 
// execute multiple IIFE must use semicolon(;) it means that
// first IIFE completed.Otherwise,will throw Error
// TypeError: (intermediate value)(...) is not a function


