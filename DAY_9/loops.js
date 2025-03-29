// 1. Print Numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("-----------------------------------");

// 2. Print Even Numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("-----------------------------------");

// 3. Sum of First 10 Natural Numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of first 10 natural numbers is:", sum);
console.log("-----------------------------------");

// 4. Multiplication Table of a Number
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
console.log("-----------------------------------");

// 5. Factorial of a Number
let factNum = 5;
let fact = 1;
for (let i = 1; i <= factNum; i++) {
    fact *= i;
}
console.log(`Factorial of ${factNum} is ${fact}`);
console.log("-----------------------------------");

// 6. Reverse a Number
let revNum = 1234;
let reversed = 0;
while (revNum !== 0) {
    let digit = revNum % 10;
    reversed = reversed * 10 + digit;
    revNum = Math.floor(revNum / 10);
}
console.log("Reversed number is:", reversed);
console.log("-----------------------------------");

// 7. Check Prime Number
let primeCheck = 29;
let isPrime = true;
if (primeCheck < 2) {
    isPrime = false;
}
for (let i = 2; i <= Math.sqrt(primeCheck); i++) {
    if (primeCheck % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`${primeCheck} is ${isPrime ? "a prime" : "not a prime"} number`);
console.log("-----------------------------------");

// 8. Fibonacci Series up to n terms
let terms = 10;
let a = 0, b = 1;
console.log("Fibonacci Series:");
for (let i = 1; i <= terms; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
console.log("-----------------------------------");

// 9. Count Digits in a Number
let digitCountNum = 123456;
let count = 0;
let temp = digitCountNum;
while (temp !== 0) {
    temp = Math.floor(temp / 10);
    count++;
}
console.log(`Number of digits in ${digitCountNum} is: ${count}`);
console.log("-----------------------------------");

// 10. Sum of Digits of a Number
let sumDigitsNum = 1234;
let sumDigits = 0;
while (sumDigitsNum !== 0) {
    sumDigits += sumDigitsNum % 10;
    sumDigitsNum = Math.floor(sumDigitsNum / 10);
}
console.log("Sum of digits is:", sumDigits);
console.log("-----------------------------------");

// 11. Armstrong Number Check (3 digits)
let armNum = 153;
let original = armNum, armSum = 0;
while (armNum !== 0) {
    let digit = armNum % 10;
    armSum += digit ** 3;
    armNum = Math.floor(armNum / 10);
}
console.log(`${original} is ${original === armSum ? "an Armstrong" : "not an Armstrong"} number`);
console.log("-----------------------------------");

// 12. Print a Pattern (Right Triangle Star)
let rows = 5;
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}
console.log("-----------------------------------");

// 13. Print Multiples of 3 between 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
console.log("-----------------------------------");

// 14. Print all Divisors of a Number
let divNum = 36;
console.log(`Divisors of ${divNum}:`);
for (let i = 1; i <= divNum; i++) {
    if (divNum % i === 0) {
        console.log(i);
    }
}

console.log("-----------------------------------");
