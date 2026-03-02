const instaUser = {
    id : "a1b2c3",
    username : "Snow",
    isloggedin : false
}
// console.log(instaUser)

const newUser = {
    email : "someone@gmail.ciom",
    fullname : {
        username : {
            firstname : "ansh",
            lastname : 'sahu',
        }
    }
}
// console.log(newUser.fullname.username.firstname)

//add two obj
const o1 = {1: "a", 2 : "b"};
const o2 = {3: "e", 4 : "t"};
const o3 = {5: "s", 6 : "g"};
obj4 = {...o1,...o2,...o3};
console.log(obj4);