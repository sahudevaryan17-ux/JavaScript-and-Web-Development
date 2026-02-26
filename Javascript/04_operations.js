let a = "hello";
let b = " Dev!"
console.log(a+b);

console.log("1" + 2);
console.log(1+"2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
//If any operand of + is a string, JS converts the other side to a string too
console.table([(typeof("1" + 2)),(typeof(1+"2")),(typeof("1" + 2 + 2)),(typeof(1 + 2 + "2"))]);
//(+) ka koi bhi operand agar string hoga to concatenation ho jyega ;
