// const tinderUser = new Object()  //Singleton obj
const tinderUser = {}   //Non-Singleton obj

tinderUser.id = "124abc"
tinderUser.name = "Kane"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'rock@gmail.com',
    fullname: {
        username: {
            firstname: "Dwayne",
            lastname: "Johnson"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username.firstname);

// How to concat two obj into single obj.
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "rock@gmail.com"
    },
    {
        id: 2,
        email: "roman@gmail.com"
    },
    {
        id: 3,
        email: "stone@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));