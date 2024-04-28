const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach( (item) => {
//     console.log(item);
// })
// console.log(values);


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);

// -------  Points to be Remembered  --------
// " forEach " doesn't return any value.

// ------   Using filter   -------

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// Here,line no 31-32.Here is only single statement,
// no need to use {} curly braces.
// const newNums = myNums.filter( (num) => {
//     num > 4
// })

// Here,line no 38-39.Here is only single statement,
// if we use {} curly braces,need to use return keyword.

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// --------   Using "forEach"   ----------

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    { title : 'Book One', genre: 'Fiction', publish: 1981, 
    edition: 2004 },
    { title : 'Book Two', genre: 'Non-Fiction', publish: 1992, 
    edition: 2008 },
    { title : 'Book Three', genre: 'Science', publish: 1999,
    edition: 2007 },
    { title : 'Book Four', genre: 'History', publish: 1989, 
    edition: 2010 },
    { title : 'Book Five', genre: 'Fiction', publish: 2009, 
    edition: 2014 },
    { title : 'Book Six', genre: 'Non-Fiction', publish: 1987, 
    edition: 2010 },
    { title : 'Book Seven', genre: 'Science', publish: 1986, 
    edition: 1996 },
    { title : 'Book Eight', genre: 'Fiction', publish: 2011 , 
    edition: 1996 },
    { title : 'Book Nine', genre: 'History', publish: 2011, 
    edition: 2016 },
    { title : 'Book Ten', genre: 'Non-Fiction', publish: 1981, 
    edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => bk.publish >= 2000)

// ---  Here,below, we have opened the scope.  ---

// userBooks = books.filter( (bk) => { bk.publish >= 2000 })
// userBooks = books.filter( (bk) => { return bk.publish >= 2000 })

// userBooks = books.filter( (bk) => bk.publish >=2000 && bk.genre === 'History')
// console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
})
console.log(userBooks);