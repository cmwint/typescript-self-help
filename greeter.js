// TypeScript compiler:
// tsc greeter.ts
// type annotation ': string'
// errors on comilation if input is not a string
function greeter(person) {
    return "hello," + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "User"
};
document.body.innerHTML = greeter(user);
