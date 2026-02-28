const map = new Map();

map.set("name", "abhay");
map.set("age", 23);
map.set("nationality", "indian");

console.log(map);
console.log(map.get("name"));

const user = {
  name: "abhay",
  age: 23,
};

map.set(user, "23");
console.log(map);
console.log(map.get(user));

//iterable
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomato", 350],
  ["banana", 50],
]);

let object1 = Object.fromEntries(recipeMap.entries());
console.log(object1);

recipeMap.forEach((value, key) =>
  console.log(`from iterable ${key}: ${value}`),
);

let set1 = new Set(["apple", "banana", "apple", "orange", "banana"]);
console.log(set1);

set1.forEach((value, valueAgain) =>
  console.log("from iterable", value, valueAgain),
);

/////////////tasks
function unique(arr) {
  const uniqueNames = new Set(arr);
  return uniqueNames;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

let map1 = new Map();
map1.set("name", "ahbay");
let mapKys = Array.from(map1.keys());
// mapKys.push("age");
console.log(mapKys);
