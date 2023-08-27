// Is Everything Object in JS?
// No, null, undefined, strings, numbers, boolean, and symbols. These are called primitive values or primitive types, they have pure values.
// but still we are able to access methods & properties.

var a = 10;
undefined
var arr = [10,20,30];
undefined
typeof arr;
'object'
arr.push(100);
4
arr;
(4) [10, 20, 30, 100]
arr.pop();
100
arr;
(3) [10, 20, 30]
arr.unshift(99);
4
arr;
(4) [99, 10, 20, 30]
arr.shift();
99
arr;
(3) [10, 20, 30]
arr.length; // Object
3
a; 
10
typeof a; 
'number'
a.toString(); // Not Object Still we are able to access the methods, due to Auto-Boxing concept
'10'
a;
10
var b = new Number(10);
undefined
a;
10
b;
Number {10}
typeof a;
'number'
typeof b;
'object'
b instanceof Number;
true
typeof Number;
'function'
var name = "Amit"; // Immutable
undefined
typeof name;
'string'
var name2 = new String("Amit"); // Mutable (Wrapper Classes)
undefined
name2;
String {'Amit'}
typeof name2;
'object'
name2 instanceof String;
true
name.toUpperCase(); // Not Object Still we are able to access the methods, due to Auto-Boxing concept
'AMIT'
name; // Immutable will not make any change in original values, it will always create a Copy of Value
'Amit'
typeof name.toUpperCase(); // this is copy of value
'string'
var r = new String("AMIT");
undefined
var g  = "Amit";
undefined
typeof r;
'object'
typeof g;
'string'
g.toLowerCase();
'amit'
r;
String {'AMIT'}
var h = new String("Amit");
undefined
var j = h.toUpperCase(); // this is copy of value
undefined
j;
'AMIT'
typeof j;
'string'
typeof h;
'object'
