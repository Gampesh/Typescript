interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName ;
}

let user = {firstName: "Gampesh", lastName: "Sahu" };
console.log(greeter(user));