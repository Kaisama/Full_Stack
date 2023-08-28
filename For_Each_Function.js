// void type
// It's a function and there is a loop going inside for traversal. It is Declarative Programming
// In for_of we have to make it traverse. It is Imperative Programming.

var arr = [10, 20, 30, 40, 50, 60];
undefined
arr.forEach(e=>console.log(e));
VM1128:1 10
VM1128:1 20
VM1128:1 30
VM1128:1 40
VM1128:1 50
VM1128:1 60
undefined

arr.forEach((element, index)=>console.log(index, element));
VM1185:1 0 10
VM1185:1 1 20
VM1185:1 2 30
VM1185:1 3 40
VM1185:1 4 50
VM1185:1 5 60
