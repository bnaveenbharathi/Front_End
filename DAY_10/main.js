


// function main(){
//     var a=5
//     console.log(a);
// }

// main()
// console.log(a);

// if(true){
//     var z=30
// }

// var z=20

// console.log(z);

// for(let i=0;i<3;i++){
// (
//     function (j){
//         setTimeout(()=>{
//             console.log(j);
//         },1000)
//     }
// )(i)
// }



// {
//     let a=5
//     console.log(a);
// }
// console.log(a);

// for(var i=0;i<5;i++){
//  setTimeout(()=>{
//   console.log(i);
//  },1000)
// }
// console.log(i);

// {
//      let i_escape="leaked bro"
// console.log(i_escape);
   
// }
// console.log(i_escape);


// function leaked(){
//    const leak=2
// }
// leaked()
// console.log(leak);


// let change='mark'

// console.log(a)


// var a=function (){
//  console.log("hello");
// }
// a();
// console.log(b);
// function b(){
//     console.log('hello b');
// }
// b()
// function main(){
   
//      let change ='mark2'
//     console.log(change);
// }
// main()
// console.log(change);

// //Write a C program to find maximum between three numbers.
// let value1=23
// let value2=20
// let value3=30
// if(value1>value2 && value1>value3) {
//     console.log(value1);
// }else if(value2>value3 && value2>value1){
//    console.log(value2);
// }else{
//     console.log(value3);
// }


// //----------------------------
// //Write a C program to check whether a number is negative, positive or zero.
// let value=0

// if(value >0){
//     console.log("possitive");
// }else if(value==0){
//     console.log('0');
// }
// else{
//     console.log('neggative');
// }

// //------------------------------
// //check whether a number is divisible by 5 and 11 or not
// let value=55;

// if((value%5)===0 && value%11===0){
//     console.log("divibale by 5 and 11");
// }else{
//     console.log("not");
// }


// print day of week name using switch case

// switch(3){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log("wed");
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break
//     default:
//         console.log("wrong value");
    
// }




// Objects Problems
// console.log("\n--- Objects Problems ---\n");

// 1. Create a person object
// const person = { name: 'John', age: 25, city: 'New York' };
// console.log("Person:", person);

// 2. Add a new property (hobby) to an existing object
// person.hobby = 'Reading';
// console.log("After adding hobby:", person);

// 3. Delete a property from an object
// delete person.city;
// console.log("After deleting city:", person);

// 4. Check if a property exists in an object
// console.log("Has age?:", 'age' in person);

// 5. Loop through an object and print key-value pairs
// console.log("Person properties:");
// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// 6. Merge two objects into one
// const address = { street: '5th Avenue', zip: '10001' };
// const mergedObject = { ...person, ...address };
// console.log("Merged object:", mergedObject);

// 7. Convert an object to an array of key-value pairs
// const objectArray = Object.entries(person);
// console.log("Object as array:", objectArray);

// 8. Find the property with the highest value in an object
// const scores = { math: 90, science: 85, english: 88 };
// const highestScore = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
// console.log("Highest score subject:", highestScore);

// 9. Count the number of properties in an object
// console.log("Number of properties in person:", Object.keys(person).length);

// 10. Clone an object without affecting the original
// const clonedPerson = { ...person };
// console.log("Cloned person:", clonedPerson);


// Arrays Problems
// console.log("\n--- Arrays Problems ---\n");

// 1. Create an array of numbers from 1 to 10
// const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
// console.log("Numbers array:", numbers);

// 2. Find the largest number in an array
// const maxNumber = Math.max(...numbers);
// console.log("Max number:", maxNumber);

// 3. Find the sum of all elements in an array
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("Sum of numbers:", sum);

// 4. Remove duplicates from an array
// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [...new Set(arrayWithDuplicates)];
// console.log("Unique array:", uniqueArray);

// 5. Reverse an array without using .reverse()
// const reversedArray = numbers.slice().sort((a, b) => b - a);
// console.log("Reversed array:", reversedArray);

// 6. Find common elements between two arrays
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6, 7, 8];
// const commonElements = arr1.filter(value => arr2.includes(value));
// console.log("Common elements:", commonElements);

// 7. Sort an array in ascending order
// const sortedArray = numbers.slice().sort((a, b) => a - b);
// console.log("Sorted array:", sortedArray);

// 8. Find the index of a given element in an array
// const index = numbers.indexOf(5);
// console.log("Index of 5:", index);

// 9. Filter numbers greater than 5 from an array
// const filteredArray = numbers.filter(num => num > 5);
// console.log("Filtered array (numbers > 5):", filteredArray);

// 10. Map an array to double each element
// const doubledArray = numbers.map(num => num * 2);
// console.log("Doubled array:", doubledArray);
