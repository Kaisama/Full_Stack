
// If you are applying ... with function then it is a Rest
// If you are applying ... with Object/ array then it is a Spread


var arr = [10,20,30];
undefined
var arr2 = [100,200,300];
undefined
var arr3 = [arr, arr2]; // this will acts as a 2-D array
undefined
arr3;
(2) [Array(3), Array(3)]
arr3[0][0];  // Printing 2-D array
10

// Spread Operator
var arr4 = [...arr, ...arr2]; // this will copy values into new Array
undefined
arr4;
(6) [10, 20, 30, 100, 200, 300]   //These are the copied values

var emp  = {id:1001, name:'Ram', salary:10000};
undefined
var dept = {id:1, name:'IT'};
undefined
var empdept = {emp, dept}; // this is an Object Short Hand in Echma Script 2015 onwards (ES6). Here, emp & dep is key, their address is values
undefined
empdept;
{emp: {…}, dept: {…}}
  dept: {id: 1, name: 'IT'}
  emp: {id: 1001, name: 'Ram', salary: 10000}
  [[Prototype]]: Object
empdept.emp.id; // nested object access 
1001
empdept.dept.id;
1

// Spread Operator
var empdeptobj = {...emp, ...dept}; // this will copy last updates values into new Object
undefined
empdeptobj;
{id: 1, name: 'IT', salary: 10000}  // These are the copied values
arr;
(3) [10, 20, 30]
arr2;
(3) [100, 200, 300]
arr3;
(2) [Array(3), Array(3)]
  0: (3) [10, 20, 30]
  1: (3) [100, 200, 300]
  length: 2
  [[Prototype]]: Array(0)


// this is how we are treating mutable as immutable
arr3[0][0] ;
10
arr3[0][0]  = 1000;
1000
arr3[0][0] ;
1000
arr;
(3) [1000, 20, 30]
arr4;
(6) [10, 20, 30, 100, 200, 300]
arr4[1]=2000;
2000
arr4;
(6) [10, 2000, 30, 100, 200, 300]
arr;
(3) [1000, 20, 30]



// Rest Operator

function show(...args){  // we can take n arguments
    console.log('Args ', args); // take inputs in the form of an array
    console.log(typeof args);
    console.log('Instance of ', args instanceof Array);
}
undefined
show();
VM289:2 Args  []  // take inputs in the form of an array
VM289:3 object
VM289:4 Instance of  true
undefined

show(10,20);
VM289:2 Args  (2) [10, 20]
VM289:3 object
VM289:4 Instance of  true
undefined

show(10,20,30,40,50);
VM289:2 Args  (5) [10, 20, 30, 40, 50]0: 101: 202: 303: 404: 50length: 5[[Prototype]]: Array(0)
VM289:3 object
VM289:4 Instance of  true
undefined

function show(...w, ...args){             // error we can only make Rest parameter as last
    console.log('Args ', args);
    console.log(typeof args);
    console.log('Instance of ', args instanceof Array);
}
VM385:1 Uncaught SyntaxError: Rest parameter must be last formal parameter


function show(x,y,z, ...args){
    console.log('X is ', x, 'Y is ', y, 'Z is ', z, ' Args is ', args);
    console.log('Args ', args); // take inputs in the form of an array
    console.log(typeof args);
    console.log('Instance of ', args instanceof Array);
}
undefined
show(1,2,3,90,100,200);
VM546:2 X is  1 Y is  2 Z is  3  Args is  (3) [90, 100, 200]
VM546:3 Args  (3) [90, 100, 200]
VM546:4 object
VM546:5 Instance of  true
undefined

// What is before Rest Operator?
// before this still functions have the capability to take arguments but rest just expose these capability.

function disp(){
    console.log(" i am the disp ");
}
undefined
disp();
VM678:2  i am the disp 
undefined
disp(10,20); 
VM678:2  i am the disp 
undefined
disp("Amit");
VM678:2  i am the disp 
undefined
disp("Amit",10, true, [10,20]);
VM678:2  i am the disp 
undefined
console.dir(disp);
VM915:1 ƒ disp()arguments: nullcaller: nulllength: 0name: "disp"prototype: {constructor: ƒ}[[FunctionLocation]]: VM678:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[1]
undefined
function disp(){
    console.log(" i am the disp ", arguments.length);
}
undefined
disp();
VM1002:2  i am the disp  0
undefined
disp(10);
VM1002:2  i am the disp  1
undefined
disp(10,20);
VM1002:2  i am the disp  2
undefined
disp(10,20,30);
VM1002:2  i am the disp  3
undefined
disp(10,20,30,40);
VM1002:2  i am the disp  4
undefined
disp(10,20,30,40,[100,200]);
VM1002:2  i am the disp  5
undefined

function disp(){
    console.log(" i am the disp ", arguments.length);
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
}
undefined
disp();
VM1285:2  i am the disp  0
VM1285:3 object
VM1285:4 false
undefined
function output(...a){
    console.log(typeof a);
    console.log(a instanceof Array);
}
undefined
output();
VM1370:2 object
VM1370:3 true
undefined
function disp(){
    console.log(arguments);
    console.log(" i am the disp ", arguments.length);
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
}
undefined
disp();
VM1455:2 Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]callee: ƒ disp()length: 0Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
VM1455:3  i am the disp  0
VM1455:4 object
VM1455:5 false
undefined
disp(10,20);
VM1455:2 Arguments(2) [10, 20, callee: ƒ, Symbol(Symbol.iterator): ƒ]
VM1455:3  i am the disp  2
VM1455:4 object
VM1455:5 false
undefined
function disp(){
    for(var i = 0; i<arguments.length; i++){
    console.log(arguments[i]);
    }
    console.log(arguments);
    console.log(" i am the disp ", arguments.length);
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
}
undefined
disp(10,20,30,40,50);
VM1652:3 10
VM1652:3 20
VM1652:3 30
VM1652:3 40
VM1652:3 50
VM1652:5 Arguments(5) [10, 20, 30, 40, 50, callee: ƒ, Symbol(Symbol.iterator): ƒ]
VM1652:6  i am the disp  5
VM1652:7 object
VM1652:8 false
undefined
