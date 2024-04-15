const name = "kane"
const repoCount = 50

// console.log(name + repoCount + ' Value');

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const name1 = new String('Stone-Cold')
// console.log(name1[0]);
// console.log(name1.__proto__);

// console.log(name1.length);
// console.log(name1.toUpperCase());
// console.log(name1.__proto__.toUpperCase());
console.log(name1.charAt(2));
console.log(name1.indexOf('n'));

const newString = name1.substring(0,4)
console.log(newString);

const anotherString = name1.slice(-8, 4)
console.log(anotherString);

const anotherString1 = newString.slice(-8, 4)
console.log(anotherString1);

const newStringOne = "   Brock   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/brock%20lesnar"

console.log(url.replace('%20','-'))

console.log(url.includes('brock'))

console.log(url.includes('stone'))


const name2 = new String('Stone-Cold-Steve')
console.log(name2.split('-'));