
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

// import { describe } from "vitest";

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let arr = [];

    for(let i = 0; i < array.length; i++){
      let deposits = 0;
      if(array[i].deposits){
        for (let d in array[i].deposits){
          deposits += array[i].deposits[d];
        }
      } else {array[i].deposits = 0}

      let withdrawals = 0;
      if(array[i].withdrawals){
        for (let w in array[i].withdrawals){
          withdrawals += array[i].withdrawals[w];
        }
      } else {array[i].withdrawals = 0}

      let checkBalance = deposits - withdrawals;
      if (checkBalance != array[i].balance){
        arr.push(array[i])
      }
      }
  return arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
