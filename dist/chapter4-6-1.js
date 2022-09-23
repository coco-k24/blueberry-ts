"use strict";
const getFizzBuzzString = (i) => {
    if (i % 3 !== 0 && i % 5 !== 0) {
        return String(i);
    }
    else if (i % 3 === 0 && i % 5 !== 0) {
        return `Fizz`;
    }
    else if (i % 3 !== 0 && i % 5 === 0) {
        return `Buzz`;
    }
    else {
        return `FizzBuzz`;
    }
};
// for(let i = 1; i <= 100; i++){
//     const message = getFizzBuzzString(i);
//     console.log(message);
// }
function sequence(st, end) {
    const num = [];
    for (let i = st; i <= end; i++) {
        num.push(i);
    }
    return num;
}
for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
}
