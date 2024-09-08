const accountId = 1349549
let accountEmail = "abhshek@google.com"
var accountPassword = "4848y8u"
accountCity = "Dehradun"
let accountState;

accountCity = "Premnagar" // we can change this also
accountPassword = "3848" // we can change the value of var as well
accountEmail = "ap@ap.com" // we can change the value of let
// accountId = 23 we can't change the value of const
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
prefer not to use the var
because of issues in block of scope and functional scope
In javascript if we declare a variable but not assing a value to it then it gives undefind
*/
