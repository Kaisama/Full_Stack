var add = (x,y)=>x+y;  // if code is of single lines then writing return implicitly.
undefined
typeof add;
'function'
add(10,20);
30

// Pure Function
function show(){
    console.log(" i am the show ");
}
undefined
show();
VM260:2  i am the show 

var e = new show();
VM260:2  i am the show 
undefined
typeof e;
'object'
e instanceof show;
true
show.constructor;
ƒ Function() { [native code] }
add(10,20);
30
var t = new add(10,20);
VM529:1 Uncaught TypeError: add is not a constructor
    at <anonymous>:1:9
(anonymous) @ VM529:1
add.constructor;
ƒ Function() { [native code] }
add(10,20);
30
var f = new add(10,20);
VM655:1 Uncaught TypeError: add is not a constructor
    at <anonymous>:1:9
(anonymous) @ VM655:1
var adder = (x,y)=>{
    console.log(x, y);
    return x + y;    // if code is of multiple lines then writting return explicitly is imp.
}
undefined
adder(10,20);
VM798:2 10 20
30
console.dir(show);
VM901:1 ƒ show()arguments: nullcaller: nulllength: 0name: "show"prototype: {constructor: ƒ}[[FunctionLocation]]: VM260:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[1]
undefined
console.dir(add);
VM948:1 add()length: 2name: "add"arguments: (...)caller: (...)[[FunctionLocation]]: VM60:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[1]
undefined
var myadd = ()=>{
    console.log(arguments.length);
}
undefined
function disp(){
    console.log(arguments.length);
}
undefined
disp(10,20); // working fine bcz it's not an Arrow function
VM1202:2 2
undefined
myadd(10,20);  //  this will give error bcz it is an Arrow function, Pure function.
VM1070:2 Uncaught ReferenceError: arguments is not defined
    at myadd (<anonymous>:2:17)
    at <anonymous>:1:1
myadd @ VM1070:2
(anonymous) @ VM1275:1
var myadd = (...a)=>{   // if we want to pass multiple arguments then we have to use REST method
    console.log(a.length);
}
undefined
myadd(10,20,30,40);
VM1320:2 4
undefined
var g =()=>"Hello";  // writing brackets when there is no argument is compulsory
undefined
g();
'Hello'
var y = x=>x*x;   // not writing brackets when there is one argument is optional
undefined
y(10);
100
