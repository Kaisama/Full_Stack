// array crud methods

var arr = [10,20,1,2,90,33, 88];
undefined

// array will work as both stack and queue

arr.push(1000);  // this will insert element at last
8
arr;
(8) [10, 20, 1, 2, 90, 33, 88, 1000] 
arr.unshift(2000);  // this will insert element at starting
9
arr;
(9) [2000, 10, 20, 1, 2, 90, 33, 88, 1000]

arr.pop();  // this will delete element at last
1000
arr;
(8) [2000, 10, 20, 1, 2, 90, 33, 88]
arr.shift();  // this will delete element at starting
2000
arr;
(7) [10, 20, 1, 2, 90, 33, 88]

arr.splice(1);  // this will delete element at starting index 1.
(6) [20, 1, 2, 90, 33, 88]
arr; // result
[10]
var arr = [10,20,1,2,90,33, 88];
undefined
arr.splice(2,3);  // this will delete elements at starting index 2 till count 3.
(3) [1, 2, 90]
arr;  result
(4) [10, 20, 33, 88]
arr.splice(0);  // will delete all elements at starting index 0.
(4) [10, 20, 33, 88]0: 101: 202: 333: 88length: 4[[Prototype]]: Array(0)
arr;  // result
[]

var arr = [1, 10, 2, 20, 33, 88, 90];
undefined
arr.splice(1,0);   // from index 1 delete 0 elements
[]
arr;
(7) [1, 10, 2, 20, 33, 88, 90]    // result

arr.splice(1,1);   // from index 1 delete 1 element
[10]
arr;
(6) [1, 2, 20, 33, 88, 90]    // result

arr.splice(1,10000);     // from index 1 delete 10000 elements
(5) [2, 20, 33, 88, 90]
arr;
[1]    // result

var arr = [10,20,1,2,90,33, 88];
undefined
arr;
(7) [10, 20, 1, 2, 90, 33, 88]

// Adding elements in the middle.

arr.splice(1,0,1000);  // go to index 1, don't delete any element and push 1000 there.
[]
arr;
(8) [10, 1000, 20, 1, 2, 90, 33, 88]
arr;
(8) [10, 1000, 20, 1, 2, 90, 33, 88]

arr.splice(1,1,9000);  // go to index 1, delete 1 element and push 9000 there.
[1000]
arr;
(8) [10, 9000, 20, 1, 2, 90, 33, 88]

arr.splice(1,0,99,100,200,300);  // go to index 1, don't delete any element and push 99,100,200,300 there.
[]  // bcz nothing is deleted
arr;
(12) [10, 99, 100, 200, 300, 9000, 20, 1, 2, 90, 33, 88]

arr.splice(1,1,4444,5555,6666);  // go to index 1, delete that element and push 4444,5555,6666 there.
[99]  // bcz 99 was removed
arr;
(14) [10, 4444, 5555, 6666, 100, 200, 300, 9000, 20, 1, 2, 90, 33, 88]

arr.splice(1,0,8888,7777,6666);
[]
arr.splice(1,0,[29999,4433323,5544]); // for spread operator
[]
arr;
(18) [10, Array(3), 8888, 7777, 6666, 4444, 5555, 6666, 100, 200, 300, 9000, 20, 1, 2, 90, 33, 88]


arr.splice(1,0,...[29999,4433323,5544]);  // spread operator to show values.
[]
arr;
(21) [10, 29999, 4433323, 5544, Array(3), 8888, 7777, 6666, 4444, 5555, 6666, 100, 200, 300, 9000, 20, 1, 2, 90, 33, 88]
