/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2; // result becomes a number due to the (-) expression. 
console.log("The result is: " + result); // result is used as a string with the (+) expression. No change needed.

let isValid = Boolean(Number("false")); // Number("false") returns a blank string: ""  Blank Strings that are converted to Boolean results in false
if (isValid) { // isValid is made false
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // Number(age) returns a number instead of a string. This allows number + number to work.
console.log("Total Age: " + totalAge);

// Implicit type conversion

let input = null;
console.log(input);

if(input){  // This converts input to Boolean
    console.log("This is valid");
} else {
    console.log("This is invalid");
}

// Explicit type conversion

let money = "10.00";
console.log(money);
console.log("We need to have " + parseInt(money) + " Dollars.");