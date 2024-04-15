// =======   Dates   ========

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// ========  Creating Date  =========

// const myCreatedDate = new Date(2024, 3, 16)
// const myCreatedDate = new Date(2024, 3, 16, 5, 4)
// const myCreatedDate = new Date("2024-04-16")
const myCreatedDate = new Date("04-16-2024")

// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

// ====== TimeStamp ======
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

const newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})