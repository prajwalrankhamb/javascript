const accountId = 45695
let accountEmail = "prajwal1@gmail.com"
var accountPassward = "45626"
accountCity = "Amravati"

// accountId = 45621  // Not allowed
accountEmail = "Prajwal23@.com"
accountPassward = "12136"
accountCity = "Washim"
let accountState;

console.log(accountId);

/*
Prefer to not use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassward, accountCity, accountState])
