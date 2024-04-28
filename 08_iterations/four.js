// -------  "for in" loop  --------
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myObject) {
//     console.log(key); 
// }

// for (const key in myObject) {
//     // console.log(myObject[key]);
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// ----------  Using "for in" loop with Array  ----------

const programming = ['js', 'rb', 'py', 'java' , 'cpp']

// for (const key in programming) {
//     // console.log(key);
//     console.log(programming[key]);
// }

// -------  Can we use "for in" over map() ?  -------

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA','United State of America')
// map.set('FR', 'France')
// map.set('IN', 'India')

// for (const key in map) {
//     console.log(key);   // nothing -> blank screen
// }

// Map is not iterable & if anything is not iterable 
// So, it cant be written like this in "for in" loop .