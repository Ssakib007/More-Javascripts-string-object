const school = {
  name: "vnc",
  class: ["11", "12"],
  events: ["science fair", "independence day"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

school.unique.result.merit = "top top top most";

console.log(school.unique.color);
console.log(school.unique.result.merit);
school.events[1] = "16 dec";
console.log(school.events[1]);

delete school.class;
console.log(school);
