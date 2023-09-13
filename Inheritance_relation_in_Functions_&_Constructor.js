// Basically in this we are doing linkaging of the objects

/*

Ques.
Create a Person Function , Having Id, Name, Age, City
Create a Employee Function. Having Salary, Bonus, CompanyName
Make a RelationShip b/w Employee and Person
BY Using proto​​ and prototype
Hint : Use Call 

Think about how Chain RelationShip (Inheritance) and One Function Constructor call another Function Constructor like super constructor call.

*/


// Person function constrcutor

function Person(id, name, city){
    this.id = id;
    this.name = name;
    this.city = city;
}
Person.prototype.printPersonDetails = function(){
    console.log(`Id ${this.id} Name ${this.name} City ${this.city}`);
}


// Employee function constructor

function Employee(salary, bonus, dept){
    this.salary = salary;
    this.bonus = bonus;
    this.dept = dept;
}
Employee.prototype.printEmployeeDetails = function(){
    console.log(`Salary ${this.salary} Bonus ${this.bonus} Dept ${this.dept}`);
}


typeof Person;
'function'
typeof Person.prototype;
'object'

typeof Employee;
'function'
typeof Employee.prototype;
'object'


Employee.prototype.__proto__ == Object.prototype;   // connected with GOD function
true
Employee.prototype.__proto__ == Person.prototype.__proto__;   // both functions are connected with GOD function
true
Employee.prototype.__proto__ = Person.prototype    // creating linkage.
{printPersonDetails: ƒ, constructor: ƒ}printPersonDetails: ƒ ()constructor: ƒ Person(id, name, city)[[Prototype]]: Object

Employee.prototype.__proto__ == Object.prototype;   // now it's pointing to Person's Prototype instead of GOD function.
false
Employee.prototype.__proto__ == Person.prototype;  // Linkage created...
true


// Updating employee function for creating linkage...
function Employee(id, name, city, salary, bonus, dept){      // id ,name, city (Give it to the Person)
    console.log(' this is ', this);
    //var p = new Person()   // not using this, bcz we don't want to create object of person. We wan't to call person using employee Object.
    Person.call(this, id, name, city); // bind this (Employee) with Person
    this.salary = salary;
    this.bonus = bonus;
    this.dept = dept;
}
Employee.prototype.printEmployeeDetails = function(){
    console.log(`Salary ${this.salary} Bonus ${this.bonus} Dept ${this.dept}`);
}

Employee.prototype.__proto__ == Person.prototype;  // linkage broken..... bcz we have updated the function..
false
Employee.prototype.__proto__ = Person.prototype;   // creating linkage again...
{printPersonDetails: ƒ, constructor: ƒ}
Employee.prototype.__proto__ == Person.prototype;  // Linkage created...
true

var amit =new Employee(1001, 'amit','delhi',222222,2222,'IT');
this is  Employee {}

amit;               // now we are Able to access both the functions...
Employee {id: 1001, name: 'amit', city: 'delhi', salary: 222222, bonus: 2222, …}
amit.printEmployeeDetails();   // also able to access unique functions....
Salary 222222 Bonus 2222 Dept IT

amit.printPersonDetails();    // also able to access unique functions....
Id 1001 Name amit City delhi

amit;
Employee {id: 1001, name: 'amit', city: 'delhi', salary: 222222, bonus: 2222, …}


// chaining behind the scene..
amit.__proto__ == Employee.prototype;
true
amit.__proto__.__proto__ == Person.prototype;
true
amit.__proto__.__proto__.__proto__ == Object.prototype;
true
amit.__proto__.__proto__.__proto__.__proto__ == null;
true


// Problem is that we have to call both the functions...
amit.printEmployeeDetails();
Salary 222222 Bonus 2222 Dept IT

amit.printPersonDetails();
Id 1001 Name amit City delhi


// Resolving issue...
Employee.prototype.printEmployeeDetails = function(){
    this.printPersonDetails();
    console.log(`Salary ${this.salary} Bonus ${this.bonus} Dept ${this.dept}`);
}

amit.printEmployeeDetails();
Id 1001 Name amit City delhi
Salary 222222 Bonus 2222 Dept IT




/*

Ques.
Create a Person Function , Having Id, Name, Age, City
Create a Employee Function. Having Salary, Bonus, CompanyName
Make a RelationShip b/w Employee and Person

*/

// ES6 Class Style

class A{
    
}

typeof A;
'function'

class Person{
    constructor(id, name, city){
        this.id = id;
        this.name = name;
        this.city = city;
}
    printPersonDetails(){
        console.log(`Id ${this.id} Name ${this.name} City ${this.city}`);
    }
}

class Employee extends Person{
    constructor(id, name , city, salary, bonus, dept){
        super(id, name, city);
        this.salary = salary;
        this.bonus = bonus;
        this.dept = dept;
    }
    printEmployeeDetails(){
        super.printPersonDetails();
        console.log(`Salary ${this.salary} Bonus ${this.bonus}  Dept ${this.dept}`);
    }
}

typeof Person;
'function'
typeof Employee;
'function'
Person.prototype
{constructor: ƒ, printPersonDetails: ƒ}
Employee.prototype;
Person {constructor: ƒ, printEmployeeDetails: ƒ}
Employee.prototype.__proto__ == Person.prototype;
true

var amit =new Employee(1001, 'amit','delhi',222222,2222,'IT');
amit;
Employee {id: 1001, name: 'amit', city: 'delhi', salary: 222222, bonus: 2222, …}
amit.printEmployeeDetails();
 Id 1001 Name amit City delhi
 Salary 222222 Bonus 2222  Dept IT



// Extra concepts about ES6
class Q{
    static show(){
        console.log("Q Show ");
    }
}
Q.show();
Q Show 

typeof Q;
'function'
function T(){
    console.log("T ");
}

T.show= function(){
    console.log("SHow ");
}

T.show();
SHow 

var w = new Object();
w;
{}

var f = new Function();
f;
ƒ anonymous(
) {

}
typeof f;
'function'
typeof w;
'object'
