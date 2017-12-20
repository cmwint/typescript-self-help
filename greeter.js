// TypeScript compiler:
// tsc greeter.ts
// class-based OOP
// interfaces and classes (are supposed to) work well together
// classes in TS are shorthand for the same OO used in reg JS
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// type annotation ': string'
// errors on comilation if input is not a string
function greeter(person) {
    return "hello," + person.firstName + " " + person.lastName;
}
// let user = {
//     firstName: "Jane",
//     lastName: "User"
// };
var user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);
