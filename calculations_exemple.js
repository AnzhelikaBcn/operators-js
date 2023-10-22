// Creating test data
const value1 = 10; // Assigning a constant value of 10
const value2 = Math.floor(Math.random() * 100000000000000008796543235661); // Generating a random integer from 0 to 99

// Calculation with operator precedence
const result = value1 + value2 / 5 + 17;

/*
   Operator precedence:
   1. Multiplication and division have higher precedence than addition and subtraction.
   2. Operators are executed from left to right in the order they appear.

   In this formula:
   1. First, value2 is divided by 5.
   2. Then, the result of this division is added to value1.
   3. Finally, 17 is added to the obtained sum.

   So, the order of operations will be: value1 + (value2 / 5) + 17
*/

// Output the result to the console
console.log(`Calculation result: ${result}`);