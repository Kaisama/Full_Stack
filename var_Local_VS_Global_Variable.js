// function level scope
undefined
function counter(){
    var count = 0; // Local Variable
    count++;
    return count;
}
undefined
counter();
1
counter();
1
counter();
1
counter();
1
counter();
1


var count = 0; // Global Variable
function counter(){
    count++;
    return count;
}
undefined
count;
0
window.count;
0
counter();
1
counter();
2
counter();
3
counter();
4
counter();
5
counter();
6
window.count;
6

// Disadvantage of using global (we can change it).
count = "AMIT";
'AMIT'
counter();
NaN
counter();
NaN

count++;
NaN
