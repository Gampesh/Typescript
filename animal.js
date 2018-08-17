var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(color) {
        _super.call(this);
        this.color = color;
        this.age = 20;
    }
    return Dog;
}(Animal));
var dogObj = new Dog("green");
console.log(dogObj.age, dogObj.color);
