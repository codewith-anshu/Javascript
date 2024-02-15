const accountId = "123456"
let accountEmail = "anshu@google.com"
var accountPassword = "34231"

accountcity ="Patna"

//accountId = "12345"//not allowed (const not change)

accountEmail = "hello@google.com"
accountPassword = "213121"
accountcity = "Roorkee"
console.log(accountId);
/* Prefer not to use var
Because of issue in block scope and functional scope
*/ 

console.table ([accountId,accountEmail,accountPassword,accountcity])
