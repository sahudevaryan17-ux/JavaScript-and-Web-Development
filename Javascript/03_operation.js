let a = 55;
let b = "55abc";
let d = undefined;
console.log(a);
let c = Number(b);
console.log(c);
console.log(b);
console.log(d);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
/*
"22"=> 22 convert ho jata hai
"838abc" => NaN (number)
true => 1
false => 0 
*/
let x = 1;
y = Boolean(x);
console.log(typeof(y));
console.log(y);
console.table([a,b,c,d,x,y]);
console.table([typeof(a),typeof(b),typeof(c),typeof(d),typeof(x),typeof(y)]);
//empty string = false return karta hai
//"xxxx" string = returns true value
