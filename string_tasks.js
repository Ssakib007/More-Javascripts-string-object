/// TASK 1
// count how many times a string has the letter a

let sentence = "banana is a tasty fruit";
let count = 0;

for (const letter of sentence) {
  if (letter === "a") {
    count++;
  }
}
console.log(count);

//// TASK 2
///Count how many times a string has the letter a or A

let sentence1 = "banana is A very Taasty fruit A";
let counts = 0;
for (const letter of sentence1.toLowerCase()) {
  if (letter === "a") {
    counts++;
  }
}
console.log(counts);

/// TASK 3
///Check whether a string contains all the vowels a, e, i, o, u

let sentence2 = "If it contains end and out";
let lower = sentence2.toLowerCase();
console.log(lower.includes("a" && "e" && "i" && "o" && "u"));

// method with if else.
// if (
//   lower.includes("a") &&
//   lower.includes("e") &&
//   lower.includes("i") &&
//   lower.includes("o") &&
//   lower.includes("u")
// ) {
//   console.log(true);
// } else {
//   console.log(false);
// }

/// TASK 4
/// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let sentence3 = "If it is xxx, it will be yyy. if it is XXX, it will be YYY";
console.log(sentence3.replace(/x/g, "y").replace(/X/g, "Y"));

/// TASK 5
/// Capitalize Every first Letter of each word in a String

let sentence4 = "capitalize every first letter of each word in a string";
let result = sentence4
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(result);
