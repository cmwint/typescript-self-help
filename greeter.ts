// TypeScript compiler:
// tsc greeter.ts

// interfaces describes object's structure
interface Person {
    firstName: string;
    lastName: string;
}

// type annotation ': string'
// errors on comilation if input is not a string
function greeter(person: Person) {
    return "hello," + person.firstName + " " + person.lastName;
}

let user = {
    firstName: "Jane",
    lastName: "User"
};

document.body.innerHTML = greeter(user);