const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// filter method
const filteredItems = items.filter((item) => item.price <= 100);

console.log(filteredItems);

// map
//const itemNames = items.map((item) => {
//   return item.name;
//});
const itemNames = items.map((item) => item.name);

console.log(itemNames);

// find
const foundItem = items.find((item) => item.name === "Bike");

console.log(foundItem);

// forEach
items.forEach((item) => {
  console.log(item.price);
});

// some
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 0;
});

console.log(hasInexpensiveItems); //false

//every
const hasInexpensiveItems2 = items.every((item) => {
  return item.price <= 10000;
});

console.log(hasInexpensiveItems2); //true

//total
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total); //1840

//include

const number = [1, 2, 3, 4, 5];

const includesTwo = number.includes(2);

console.log(includesTwo); //true
