//Object destructuring means extracting values from objects 
//and storing them into variables in an easy way.


const course = {
    name: "js in bhojpuri",
    price : "99",
    tutor: "dev"

}
const {name,price,tutor : masterji} = course;
console.log(masterji);

const person = {
  naam: "Dev",
  age: 20,
  city: "Delhi"
};

const { naam, age } = person;

console.log(naam); // Dev
console.log(age);  // 20

// API: A system that allows two applications to communicate.
// JSON: A lightweight data format used to store and transfer data.
// JSON API: An API that uses JSON format to send and receive data.
// jsaon me data {}
//some time api me [], {} dono aate hai 