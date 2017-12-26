// define a type with a colon
// types are important during compile time, not with JS is runnning
// to check for errors
var n = 1;
n = "Name";
// avoid using the "any" type
// the stricter you are with types, the more errors you are able to prevent
var isWinter = false;
// isWinter = 123;
var count = 5;
var something = "Hello";
// vector = array that can only contain one type of variable
// array that only contains strings
var names = ["Bill", "John", "Bob"];
// change array type to any, to allow more than one type
//var names: string[] = ["Bill", "John", "Bob", 4, 10];
// enum = easy way to store built-in varaibles
var Starks;
(function (Starks) {
    Starks[Starks["Bill"] = 0] = "Bill";
    Starks[Starks["John"] = 1] = "John";
    Starks[Starks["Bob"] = 2] = "Bob";
})(Starks || (Starks = {}));
;
// can be referenced throughout
var bill = Starks.Bill;
// the type the function returns is after the parentheses but before the curly brackets
// the function getName() returns a string
function getName() {
    return "John";
}
// void is not any type
// it's usually used to denote nothing returned in a function
function returnConsole() {
    console.log('A message here');
}
