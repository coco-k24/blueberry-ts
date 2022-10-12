import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

//4.1.3
//関数式
type Human = {
    height: number;
    weight: number;
};

// const calcBMI = function(human: Human): number {
//     return human.weight / human.height ** 2;
// };

// const calcBMI = function({ height, weight }: Human): number {
//     return weight / height ** 2;
// }

// const salt: Human = { height: 1.84, weight: 72 };
// console.log(calcBMI(salt));

//4.1.4
//アロー関数

// const calcBMI = ({ height, weight}: Human): number => {
//     return weight / height ** 2;
// };


//4.1.5
//アロー関数の省略

//const calcBMI = ({ height, weight }: Human): number => weight / height ** 2;

// type ReturnObject = {
//     bmi: number;
// }

//オブジェクトリテラルを返却するとき
//const calcBMIObject = ({ height, weight }: Human): ReturnObject => ({bmi: weight / height ** 2});

//4.1.6
//メソッド記法で関数を作成する
// const obj = {
//     //メソッド記法
//     double(num: number): number {
//         return num * 2;
//     },
//     //通常記法
//     double2: (num: number): number => num * 2,
// };

// console.log(obj.double(100));
// console.log(obj.double2(-50));

//4.1.7
//可変長引数の宣言
// const sum = (...args: number[]): number => {
//     let result = 0;
//     for (const num of args){
//         result += num;
//     }
//     return result;
// };


// const str = (...args: string[]): string => {
//     let result = "";
//     for (const str2 of args){
//         result += str2;
//     }
//     return result;
// }
// console.log(sum(1,10,100));
// console.log(str('this', ' ', 'is', ' ', 'show'));


// const toLowerOrUpper = (str: string, upper: boolean = false): string => {
//     if(upper){
//         return str.toUpperCase();
//     } else {
//         return str.toLowerCase();
//     }
// };

// console.log(toLowerOrUpper('hello'));

//4.1.10
//コールバック関数
//引数に関数を入れること

// type User = {
//     name: string;
//     age: number;
// };

// const users: User[] = [
//     {name: "salt", age: 24}, 
//     {name: "yajo", age: 20},
// ];

// const names = users.map((u: User): string => u.name);
// console.log(names);


//4.2.1
//関数型の記法

//const xRepeat = (num: number): string => "x".repeat(num);
//console.log(typeof(xRepeat));

// type F = (repeatNum: number) => string;
// const xRepeat: F = (num: number): string => "x".repeat(num);

//4.2.5
//コールシグネチャ

// type MyFunc = {
//     isUsed?: boolean;
//     (arg: number): void;
// }

// const double: MyFunc = (arg: number) => {
//     console.log(arg * 2);
// };

// double.isUsed = true;
// double(144);

//4.3.1

// type HasName = {
//     name: string;
// }

// type HasNameAndAge = {
//     name: string;
//     age: number;
// }

// const fromAge = (age: number): HasNameAndAge => ({
//     name: "John Smith",
//     age,
// });

//HasNameAndAge型はHasName型の部分型である
//よって((age: number) => HasNameAndAge)型は((age: number) => HasName)型の部分型である
//なお、((age: number) => HasNameAndAge)型や((age: number) => HasName)型は関数型、つまり関数の型である
// const f: (age: number) => HasName = fromAge;
// const obj: HasName = f(100);

//4.4.2
//関数の型引数を宣言する方法
// const repeat = <T>(element: T, length: number): T[] => {
//     const result: T[] = [];
//     for(let i = 0; i < length; i++){
//         result.push(element);
//     }
//     return result;
// }
//console.log(repeat<string>('TY', 10));

//4.4.3
//型引数の省略
//console.log(repeat('BIG TY', 10));


//4.4.4
//型引数を持つ関数型↓
type Func = <T>(args: T, num: number) => T[];

const repeat: Func = (element, length) => {
    const result = [];
    for(let i = 0; i < length; i++){
        result.push(element);
    }
    return result;
}

rl.close();