// Currying is an advanced technique to transform a function of n arguments to n functions of one or fewer arguments.
// if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).
// Also we can say that it is following Single Responsibility Principle (SRP) principle.


function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

multiply(4, 3); // Returns 12
curriedMultiply(4)(3); // Also returns 12

//As one can see in the code above, we have transformed the function multiply(a,b) to a function curriedMultiply , which takes in one parameter at a time.


function mixVeg(oil){
    return function(veggies){
        return function(toppings){
            return "Final Rec "+oil +" "+veggies +" "+toppings;
        }
    }
}

mixVeg('Coc Oil ')('Mix Vegs')('Greens Chille');
'Final Rec Coc Oil  Mix Vegs Greens Chille'
