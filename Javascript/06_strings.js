const name = "Dev";
const age = 20;
console.log(`Hello my name is ${name} and my age is ${age}`);
//use backticks for string interpolation {concatenation};

let Name = "Captainmarvel";
console.log(Name.length);
console.log(Name.charAt(6));
console.log(Name.indexOf("i"));
console.log(Name.substring(0, 6));//does not take neg values 
console.log(Name.slice(0 , 8));
console.log(Name.slice(-6 , 2));

const string = "devaryan.com/horror%50games";
console.log(string.replace('%50' , "*"));

const news = "     hsgs      ";
console.log(news);
console.log(news.trim());
//these are major methods;