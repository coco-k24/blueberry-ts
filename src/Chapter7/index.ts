import { name, age } from "./salt.js";
import sAge from "./saltAge.js";
import increment from './counter.js';

console.log(name, age, sAge);
console.log(`カウンタの値は${ increment() }です。`);
console.log(`カウンタの値は${ increment() }です。`);
console.log(`カウンタの値は${ increment() }です。`);