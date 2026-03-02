const marvel = ["thor","Iron man","hulk"];
const dc = ['superman', 'joker', 'batman'];

//now we need to combine dc and marvel
//opt - 1(push);
// ans=push() adds the whole dc array as ONE element inside marvel.

// push() returns the new length of the array.

// // Original length = 3

// // After pushing dc (as a single element) → length = 4
// console.log(marvel.push(dc));
// console.log(marvel);//taken array as data
// //i we want to acces joker 
// console.log(marvel[3][1]);//first indes takes to array and second to the data

//2nd option - concat
// console.log(marvel.concat(dc));
// console.log(marvel);//original value me no change//stack

//==================spread operator===================\\
const allheros = [...marvel,...dc]
console.log(allheros);//best method

//============================================================

const array = [1,2,3,[3,4,5,6],[7,8,[8,9]]]
const usablearr = array.flat(Infinity);
console.log(usablearr);