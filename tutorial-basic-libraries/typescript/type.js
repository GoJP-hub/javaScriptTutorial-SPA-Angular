var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var str = "Hello";
var num = 1;
var isB = true;
var arr = [1, 2, 3];
var tup = [1, "hello"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var red = Color.Red;
var obj = { key: "value" };
var obj2 = { 1: "1" };
var lit = 'str is ${str}';
var assmpt = "hello";
var newAssmpt = assmpt;
var add;
add = function (x, y) {
    return x + y;
};
var Animal = /** @class */ (function () {
    function Animal(name) {
        // インターフェイス対応
        this.myAge = 1;
        this._name = name;
    }
    Animal.prototype.age = function () { this.myAge++; };
    ;
    ;
    Animal.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 0; }
        console.log("Animal moved ${distanceInMeter} meter.");
    };
    Object.defineProperty(Animal.prototype, "name", {
        get: function () { return this._name; },
        set: function (name) { this._name = name; },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
        console.log('My name is ' + this.name);
    };
    return Dog;
}(Animal));
var dog = new Dog("Taro");
dog.bark;
dog.move(10);
// console.log(dog._name); 変数を呼び出している
console.log(dog.name); // ゲッターを呼び出している
