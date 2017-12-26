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




/**
 * Classes
 */
// make up the blue print of an object, similar to interfaces, but much more powerful
// it defines the BEHAVIOR of an object

// compiling this will create a function in our js file
// haven't yet added anything to it that would would effect the js in runtime, so like, we just have a declaration of what the type of 'name' should be

// properties in a class can not be optional
// keep class names with Uppercase letters
class SkyWalker {
    name: string;
    // gives it a default property
    saying: string = "Hello";
    // static properties can be accessed in the class
    static mantra = "The jedi needs to die";

    // classes can also have constructor properties, which is a fucntion when the class runs
    constructor() {
        // gives it a default property
        this.saying = SkyWalker.mantra;
    }

    // methods
    hello(person: string) {
        console.log("hello, " + person);
    }
}

// we can now define an object as a SkyWalker
var luke = new SkyWalker();
luke.saying = "The force is strong with this one";

console.log(SkyWalker.mantra);

luke.hello('Han');



/**
 * Inheritance
 */
// a way for objects or classes to gain access to the properties of classes that are possessed by other objects.
// horse and snake example, both extending Animal class

class Person {
    name: string;

    constructor (name: string) {
        // "this" refers to the object that will be created
        this.name = name;
    }
    // methods
    dance() {
        console.log(this.name + " is dancing");
    }
}

var jessica = new Person('Jessica');
jessica.dance();

// "extends" means, this class will automatically start will all the properties that this class extends
class AwesomePerson extends Person {
    dance() {
        // when you override a function, it doesn't automatically call the original function it overrode
        // you have to use this to override it
        super.dance();

        console.log("cooler dance");
    }
}

var schmidt = new AwesomePerson("Schmidt");
schmidt.dance();