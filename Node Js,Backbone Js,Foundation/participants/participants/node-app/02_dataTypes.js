//Order of eval and how stirng affects the eval
var x = 16 + "Volvo";
console.log(x);

var x = "16" + "Volvo";
console.log(x);

var x = 16 + 4 + "Volvo";
console.log(x);

var x = "Volvo" + 16 + 4;
console.log(x);

//Double v/s Single Quotes
var answer = "It's alright";             // Single quote inside double quotes
console.log(answer);

var answer = "He is called 'Johnny'";    // Single quotes inside double quotes
console.log(answer);

var answer = 'He is called "Johnny"';    // Double quotes inside single quotes
console.log(answer);

//Numbers
var x1 = 34.25;     // Written with decimals
console.log(x1);

var x2 = 34;        // Written without decimals
console.log(x2);

var y = 123e5;      // 12300000
console.log(y);

var z = 123e-5;     // 0.00123
console.log(z);

//Array
var cars = [ "Saab", "Volvo", "BMW" ];// Now x is a array
console.log(cars);
console.log(typeof cars);

//Typeof examples on various datatypes
var yy;               // Now y is undefined
console.log(typeof yy);

var x = 5;           // Now x is a Number
console.log(typeof x);

var x = 3.14;           // Now x is a Number
console.log(typeof x);

var x = "John";      // Now x is a String
console.log(typeof x);

var x = false;           // Now x is a boolean
console.log(typeof x);

var x = true;           // Now x is a boolean
console.log(typeof x);

var x = {name:'John', age:34};           // Now x is a object
console.log(typeof x);

//Null and undefined
var person1 = null;           // Value is null, but type is still an object
console.log(typeof person1);

var person2 = undefined;     // Value is undefined, type is undefined
console.log(typeof person2);

console.log();
