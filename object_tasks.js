///TASK 1
///Access the golden rod color value in output.

const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
console.log(colors["golden rod"]);

/// TASK 2
/// For this object below add a property named passenger capacity with value 5
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car.PassengerCapacity = 5;
// car["Passenger capacity"] = 5;
console.log(car);

/// TASK 3
/// Display the physics marks as output.
const student = {
  name: "Ham SAM",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "SAM HAM",
    marks: 30,
  },
};

console.log(student.physics.marks);

/// TASK 4
/// Count the number of properties.

let student1 = {
  name: "Arian Grande",
  age: 21,
  city: "Gai",
  isStudent: true,
};

console.log(Object.keys(student1).length);

/// TASK 5
/// Loop through an object and print the key-value pairs with their types
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const keys = Object.keys(myObject);
console.log(keys);
for (const value of keys) {
  console.log(
    value + ":",
    myObject[value],
    "|",
    "type" + ":",
    typeof myObject[value]
  );
}

/// OUTPUT
/// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean
