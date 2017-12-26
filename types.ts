// define a type with a colon
// types are important during compile time, not with JS is runnning
// to check for errors
var n : any = 1;

n = "Name";

// avoid using the "any" type
// the stricter you are with types, the more errors you are able to prevent



var isWinter: boolean = false;
// isWinter = 123;

var count: Number = 5;
var something: String = "Hello";

// vector = array that can only contain one type of variable
// array that only contains strings
var names: string[] = ["Bill", "John", "Bob"];

// change array type to any, to allow more than one type
//var names: string[] = ["Bill", "John", "Bob", 4, 10];

// enum = easy way to store built-in varaibles
enum Starks {Bill,John,Bob};
// can be referenced throughout
var bill: Starks = Starks.Bill;

// the type the function returns is after the parentheses but before the curly brackets
// the function getName() returns a string
function getName() : string {
    return "John";
}

// void is not any type
// it's usually used to denote nothing returned in a function
function returnConsole() : void {
    console.log('A message here');
}

/**
 * Interfaces
 */

interface Stark {
    name: string;
    age?: number;
    // the question marks makes the parameter optional, it is not required to use the interface
}

/// an interface is a definition for an object that tells typescript what that object is going to be
// define the argument that's being passed in as a Stark interface, which every Stark has to have a name
function printName(stark : Stark) {
    console.log(stark.name);
}
// pass in an object that has a name property
printName({name:"Edward"});
// printName({label:"John"});

// ^^^ with this, 'tsc types.ts' in the terminal does not give you an error,
// but when you run 'node types.js' it runs the file for you, and gives you an undefined

// after adding the interface, the 'tsc types.js' command will give an error


// interfaces = a blue print for the kind of object we want to accept