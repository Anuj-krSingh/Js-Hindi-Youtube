let score = 55;
let score1 = "55"
let score2 = "55abc"
let score3 = null
let score4 = undefined
let score5 = true

// console.log(typeof score);       --> number
// console.log(typeof(score))       --> number

// console.log(typeof score1);      --> string
// console.log(typeof (score1));    --> string


// console.log(score2);                    //--> 55abc
// let valueInNumber = Number(score2)  
// console.log(typeof valueInNumber);      //--> number
// console.log(valueInNumber);             //--> NaN


// console.log(typeof score3);             //--> object
// console.log(typeof(score3));            //--> object
// console.log(score3);                    //--> null
// let valueInNumber1 = Number(score3)     
// console.log(typeof valueInNumber1);     //--> number
// console.log(valueInNumber1);            //--> 0


// console.log(typeof score4);             //--> undefined
// console.log(typeof(score4));            //--> undefined
// console.log(score4);                    //--> undefined
// let valueInNumber2 = Number(score4)     
// console.log(typeof valueInNumber2);     //--> number
// console.log(valueInNumber2);            //--> NaN


// console.log(typeof score5);             //--> boolean
// console.log(typeof(score5));            //--> boolean
// console.log(score5);                    //--> true
// let valueInNumber3 = Number(score5)     
// console.log(typeof valueInNumber3);     //--> number
// console.log(valueInNumber3);            //--> 1


// let isLoggedIn = 1;                    // --> true
// let isLoggedIn1 = 0;                   // --> false
// let isLoggedIn2 = '';                  // --> false
// let isLoggedIn3 = 'Roman';             // --> true
// let booleanIsLoggedIn = Boolean(isLoggedIn3);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);


// let someNumber = 25;
// let stringNum = String(someNumber);
// console.log(stringNum);                 // 25
// console.log(typeof stringNum);          // String

// ***********************************  Operations  ******************************************

// let value = 3;
// let negValue = -value
// console.log(negValue);

// let str1 = "Hello"
// let str2 = " Roman"

// let str3 = str1 + str2
// console.log(str3);

// console.log(1 + '2');
// console.log('1' + 2);
// console.log('1' + '2');
// console.log('1' + 2 + 2);
// console.log(1 +2 + '2');
// console.log((3+4)* 5%3);
// console.log(+true);
// console.log(true+);     // Syntax Error
// console.log(+"");

// let num1 , num2, num3;
// num1 = num2 = num3 = 2+2
// console.log(num1);
// console.log(num2);
// console.log(num3);


let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);