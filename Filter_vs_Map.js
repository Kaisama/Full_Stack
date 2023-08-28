// Filter vs Map

var arr = [10, 20, 30, 40, 50, 60];
undefined

// Filter creates the array(basically array length) on the basis of the condition

var g = arr.filter(w=>true);
undefined
g;
(6) [10, 20, 30, 40, 50, 60]
g === arr1;
false

arr;
(6) [10, 20, 30, 40, 50, 60]

// Map creates the array(basically array length) same as the given array

var j = arr.map(e=>e*2);
undefined
j;
(6) [20, 40, 60, 80, 100, 120]

// more example

var prices = [10000, 200000, 40000000, 6000.5];
undefined
prices;
(4) [10000, 200000, 40000000, 6000.5]

var p = 100000;
undefined
p.toLocaleString('hi');
'1,00,000'
p.toLocaleString('us');
'100,000'
p.toLocaleString('fr');
'100 000'

var formattedPrices = prices.map(p=>`Rs${p.toLocaleString('hi')}`);
undefined
formattedPrices;
(4) ['Rs10,000', 'Rs2,00,000', 'Rs4,00,00,000', 'Rs6,000.5']
