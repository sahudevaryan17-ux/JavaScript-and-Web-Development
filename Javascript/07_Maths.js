let score = 50;
console.log(score) // score type is number 

// we can explicitly define numbers 
const balance = new Number(1000.5547);
console.log(balance); // strictly number
 
//numbers can be converted to string using method

c = balance.toString();
console.log(typeof(c));
//now use this as string and apply diff string methods to it
console.log(balance.toFixed(4)) //upto 4 decimal places 
console.log(balance.toPrecision(4));//before decimal pr depend krta h
console.log(Number.NEGATIVE_INFINITY);

console.log("Break")
///+++++++++++++++++++ Maths ++++++++++++++++++++++++++++\\

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 + 1);

min= 10;
max = 20;

console.log( Math.floor(Math.random() * (max - min +1 )));
