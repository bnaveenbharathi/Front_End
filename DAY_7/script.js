// var x = 5;

// console.log(z); 
// let z = 5;

// console.log(m); 
// const m = 5;

// greet();
// function greet() {
//   console.log("Hello, Mark!");
// }

let value = 1;

function doSomething(call){
    call()
}

let some = doSomething(() => {
  value = 2;
});

console.log(value); 
