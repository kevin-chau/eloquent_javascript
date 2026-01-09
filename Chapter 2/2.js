// This is a program
// The simplest kind of statement is a (literal) expression with a semicolon
1;
!false;

/* Bindings */
let caught = 5 * 5;

// After a binding has been defined, its name can be used as an expression.
let ten = 10;
console.log(ten * ten);
// -> 100


let mood = "light";
console.log(mood); // → light
mood = "dark"; 
console.log(mood); // → dark


let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// -> 105


// A single let statement may define multiple bindings
let one = 1, two = 2;
console.log(one + two);
// -> 3

// The words var and const can also be used to create bindings
var name = "Ayda"; // pre-2015 binding syntax
const greeting = "Hello "; // immutable binding
console.log(greeting + name); // → Hello Ayda

const my_name = "Kevin";
console.log(my_name)
// my_name = "Hank"; // Uncaught TypeError: Assignment to constant variable.



// Full list of keywords and reserved words
/*
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
*/