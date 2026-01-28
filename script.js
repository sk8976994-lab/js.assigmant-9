// Task 1: Add Two Numbers
function addNumbers(a, b) {
  return a + b;
}
console.log("Task 1:", addNumbers(3, 5)); // 8


// Task 2: Check Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log("Task 2:", checkEvenOdd(7)); // Odd


// Task 3: Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
console.log("Task 3:", celsiusToFahrenheit(0)); // 32


// Task 4: Return Full Name
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log("Task 4:", fullName("Farman", "Khan")); // Farman Khan


// Task 5: Square a Number
function squareNumber(num) {
  return num * num;
}
console.log("Task 5:", squareNumber(4)); // 16


// Task 6: Count Vowels
function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log("Task 6:", countVowels("Hello")); // 2


// Task 7: Find Maximum of Three Numbers
function maxOfThree(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}
console.log("Task 7:", maxOfThree(3, 9, 5)); // 9


// Task 8: Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Task 8:", reverseString("abc")); // cba


// Task 9: Palindrome Check
function isPalindrome(word) {
  word = word.toLowerCase();
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}
console.log("Task 9:", isPalindrome("Madam")); // true


// Task 10: Factorial
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log("Task 10:", factorial(5)); // 120


// Task 11: Largest Number in Array
function largestInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log("Task 11:", largestInArray([2, 7, 4, 9, 1])); // 9


// Task 12: Return Even Numbers Only
function evenNumbers(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}
console.log("Task 12:", evenNumbers([1, 2, 3, 4])); // [2,4]


// Task 13: Sum of Array Numbers
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Task 13:", sumArray([1, 2, 3])); // 6


// Task 13 (Discount): Calculate Discount Price
function calculateDiscount(price, discountPercent) {
  let discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}
console.log("Discount Price:", calculateDiscount(100, 20)); // 80


// Task 14: Generate 4-Digit OTP
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}
console.log("Task 14 OTP:", generateOTP());


// Task 15: Count Words in a Sentence
function countWords(sentence) {
  sentence = sentence.trim();
  let words = sentence.split(" ");
  return words.length;
}
console.log("Task 15:", countWords(" Hello world ")); // 2


// Task 16: Student Grade Calculator
function calculateGrade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  else return "Fail";
}
console.log("Task 16:", calculateGrade(82)); // B


// Task 17: Voting Eligibility
function checkVoting(age) {
  if (age >= 18) return "Eligible";
  else return "Not Eligible";
}
console.log("Task 17:", checkVoting(17)); // Not Eligible
