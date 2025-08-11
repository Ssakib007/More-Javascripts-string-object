const country = "Bangladesh";
const division = "Dhaka";
const district = `Dhaka`;
const thana = new String("Demra");

console.log(typeof thana);
console.log(thana);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers.indexOf(1));
numbers[1] = 10;
console.log(numbers);

const capital = "Dhaka";
console.log(capital.length);
console.log(capital[2]);
console.log(capital.indexOf("a"));
capital[0] = "f";
console.log(capital);
// ("strings are immutable");
// ("arrays are mutable");
