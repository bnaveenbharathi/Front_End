

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

