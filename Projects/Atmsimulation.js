/* 1. check your balance
   2. withdraw
   3. deposit */


let pin = "9454";
let enteredPin = "9454";
let balance = '10000';
let amount = '3000';
let choice = '2';

choice = Number(choice);
amount = Number(amount);

if (enteredPin === pin){
    if(choice === 1){
//check balance 
    console.log(`Your Balance is : ${balance}`);
    }
  else if (choice === 2) {  // Withdraw
        if (amount <= balance) {
            balance = balance - amount;
            console.log("Withdrawal successful");
            console.log(`Remaining balance: ₹${balance}`);
        } else {
            console.log("Insufficient balance");
        }
    }

    else if (choice === 3) {  // Deposit
        balance = balance + amount;
        console.log("Money deposited successfully");
        console.log(`Updated balance: ₹${balance}`);
    }

    else {
        console.log("Invalid choice");
    }

} else {
    console.log("Invalid PIN");
}