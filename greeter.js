function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Gampesh", lastName: "Sahu" };
console.log(greeter(user));
