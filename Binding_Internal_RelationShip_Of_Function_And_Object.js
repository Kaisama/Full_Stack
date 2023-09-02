// IQ - Internal RelationShip of Function and Object

// Function Constructor

function Customer(id, name, balance){
    console.log('this is ', this);
    this.id = id;
    this.name = name;
    this.balance = balance;
}

// Explicit Binding

var tom = new Customer(1001, "Tom", 2222); // Explicit Binding of an Object
VM307:4 this is  Customer {}
undefined
tom;
Customer {id: 1001, name: 'Tom', balance: 2222}

// Default Binding

// by defualt this is bing with the window object.

Customer(111, 'WWWWW',22222); // window.Customer(111, 'WWWWW',22222);
VM307:4 this is  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
undefined
window.id;
111
window.name;
'WWWWW'
window.balance;
22222

Customer.prototype;
{constructor: ƒ}
Customer.call;
ƒ call() { [native code] }
