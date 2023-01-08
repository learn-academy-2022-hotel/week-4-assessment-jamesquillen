// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe ("shuffler", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(shuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffler(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})


// b) Create the function that makes the test pass.


// PSEUDOCODE

// Input: an array
// Output: an array where where the first item of the entered array has been removed, and the remaining items have been shuffled

// Create a function call "shuffler" that has a parameter of an array
// Use the shift method to remove the first item in the entered array
// Shuffle the remaining array values by using the modified array and sorting them sing an arrow function that randomly assigns a noegative or positive value to each item in the array. Since each item will randomly be positive or negative, they will be sorted in a different order each time the function is called.

const shuffler = (array) => {
  array.shift()
  return array.sort(() => Math.random() - 0.5)
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.


const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31


describe ("voteTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    expect(voteTally(votes1)).toEqual(11)
    expect(voteTally(votes2)).toEqual(-31)
  })
})


// b) Create the function that makes the test pass.


// PSEUDOCODE

// Input: an object that contains up votes and down votes
// Output: the final tally of votes from the entered object

// Create a function called "voteTally" that takes an object as a parameter
// Use the Object.values method to access each element within the object and subtract the second value from the first value

const voteTally = (object) => {
  return Object.values(object)[0] - Object.values(object)[1]
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe ("arrayCombiner", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(arrayCombiner(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// b) Create the function that makes the test pass.

// PSEUDOCODE

// Input: two arrays
// Output: array with no duplicate values

// Create a function called "arrayCombiner" with parameters for two arrays
// Combine both arrays
// Create a "Set" object so only unique values remain from the combined arrays
// Use the spread operator to create a new array from the unique values

const arrayCombiner = (array1, array2) => {
  let combinedArray = array1.concat(array2)
  return [...new Set(combinedArray)]
}