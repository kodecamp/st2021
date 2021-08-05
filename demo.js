// y = f(x) = 3*x*x + 4

// reusable code
function f(x) {
  rs = 3 * x * x + 4;
  return 0;
}

// array of values => group of values
values = [10, 20, 30];

for (i = 0; i < values.length; i = i + 1) {
  rs = f(values[i]);
  console.log(rs);
}

// savedId = f(id, name, addr)
// reusable code to save a single person
function savePerson({ name, addr }) {
  // TODO: logic to save person
  return "SUCCESS";
}

people = [
  // person 1
  { name: "Sunil", addr: "Naini" },
  // person 2
  { name: "Suresh", addr: "Lucknow" },
  // person 3
  { name: "Rakesh", addr: "Delhi" },
];

for (i = 0; i < people.length; i = i + 1) {
  console.log(people[i]);
  savePerson(people[i]);
}

//
people.forEach((person) => savePerson(person));
