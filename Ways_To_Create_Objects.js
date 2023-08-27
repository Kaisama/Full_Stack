// 1st Method
var obj = {x:10, y:20}; // Object Literal
undefined
typeof obj;
'object'
obj instanceof Object;
true
typeof Object;
'function'
obj.z = 100;   // Objects are dynamic in nature
100
obj;
{x: 10, y: 20, z: 100}
delete obj.z;
true
obj.x = 90;
90
obj;
{x: 90, y: 20}

// 2nd Method
var e = new Object();
undefined
e;
{}
var g = {};
undefined
g;
{}
typeof e;
'object'
typeof g;
'object'

// 3rd Method
var f = Object.create(null);
undefined
f;
{}
typeof f;
'object'
obj;
{x: 90, y: 20}
e;
{}
g;
{}
e==g;   they have diff refernce 
false
e===g;
false
obj;
{x: 90, y: 20}

// we don't do this while cloning an Object bcz they will point at same address
var obj2 = obj;
undefined
obj2 ===obj;
true

// 4th Method   Using Spread Operator for Creating a Clone Object
var obj3 = {...obj};
undefined
obj3;
{x: 90, y: 20}
obj3 === obj; // if clone then address is different
false
