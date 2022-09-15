"use strict";
/* const width1: number = 5;
const width2: number = 8;
const height: number = 3;

const area = (width1 + width2) * height / 2;

console.log(area);

console.log(0.1 + 0.2);
console.log(1.1 + 0.2);

//2.3.5
const str1: string = "hello";//文字列リテラル
const str2: string = `hello
,new`;//テンプレートリテラル
console.log(`${str1}, ${str2}`);//テンプレートリテラル(変数展開可能)
 
//2.3.10
import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("数値を入力してください: ", (line) => {
    console.log(line + 1000);
    rl.close();
});
//stdinはstring型として認識されているため、暗黙の変換で1000もstringになる


import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("数値を入力してください: ", (line) => {
    const num = Number(line);//Number関数は引数をnumber型にする
    console.log(num + 1000);
    console.log(typeof(num));
    rl.close();
});

const bigint = BigInt("fooooooooo");
console.log("bigint is", bigint);


//2.4.1

const sqrt = 10 ** 3;
console.log(sqrt);
*/
//2.4.3
let foo = 10;
console.log(++foo);
console.log(foo--);
let foo2 = foo;
console.log(foo2);
