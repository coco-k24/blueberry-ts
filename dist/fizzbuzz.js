"use strict";
let cnt = 1;
while (cnt <= 100) {
    if (cnt % 3 !== 0 && cnt % 5 !== 0) {
        console.log(cnt);
    }
    else if (cnt % 3 === 0 && cnt % 5 !== 0) {
        console.log(`Fizz`);
    }
    else if (cnt % 3 !== 0 && cnt % 5 === 0) {
        console.log(`Buzz`);
    }
    else {
        console.log(`FizzBuzz`);
    }
    cnt++;
}
