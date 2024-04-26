// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log(i , 'is the best no.');
//     }
//     console.log('Element: ',element);

// }
// console.log('Element: ',element);


// -------- Nested for loop ---------

// for (let i = 0; i <= 5; i++) {
//     console.log(`Outer Loop value : ${i}`);
//     for (let j = 0; j <= 5; j++) {
//         // console.log(`Inner Loop value ${j} and outer loop ${i}`);        
//         // console.log(i + '*' + j + ' = ' + i*j);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }   
// }


// let myArray = ['flash', 'batman', 'superman']
// console.log(myArray);
// for (let index = 0; index < myArray.length; index++) {
//     // const element = myArray[index];
//     // console.log('Element : ',element);
//     console.log(myArray[index]);
// }


// break and continue

// ------  break  ------
// for (let index = 1; index<=10; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);    
// }

// -------  continue  --------
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);    
}