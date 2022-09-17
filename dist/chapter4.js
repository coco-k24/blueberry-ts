import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const double = (arg) => {
    console.log(arg * 2);
};
double.isUsed = true;
double(144);
rl.close();
