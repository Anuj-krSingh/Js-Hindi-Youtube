// ------  for of loop  ------

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// for of loop takes each & every element.


const greetings = "Hello World!"

// ---------  Example - 1  ----------
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// for of loop takes character by character.

// ---------  Example - 2  ----------

// for (const greet of greetings) {
//     if (greet != ' ') {
//         console.log(`Each char is ${greet}`);
//     }  
// }

// -----------   Maps   --------------
// ----------- Example - 1 -----------

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA','United State of America')
// map.set('FR', 'France')

// console.log(map);

// ----------- Example - 2 -----------

const map = new Map()
map.set('IN', 'India')
map.set('USA','United State of America')
map.set('FR', 'France')
map.set('IN', 'India')

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }


// for (const [key, value] of map) {
//     console.log(key ,' : ' , value);
// }

// ----------  Points to be remembered ----------
// (a)Map contains only unique value not duplicate.
// (b)Remembers the original insertion of element. 


// ------  Using 'for of' with 'object'  -------
// ------  Example : 1 ---------

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ' : ', value);
// }

// Output :- TypeError: myObject is not iterable


// ------  Example : 2 ---------

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ' : ', value);
// }

// Output :- TypeError: myObject is not iterable

