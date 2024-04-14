const accountId = 979867
let accountEmail = "roman@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"      // bad habit
let accountState;
let accountCode='';

// accountId = 5   //not allowed
console.log(accountId);     // TypeError

accountEmail = "john@gmail.com"     // Allowed
console.log(accountEmail);

accountPassword = "54321"       // Allowed
console.log(accountPassword);

accountCity = "Delhi"
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState, accountCode])

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/