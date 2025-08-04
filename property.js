const person = {
  name: "ama",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav places": ["cox", "martin"],
};
// console.log(person);

// dot notation
console.log(person.profession);
const income = person.salary;
console.log(income);

// bracket notation
console.log(person["age"]);
const old = person["age"];
console.log(old);

// error
// console.log(person. "fav places")
console.log(person["fav places"]);
