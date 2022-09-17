import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const users = [
    { name: "salt", age: 24 },
    { name: "yajo", age: 20 },
];
const names = users.map((u) => u.name);
console.log(names);
rl.close();
