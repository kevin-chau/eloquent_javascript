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



// Return values
console.log(Math.max(2, 4));
// → 4

// Function calls are expressions themselves, and can be used within larger expressions
console.log(Math.min(2, 4) + 100);
// → 102


/* Control Flow */

// This won't run in node. Use a browser for the prompt() function
/* let theNumber = Number(prompt("Pick a number")); 
console.log("Your number is the square root of " + theNumber * theNumber); */


// Conditional execution (if)
// Execution takes 1 of 2 branches

// show the square of the input only if the input is actually a number:
/* let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + theNumber * theNumber);
} */


// One liner if statement
if (1 + 1 == 2) console.log("It's true"); // -> true


// Else statement
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//     console.log("Hey. Why didn't you give me a number?");
// }

// Chaining with else if 
// let num = Number(prompt("Pick a number"));
// if (num < 10) {
//     console.log("Small");
// } else if (num < 100) {
//     console.log("Medium");
// } else {
//     console.log("Large");
// }



// Output all even numbers from 0 to 12
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

// Loop version
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

// calculate 2^10
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
// -> 1024


// Do loop
/* let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log("Hello " + yourName); */


// Indentation
if (false != true) {
    console.log("That makes sense."); 
    if (1 < 2) {
        console.log("No surprise there."); 
    }
}


// For loop
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}


// Compute 2 ** 10 with a while loop
let result2 = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result2 = result2 * 2;
}
console.log(result2);
// -> 1024


// Breaking out of a loop
for (let current = 20; ; current = current + 1) {
   if (current % 7 == 0) {
     console.log(current);
break; }
}
// → 21


// increment and decrement operators
for (let number = 0; number <= 12; number += 2) {
    console.log(number);
}
// ++ or --



// Switch statement
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}
