
const p1 = new Promise((resolve, reject) => {
    resolve("Success");
  });
  
  p1.then(result => console.log("1:", result));
  

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done after 2 seconds"), 2000);
  });
  
  p2.then(data => console.log("2:", data));
  

  const p3 = new Promise(resolve => {
    resolve(2);
  });
  
  p3.then(num => num * 2)
    .then(result => result + 1)
    .then(final => console.log("3:", final));
  

  const p4 = new Promise((resolve, reject) => {
    reject("Something went wrong");
  });
  
  p4.then(data => console.log("4:", data))
    .catch(err => console.log("4:", err));
  

  const p5a = Promise.resolve(1);
  const p5b = Promise.resolve(2);
  const p5c = Promise.resolve(3);
  
  Promise.all([p5a, p5b, p5c]).then(results => console.log("5:", results));
  

  const p6a = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
  const p6b = new Promise(resolve => setTimeout(() => resolve("Slow"), 1000));
  
  Promise.race([p6a, p6b]).then(result => console.log("6:", result));
  

  function checkNumber(num) {
    return new Promise((resolve, reject) => {
      if (num > 10) resolve("Valid");
      else reject("Too small");
    });
  }
  
  checkNumber(15).then(result => console.log("7:", result)).catch(err => console.log("7:", err));
  checkNumber(5).then(result => console.log("7:", result)).catch(err => console.log("7:", err));

  

localStorage.setItem("name", "Mark");


const name = localStorage.getItem("name");
console.log("Name from storage:", name);


localStorage.setItem("name", "Mark Antony");
console.log("Updated name:", localStorage.getItem("name"));


localStorage.removeItem("name");
console.log("Name after removal:", localStorage.getItem("name")); // null


const user = {
  username: "mark",
  age: 25,
  skills: ["JS", "React", "Node"]
};

localStorage.setItem("user", JSON.stringify(user));


const storedUser = JSON.parse(localStorage.getItem("user"));
console.log("Stored user:", storedUser);


localStorage.clear();
console.log("After clear, user:", localStorage.getItem("user")); // null
