// this function is going to take a lot of time first this will complete all the loops then return the result

function cube(num){
    for(let i = 1; i<=100000; i++){
        for(let j = 1; j<=10000; j++){
            // heavy-duty work as loops are too big.
        }
    }
    return num**3;
}
undefined

                     // PROBLEM
// if the function does some heavy-duty work, then, computing the result again and again with the same parameter will lead to wastage of time.
cube(3);     
27
Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// Good Solution

// This is where memoization comes in, by using memoization we can store(cache) the computed results based on the parameters. 
// If the same parameter is used again while invoking the function, instead of computing the result, we directly return the stored (cached) value.


var cache = {};  // we have created object of cache instead array, because object will complete the work in constant time and array will definately took some what n or logn time.
function cube(num){
    if(cache[num]){
        return cache[num];
    }
    for(let i = 1; i<=10000; i++){
        for(let j = 1; j<=10000; j++){
            
        }
    }
    cache[num] = num ** 3;
    return cache[num];
}
undefined

cube(3);    // this will take time to print the result bcz it's printing 1st time
27
Window {window: Window, self: Window, document: document, name: '', location: Location, …}

cache;     
{3: 27}

cube(3);   // instead of computing the result again, it returns the cached result.
27

cube(5);  // this will take time to print the result bcz it's printing 1st time
125

cache;    // data in cache memory.
{3: 27, 5: 125}

cube(5);   // instead of computing the result again, it returns the cached result.
125
