// Task 1: Declare variables
let num1;
let num2;

// Task 2: Assign sample numeric values
num1 = 10;
num2 = 5;

// Task 3: Perform arithmetic operations
console.log("Sum:", num1 + num2);             // Addition
console.log("Difference:", num1 - num2);      // Subtraction
console.log("Product:", num1 * num2);         // Multiplication
console.log("Quotient:", num1 / num2);        // Division

// Task 4: Explore assignment operators
num1 += 5;  // Adds 5 to num1 (num1 = num1 + 5)
num2 *= 2;  // Multiplies num2 by 2 (num2 = num2 * 2)

console.log("Updated num1:", num1);  // 15
console.log("Updated num2:", num2);  // 10

// Task 5: Use comparison operators
console.log("Is num1 equal to num2?", num1 == num2);  // Checks if num1 is equal to num2
console.log("Is num1 greater than num2?", num1 > num2);  // Checks if num1 is greater than num2
console.log("Is num1 not equal to num2?", num1 != num2);  // Checks if num1 is not equal to num2

// Task 6: Apply logical operators
let isPositive = (num1 > 0 && num2 > 0);  // Check if both numbers are positive
let isEven = (num1 % 2 === 0 || num2 % 2 === 0);  // Check if at least one number is even

console.log("Are both numbers positive?", isPositive);  // true
console.log("Is at least one number even?", isEven);     // true
