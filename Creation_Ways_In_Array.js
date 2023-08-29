// Array Creation Ways

var arr = [10,20,1,2,90,33, 88];   // Array Literal
undefined

var arr2= new Array(10);   // By creating the Object of an Array
undefined

arr;
(7) [10, 20, 1, 2, 90, 33, 88]

arr2;
(10) [empty × 10]
arr2.length;
10

var arr3 = new Array(100);   // By creating the Object of an Array
undefined


var g = Array.of(10,20,30,40);   // Array Creation using Array.of function
undefined
g;
(4) [10, 20, 30, 40]

arr3;
(100) [empty × 100]
arr3.fill(1, 0, arr3.length);   // fill value 1 from index 0 to length.
(100) [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

var arr4 = Array.from(arr);  // creating a clone
undefined
arr4;
(7) [10, 20, 1, 2, 90, 33, 88]
arr4 === arr;  // reference is different
false

var g = [...arr];   // cloning by spread operator
undefined
g;
(7) [10, 20, 1, 2, 90, 33, 88]
g=== arr;
false
