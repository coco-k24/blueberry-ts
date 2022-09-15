import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
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
const toLowerOrUpper = (str, upper = false) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper('hello'));
rl.close();
