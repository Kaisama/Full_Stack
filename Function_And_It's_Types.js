// Function and It Types

function show(x,y){
    return x + y;
}
var z = show(10,20);
console.log(z);
VM222:5 30
undefined
function test(){
    return 10,20;    // function will never return 2 values, so it will return the last value.
}
undefined
test();
20      // last value is returned from the function.

function disp(){
    return [10,20,30];  // here function returns all of the elements in the form of a single reference.
}
var m = disp();
undefined
m;
(3) [10, 20, 30]

function output(){
    return {x:10, y:20, z:30};  // here function returns all of the elements in the form reference of an Object.
}
undefined
var g = output();
undefined
g;
{x: 10, y: 20, z: 30}

function add(){
    return function adder(){
        console.log("I am the Adder ");
    }
}
undefined
add();  // this will return a function
ƒ adder(){
        console.log("I am the Adder ");
    }
add()(); // access function in function
VM636:3 I am the Adder 
undefined
var f = add();
undefined
typeof f;
'function'
f;
ƒ adder(){
        console.log("I am the Adder ");
    }
f();
VM636:3 I am the Adder 
undefined
function disp(){
    return [10,20,30];
}

undefined
disp()[0];
10
function output(){
    return {x:10, y:20, z:30};
}
undefined
output()['x'];
10


// 1st Named function / Simple Function.

// JS is a compiled language, Compilation uses the Principle of Hoisting.
// Hoisting - Place declaration at the Top(Window(root) Object).
show(); // Call
function show(){ // Define
    console.log(" I am the Show ");
}
VM108:3  I am the Show 
undefined
window.show;
ƒ show(){ // Define
    console.log(" I am the Show ");
}
window.show();
VM108:3  I am the Show 
undefined
show();   // basically it is window.show();
VM108:3  I am the Show 
undefined


// 2nd Anonymous function / Function Expression / UnNamed Function.

var z = function(){
    console.log("I am the Anonymous Function ");
}
undefined
typeof z;
'function'
z();
VM312:2 I am the Anonymous Function 
undefined

m(); 
var m = function(){
    console.log("I am the Function Expression");
}
VM442:1 Uncaught TypeError: m is not a function   // because only declaration is there instead of assigning
    at <anonymous>:1:1
(anonymous) @ VM442:1
m;
undefined


// 3rd Named Function.

// NFE
undefined
function add(){
    console.log("Customer Add ");
}
undefined
window.add();
VM105:2 Customer Add 
undefined
function add(){
    console.log("Math add ");
}
undefined
window.add(); // Override
VM214:2 Math add 
undefined
function show(){
var x = 10;
    var x =20;
    if(x>1){
        var x = 30;
    }
    console.log(x);  
}
undefined
show();  // Override the values
VM371:7 30
undefined
function calc(){
    var add = function(x,y){
        return x + y;
    }
    var sub = function(x,y){
        return x - y;
    }
    return [add, sub];
}
undefined
var arr = calc();
undefined
arr;
(2) [ƒ, ƒ]
arr[0](10,20);
30
arr[1](10,20);
-10
add();
VM214:2 Math add 
undefined
arr[0](10,20);
30
function calc(){
    var add = function adder(x,y){
        return x + y;
    }
    var sub = function subtract(x,y){
        return x - y;
    }
    return [add, sub];
}
undefined
calc();
(2) [ƒ, ƒ]0: ƒ adder(x,y)1: ƒ subtract(x,y)length: 2[[Prototype]]: Array(0)
calc()[0](10,20);
30
calc()[1](10,20);
-10
function calc(){
    var add = function (x,y){
        return x + y;
    }
    var sub = function (x,y){
        return x - y;
    }
    return {add, sub};
}
undefined
var t = calc();
undefined
typeof t;
'object'
t;
{add: ƒ, sub: ƒ}
t.add(10,20);
30
t.sub(10,20);
-10
