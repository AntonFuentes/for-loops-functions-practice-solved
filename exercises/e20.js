
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let arrWithA = [];
  let arrNoA = [];
  let arr = [arrWithA, arrNoA];

  for(let i in array){
    for(let n in array[i]){
      if(array[i][n] === "a" || array[i][n] === "A"){
          arrWithA.push(array[i]);
        }
  }
  arrNoA.push(array[i])
  for(let x in arrWithA){
    for(let c in arrNoA){
      if(arrWithA[x] === arrNoA[c]){
        arrNoA.pop(arrNoA[c]);
      }
    }
  }
}
  return arr;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
