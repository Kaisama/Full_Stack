DOT Operator we can access only String Key
[] Operator we can access String Key, Numeric Key, Special Key, Dynamic Key

var emp = {id:1001, name:'Ram'};
undefined

// Using DOT Operator OR (Member Access Operator)
emp.id;
1001
emp.name;
'Ram'
emp;
{id: 1001, name: 'Ram'}
typeof emp;
'object'
emp instanceof Object;
true
typeof Object;
'function'

// Using [ ] Operator (Associative Array Operator)
emp['id'];
1001
emp['name'];
'Ram'
emp;
{id: 1001, name: 'Ram'}

// Diff b/w [] & . Operator
// Using square Operator we can able to access numeric key, as comapred to (.) Operator
var msdhoni = {name:'MS DHONI', age: 42, 100: 15, 50:52};
undefined
msdhoni.name;
'MS DHONI'
msdhoni.age;
42
msdhoni.50; // we won't able to acess numeric key using DOT Operator
VM429:1 Uncaught SyntaxError: Unexpected number
msdhoni['name'];
'MS DHONI'
msdhoni['age'];
42
msdhoni[50];  // we are able to acess numeric key using [] Operator
52
msdhoni[100];
15
msdhoni.city = 'Delhi';
'Delhi'
msdhoni;
{50: 52, 100: 15, name: 'MS DHONI', age: 42, city: 'Delhi'}
msdhoni.6 = 500;   // we won't able to add numeric key using DOT Operator
VM571:1 Uncaught SyntaxError: Unexpected number
msdhoni[6] = 500;  // we are able to add numeric key using [] Operator
500
msdhoni;
{6: 500, 50: 52, 100: 15, name: 'MS DHONI', age: 42, city: 'Delhi'}

// Special Character such as space we can add using [] Operator
msdhoni['current address'] = 'New Delhi';   // we are able to add key with space in b/w values using [] Operator
'New Delhi'
msdhoni.full name = "M.S . Dhoni";
VM752:1 Uncaught SyntaxError: Unexpected identifier 'name'
msdhoni."full name" = "M.S . Dhoni";  // we are not able to add key with space in b/w values using DOT Operator
VM757:1 Uncaught SyntaxError: Unexpected string

// Access variable by using [] Operator

var key = "age";
undefined
msdhoni.key; // can't able to access using DOT Operator
undefined
msdhoni[key]; // Able to access using [] Operator
42



// More Example

var dhoni = {id:7, name:'MS Dhoni'};
undefined
dhoni.id;
7
dhoni.name;
'MS Dhoni'

dhoni['id'];
7
dhoni['name'];
'MS Dhoni'

var dhoni = {id:7, name:'MS Dhoni', 100:10};
undefined
dhoni.100;
VM204:1 Uncaught SyntaxError: Unexpected number

dhoni[100];
10

dhoni.50 = 51;
VM265:1 Uncaught SyntaxError: Unexpected number
dhoni[50] = 51;
51
dhoni;
{50: 51, 100: 10, id: 7, name: 'MS Dhoni'}

dhoni.full address = "New Delhi";
VM375:1 Uncaught SyntaxError: Unexpected identifier 'address'
dhoni.['full address'] = "New Delhi";
VM383:1 Uncaught SyntaxError: Unexpected token '['
dhoni['full address'] = "New Delhi";
'New Delhi'
dhoni;
{50: 51, 100: 10, id: 7, name: 'MS Dhoni', full address: 'New Delhi'}
dhoni['full address'];
'New Delhi'
var r = 'id';
undefined
dhoni.r;
undefined
dhoni[r];
7
