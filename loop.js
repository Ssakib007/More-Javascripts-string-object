const mobile = {
  brand: "samsung",
  price: 25000,
  color: "black",
  camera: "12mp",
  inNew: true,
};

// for off : array
// for in : object

for (const a in mobile) {
  //   console.log(a);
  //   console.log(mobile);
  //   console.log(a);
  //   console.log(mobile[a]);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
  console.log(key, ":", mobile[key]);
}
