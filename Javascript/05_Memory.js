//stack (Primitive) and heap(Non-Primitive [arrays,functions and objects]);
let Name = "devaryan";
let anothername = Name;
console.log(anothername);
anothername = "ansh";
console.log(anothername);
console.log(Name);

//stck me copy milta hai data ka actual value remains same ;
//heap me actual copy heap memory me stored rehti h ,
//jaise hi object create hota hai waise hi uska values heap memory me stored value ko point karti hai;
//heap me actual value is changed
let user1 = {
    email : "user@g,ail.com"
}
let user2 = user1
user2.email= "dev@hotmail.com";
console.log(user1.email);
console.log(user2.email);
//actual value is changed
