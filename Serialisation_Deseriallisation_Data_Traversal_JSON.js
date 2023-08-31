var emp = {id: 1001 , name: 'Rohit'};
undefined
var json = JSON.stringify(emp);
undefined
json;
'{"id":1001,"name":"Rohit"}'
typeof(json);
'string'
//Stringify converts all the data of the emp into String 
undefined
JSON.parse(json);
{id: 1001, name: 'Rohit'}

//JSON to object - method is parse (Serialisation)
//Object to JSON - method is stringify   (De-Serialisation)

var jsonn = JSON.stringify(emp);
undefined
jsonn;
'{"id":1001,"name":"Rohit"}'
JSOn.parse(jsonn);
VM796:1 Uncaught ReferenceError: JSOn is not defined
    at <anonymous>:1:1
(anonymous) @ VM796:1
JSON.parse(jsonn);
{id: 1001, name: 'Rohit'}
