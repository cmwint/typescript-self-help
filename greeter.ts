// TypeScript compiler:
// tsc greeter.ts

// class-based OOP
// interfaces and classes (are supposed to) work well together

// classes in TS are shorthand for the same OO used in reg JS
class Student {
    fullName: string;
    constructor (
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


// interfaces describes object's structure
interface Person {
    firstName: string;
    lastName: string;
}

// type annotation ': string'
// errors on comilation if input is not a string
function greeter(person: Person) {
    return "hello, " + person.firstName + " " + person.lastName;
}

// let user = {
//     firstName: "Jane",
//     lastName: "User"
// };
let user = new Student('Jane', 'M.', 'User');

document.body.innerHTML = greeter(user);