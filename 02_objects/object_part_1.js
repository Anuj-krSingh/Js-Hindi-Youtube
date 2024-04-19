//  Singleton
//  Object.create

// =====  Object literals  =====

const mySym = Symbol("key1")


const JsUser = {
    name: "Roman",
    "full name": "Roman Reigns",
    // mySym: "myKey1",    // Can't access Symbol(mySym) like this.
    [mySym]: "myKey1",    // Access Symbol(mySym) like this
    age: 18,
    location: "Jaipur",
    email: "roman@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// // console.log(JsUser.mySym);    // Can't access like this.
// console.log(JsUser[mySym]);  // Access symbol always use []
// console.log(typeof JsUser[mySym]);

// =====  How to overwrite values in object.  =====
JsUser.email = "rock@gmail.com"

// using Object.freeze(),can't change the value of object.
// Object.freeze(JsUser)
JsUser.email = "john@gmail.com"
console.log(JsUser);

// How to use function in Object
JsUser.greeting = function() {
    console.log("Hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());