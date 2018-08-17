class Animal{
    private name: string;
    protected type: string;
    public age: number;
}

class Dog extends Animal {
    constructor(public color:string) {
        super();
        this.age = 20;
    }
}


let dogObj = new Dog("green");
console.log(dogObj.age, dogObj.color);
