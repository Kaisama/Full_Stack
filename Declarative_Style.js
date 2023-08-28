// 1. Max Number in an Array

var arr = [10, 20, 30, 40, 20, 10, 30, 30];
let maxValue = Math.max(...arr);    // using spread operator
console.log(maxValue);
40


// 2. Delete those Elements in an Array which is > 20

var arr = [10, 20, 30, 40, 20, 10, 30, 30];
undefined

var arr = arr.filter(e=>e<20);
undefined
arr;
(2) [10, 10]


// 3. Sum of All Elements in an Array

var arr = [10, 20, 30, 40, 10, 20, 10, 30, 30];
undefined
let result = arr.reduce((a, b) => {
  return a + b;
}, 0);

console.log(result);
200


// 4. Sum of All Even Elements and Odd Elements 

var arr = [10, 23, 30, 45, 20, 11, 30, 30];

let evenResult = arr.reduce((s, v) => (!(v % 2) ? s + v : s), 0);
let oddResult = arr.reduce((s, v) => ((v % 2) ? s + v : s), 0);
console.log(evenResult);
console.log(oddResult);
120
79


// 5. Average of All Elements

var arr = [10, 20, 30, 40, 10, 20, 10, 30, 30];

let result = arr.reduce((a, b) => {
  return a + b;
}, 0);

var avg = result / arr.length;

console.log(avg);
23.333333333333332
