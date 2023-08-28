// find vs findIndex vs Filter vs Reduce

var arr = [10, 20, 40, 30, 40, 50, 60, 40];
undefined
arr.find(e=>e==40);
40
arr.find(e=>e==400);
undefined
arr.find(e=>e==400)?"Found":"Not Found";
'Not Found'

arr.findIndex(e=>e==40);
2
arr.findIndex(e=>e==400);
-1

arr.filter(e=>e==40);
(3) [40, 40, 40]
var t = arr.filter(e=>e==40);
undefined
t;
(3) [40, 40, 40]
t.length;
3
arr.filter(e=>e==40).length;
3


//In filter method we won't be able to find the index of an element, also filter method was derived from the reduce method

// find those elements which is >20 without using filter

var arr = [10, 20, 40, 30, 40, 50, 60, 40];
undefined

arr.reduce((result,e)=>{
    if(e > 20){
        result.push(e);
    }
    return result;
},[]);
(6) [40, 30, 40, 50, 60, 40]

// print index also 

arr.reduce((result,e, i)=>{
    if(e > 20){
        result.push({element:e, index:i});
    }
    return result;
},[]);

(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0: {element: 40, index: 2}
1: {element: 30, index: 3}
2: {element: 40, index: 4}
3: {element: 50, index: 5}
4: {element: 60, index: 6}
5: {element: 40, index: 7}
length:6
[[Prototype]]: Array(0)
