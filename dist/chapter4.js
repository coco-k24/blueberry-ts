import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fromAge = (age) => ({
    name: "John Smith",
    age,
});
const f = fromAge;
const obj = f(100);
console.log(1);
console.log(typeof (f));
rl.close();
