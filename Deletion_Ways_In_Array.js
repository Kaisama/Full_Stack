// Deletion ways in array

var arr = [10,20,1,2,90,33, 88];
undefined


arr.pop();  // delete a element from the last
88
arr;
(6) [10, 20, 1, 2, 90, 33]  // result


arr.shift();  // delete a element from the starting
10
arr.splice(1, 1);  // From Index 1 delete only one element
[1]
arr;
(4) [20, 2, 90, 33]   // result


arr.length=0;  // this will remove all the elemets from the array as length is 0 now.
0
arr;
[]


var arr = [10,20,1,2,90,33, 88];
undefined
arr.length = 4;  // this will remove all the elemets from the array except staring given length.
4
arr;
(4) [10, 20, 1, 2]  // result


var arr = [10,20,1,2,90,33, 88];
undefined
arr = arr.filter(e=>e<30);   // this will remove all the elements which are greater than 30. // DECLARATIVE PROGRAMING
(4) [10, 20, 1, 2]
arr;
(4) [10, 20, 1, 2]


var arr = [10,20,1,2,90,33, 88];
undefined
arr = arr.reduce((temp, e)=>{   // this will remove all the elements which are greater than 30. // IMPARATIVE PROGRAMING
    if(e<30){
        temp.push(e);
    }
    return temp;
}, []);
(4) [10, 20, 1, 2]
arr;
(4) [10, 20, 1, 2]

arr[0] = 10000;   // Updation in array
10000
arr;
(4) [10000, 20, 1, 2]
