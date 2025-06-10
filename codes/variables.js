const accountId = 1349549 // When i make sure that the value of a variable can't chage in future then it will be declared by the const keyword
let accountEmail = "abhshek@google.com" // But when i make sure that the value of a variable will be change in future then it will be declare by the let keyword
var accountPassword = "4848y8u"
accountCity = "Dehradun" // not recommended
let accountState;

// accountId = 234 we can't do this
accountCity = "Premnagar" // we can change this also
accountPassword = "3848" // we can change the value of var as well
accountEmail = "ap@ap.com" // we can change the value of let
// accountId = 23 we can't change the value of const
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
prefer not to use the var
bcz of issues in block of scope and functional scope
In javascript if we declare a variable but not assing a value to it then it gives undefind
*/
