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
/// an interface is a definition for an object that tells typescript what that object is going to be
// define the argument that's being passed in as a Stark interface, which every Stark has to have a name
function printName(stark) {
    console.log(stark.name);
}
// pass in an object that has a name property
printName({ name: "Edward" });
// printName({label:"John"});
// ^^^ with this, 'tsc types.ts' in the terminal does not give you an error,
// but when you run 'node types.js' it runs the file for you, and gives you an undefined
// after adding the interface, the 'tsc types.js' command will give an error
// interfaces = a blue print for the kind of object we want to accept
/**
 * Classes
 */
// make up the blue print of an object, similar to interfaces, but much more powerful
// it defines the BEHAVIOR of an object
// compiling this will create a function in our js file
// haven't yet added anything to it that would would effect the js in runtime, so like, we just have a declaration of what the type of 'name' should be
// properties in a class can not be optional
var SkyWalker = /** @class */ (function () {
    // classes can also have constructor properties, which is a fucntion when the class runs
    function SkyWalker() {
        // gives it a default property
        this.saying = "Hello";
        // gives it a default property
        this.saying = SkyWalker.mantra;
    }
    // methods
    SkyWalker.prototype.hello = function (person) {
        console.log("hello, " + person);
    };
    // static properties can be accessed in the class
    SkyWalker.mantra = "The jedi needs to die";
    return SkyWalker;
}());
// we can now define an object as a SkyWalker
var luke = new SkyWalker();
luke.saying = "The force is strong with this one";
console.log(SkyWalker.mantra);
luke.hello('Han');
