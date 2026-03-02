//objects are collections of key–value pairs.
//two ways - singleton object
//created using constuctors like new Obj();

//object literals - created using {};
const user = {
  name: "Dev",
  age: 20,
  locationbatabkl : "delhi",
  isLoggedIn: false,
  [Symbol]: "Ansh",
  "full name ": "DevaRYAN Sahu",
};

// //better way of accesing object is -
// console.log(user["locationbatabkl"]);
// console.log(user.age);
// console.log(user['isLoggedIn']);

// console.log(user[Symbol]);//type= sym,bol


user.namaste = function(){
    console.log("Hello Falani ");
}
user.namasteTwo = function(){
    console.log(`Hello Falane ${this.name}`);
}
user.namaste();
user.namasteTwo();
console.log(user.namaste);
console.log(user.namasteTwo);
