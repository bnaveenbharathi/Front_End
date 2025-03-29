// 1. Equality Check
let num1 = 15, num2 = 15;
console.log(num1 === num2 ? "Number1 and Number2 are equal" : "Number1 and Number2 are not equal");
console.log("-----------------------------------");
// 2. Even or Odd Check
let number = 15;
console.log(`${number} is an ${number % 2 === 0 ? "even" : "odd"} integer`);
console.log("-----------------------------------");

// 3. Positive or Negative Check
let n = 15;
if (n > 0) {
    console.log(`${n} is a positive number`);
} else if (n < 0) {
    console.log(`${n} is a negative number`);
} else {
    console.log("The number is zero");
}
console.log("-----------------------------------");

// 4. Leap Year Determination
let year = 2016;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
console.log("-----------------------------------");

// 5. Voting Eligibility
let age = 21;
console.log(age >= 18 ? "Congratulation! You are eligible for casting your vote." : "You are not eligible for voting.");
console.log("-----------------------------------");

// 6. Signum Function Implementation
let m = -5;
let result = (m > 0) ? 1 : (m === 0) ? 0 : -1;
console.log(`The value of n = ${result}`);
console.log("-----------------------------------");

// 7. Height Categorization
let height = 135;
if (height < 150) {
    console.log("The person is Dwarf.");
} else if (height <= 165) {
    console.log("The person is average heighted.");
} else {
    console.log("The person is taller.");
}
console.log("-----------------------------------");

// 8. Largest of Three Numbers
let a = 12, b = 25, c = 52;
console.log(`1st Number = ${a}, 2nd Number = ${b}, 3rd Number = ${c}`);
if (a > b && a > c) {
    console.log("The 1st Number is the greatest among three");
} else if (b > c) {
    console.log("The 2nd Number is the greatest among three");
} else {
    console.log("The 3rd Number is the greatest among three");
}
console.log("-----------------------------------");

// 9. Coordinate Quadrant Identification
let x = 7, y = 9;
if (x > 0 && y > 0) {
    console.log(`The coordinate point (${x},${y}) lies in the First quadrant.`);
} else if (x < 0 && y > 0) {
    console.log(`The coordinate point (${x},${y}) lies in the Second quadrant.`);
} else if (x < 0 && y < 0) {
    console.log(`The coordinate point (${x},${y}) lies in the Third quadrant.`);
} else if (x > 0 && y < 0) {
    console.log(`The coordinate point (${x},${y}) lies in the Fourth quadrant.`);
} else {
    console.log(`The point lies on the axis.`);
}
console.log("-----------------------------------");

// 10. Admission Eligibility Check
let phy = 65, chem = 51, math = 72;
let total = phy + chem + math;
let pcmTotal = phy + math;
if ((math >= 65 && phy >= 55 && chem >= 50 && total >= 190) || (pcmTotal >= 140)) {
    console.log("The candidate is eligible for admission.");
} else {
    console.log("The candidate is not eligible for admission.");
}
console.log("-----------------------------------");

// 11. Quadratic Equation Roots
let a1 = 1, b1 = 5, c1 = 7;
let d = b1 * b1 - 4 * a1 * c1;
if (d > 0) {
    let root1 = (-b1 + Math.sqrt(d)) / (2 * a1);
    let root2 = (-b1 - Math.sqrt(d)) / (2 * a1);
    console.log(`Roots are real and different: ${root1}, ${root2}`);
} else if (d === 0) {
    let root = -b1 / (2 * a1);
    console.log(`Roots are real and same: ${root}`);
} else {
    console.log("Root are imaginary;\nNo solution.");
}
console.log("-----------------------------------");

// 12. Student Marks and Division Calculation
let rollNo = 784, name = "James", phy2 = 70, chem2 = 80, comp = 90;
let totalMarks = phy2 + chem2 + comp;
let percentage = (totalMarks / 300) * 100;
let division = percentage >= 60 ? "First" : percentage >= 50 ? "Second" : "Third";
console.log(`Roll No : ${rollNo}`);
console.log(`Name of Student : ${name}`);
console.log(`Marks in Physics : ${phy2}`);
console.log(`Marks in Chemistry : ${chem2}`);
console.log(`Marks in Computer Application : ${comp}`);
console.log(`Total Marks = ${totalMarks}`);
console.log(`Percentage = ${percentage.toFixed(2)}`);
console.log(`Division = ${division}`);
console.log("-----------------------------------");

// 13. Temperature-Based Weather Message
let temp = 42;
if (temp < 0) {
    console.log("Freezing weather");
} else if (temp <= 10) {
    console.log("Very Cold weather");
} else if (temp <= 20) {
    console.log("Cold weather");
} else if (temp <= 30) {
    console.log("Normal in Temp");
} else if (temp <= 40) {
    console.log("Its Hot");
} else {
    console.log("Its very hot.");
}
console.log("-----------------------------------");

// 14. Triangle Type Determination
let s1 = 50, s2 = 50, s3 = 60;
if (s1 === s2 && s2 === s3) {
    console.log("This is an equilateral triangle.");
} else if (s1 === s2 || s1 === s3 || s2 === s3) {
    console.log("This is an isosceles triangle.");
} else {
    console.log("This is a scalene triangle.");
}
console.log("-----------------------------------");

// 15. Triangle Validity by Angles
let ang1 = 40, ang2 = 55, ang3 = 65;
if (ang1 + ang2 + ang3 === 180) {
    console.log("The triangle is valid.");
} else {
    console.log("The triangle is not valid.");
}
console.log("-----------------------------------");

// 16. Character Type Classification
let char = '@';
if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    console.log("This is an alphabet.");
} else if (char >= '0' && char <= '9') {
    console.log("This is a digit.");
} else {
    console.log("This is a special character.");
}
console.log("-----------------------------------");

// 17. Vowel or Consonant Check
let ch = 'k';
ch = ch.toLowerCase();
if ("aeiou".includes(ch)) {
    console.log("The alphabet is a vowel.");
} else if (ch >= 'a' && ch <= 'z') {
    console.log("The alphabet is a consonant.");
} else {
    console.log("Invalid input.");
}
console.log("-----------------------------------");
