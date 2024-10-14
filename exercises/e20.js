
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

// import { N } from "vitest/dist/chunks/reporters.WnPwkmgA.js";

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let arrWithA = [];
  let arrNoA = [];

  for(let name of array){
    let hasA = false;
    for(let i in name){
      if(name[i] === "a" || name[i] === "A"){
          hasA = true;
        }
  }
  if(hasA){
    arrWithA.push(name);
  } else {arrNoA.push(name);}
}
  return[ arrWithA, arrNoA];
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
