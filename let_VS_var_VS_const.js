// VAR

function show(){
    // var e ; // Hoisting
    console.log("E is ", e); // undefined
    if(10>2){
        var e = 10; // e = 10;
    }
    console.log(e);
}
undefined
show();
VM203:3 E is  undefined
VM203:7 10
undefined

function show(){
     console.log("E is ", e); // undefined
   var e = 20;
    console.log("E is ", e); // 20
    if(10>2){
        var e = 10; // e = 10;
         console.log("E is ", e); // 10
    }
    var e  = 30;
    console.log(e); //30;
}
undefined
show();
VM272:2 E is  undefined
VM272:4 E is  20
VM272:7 E is  10
VM272:10 30
undefined



// LET

function show(){
     console.log("E is ", e); // Error
   
    if(10>2){
        let e = 10; // e = 10;
         console.log("E is ", e); // 10
    }
    
    console.log(e); //Error;
}
undefined
show();
VM325:2 Uncaught ReferenceError: e is not defined           // here let has block scope, so can't able to do hoisting outside function
    at show (<anonymous>:2:27)
    at <anonymous>:1:1
show @ VM325:2
(anonymous) @ VM346:1


function show(){
    if(10>2){
        console.log("E is ", e); // Error
        let e = 10; // e = 10;
         console.log("E is ", e); // 10
    }
    
    console.log(e); //Error;
}
undefined
show();
VM356:5 Uncaught ReferenceError: Cannot access 'e' before initialization  
    at show (<anonymous>:5:30)        // here, Hoisting is done inside the if statement but it wasn't initialized.
    at <anonymous>:1:1                  // let jha par declare hota h hmesha uske niche se hi execution start krta hai.
show @ VM356:5
(anonymous) @ VM378:1


function show(){
    let e = 20;
    console.log('E is ', e);
    if(10>2){
        let e = 10; // e = 10;
         console.log("E is ", e); // 10
    }
    console.log(e);   // 20
}
undefined
show();
VM434:4 E is  20
VM434:8 E is  10
VM434:11 20
undefined


function show(){
       let e = 20;
    console.log('E is ', e);
    if(10>2){
        let e = 10; // e = 10;
         console.log("E is ", e); // 10
    }
    let e = 100;
    console.log(e); //Error;
}
VM469:10 Uncaught SyntaxError: Identifier 'e' has already been declared    // re-declaration wasn't allowed.


let rr = 100;
undefined
window.rr;    // we can't access let on window object because let jha par declare hota h hmesha uske niche se hi execution start krta hai.
undefined



// CONST 

const MAX  = 100;
undefined
MAX++;      // we can't re-initialize const values.
VM586:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:4
(anonymous) @ VM586:1
MAX = 200;       // we can't re-initialize const values.
VM607:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:5
(anonymous) @ VM607:1


const obj = {id:1001, name:'Ram'};
undefined
obj.id++;      // This is possible because in obj reference is stored not the values. and we are only changing values instead of addresses.
1001
obj;
{id: 1002, name: 'Ram'}

obj = {};   // This is not possible because we are trying to change the constant address.
VM734:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:5
(anonymous) @ VM734:1


const arr = [10,20,30];
undefined
arr[0] = 1111;   // This is possible because in obj reference is stored not the values. and we are only changing values instead of addresses.
1111
arr;
(3) [1111, 20, 30]

arr = [100,200,300];  // This is not possible because we are trying to change the constant address.
VM911:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:5
(anonymous) @ VM911:1
