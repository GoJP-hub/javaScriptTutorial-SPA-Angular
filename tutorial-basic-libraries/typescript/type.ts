const str: string = "Hello";
const num: number = 1;
const isB: boolean = true;
const arr: number[] = [1, 2, 3];
const tup: [number, string] = [1, "hello"];

enum Color {Red=0, Green=1, Blue };
const red: Color = Color.Red;

const obj: object = {key: "value"};
const obj2: {[key: number]: String } = {1: "1"};

let lit = 'str is ${str}';

let assmpt = "hello";
let newAssmpt = <any> assmpt;

let add;
add = (x: number, y: number): number =>{ // 引数と戻り値の順で用意されている。ラムダ関数が関数であることを示す。
    return x + y;
};

class Animal implements Life{
    // インターフェイス対応
    myAge = 1;
    age(){this.myAge ++;};
    // アクセス修飾子を付与できる。何もないとPublic。
    // Privateは、そのクラスのみでの利用可能。Protectedは、サブクラスまで利用可能。
    private _name : String;
    constructor(name: String){this._name = name};
    move(distanceInMeter: number = 0){
        console.log("Animal moved ${distanceInMeter} meter.");
    }
    get name(): String {return this._name};
    set name(name: String){this._name = name};
}

class Dog extends Animal{
    bark(){
        console.log('Woof! Woof!');
        console.log('My name is ' + this.name)
    }
}

const dog = new Dog("Taro");
dog.bark;
dog.move(10);
// console.log(dog._name); 変数を呼び出している
console.log(dog.name); // ゲッターを呼び出している

interface Life{
    myAge : number;
    age();
}
