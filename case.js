const school = "Raj UK Uttara Model School";

console.log(school);
console.log(school.toUpperCase());
console.log(school.toLowerCase());
const subject = "chemistry";
const book = "Chemistry";

if (subject.toLowerCase() === book.toLocaleLowerCase()) {
  console.log("I am reading book");
} else {
  console.log("not reading at all");
}

// Uppercase --> ABCD
// Lowercase --> abcd

const drink = "water";
const liquid = "    water   ";
if (drink.trim() === liquid.trim()) {
  console.log("water is life");
} else {
  console.log("water in the sea");
}
console.log(liquid);
console.log(liquid.trim());
console.log(liquid.trimStart());
console.log(liquid.trimEnd());
