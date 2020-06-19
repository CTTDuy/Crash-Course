//String, Numbers, Booleans, null, undefined

const name = "Duy";
const age = 21;
const GPA = 7.16;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);

//Concatenation
console.log("My name is " + name + " and I am " + age);
//Template String
const hello = "My name is ${name} and I am ${age}";

console.log(hello);

const s = "Hello World!";

console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));

const d = "technology, computers, it, code";

console.log(d.split(","));

const e = d.split(",");

//console.log(typeof e);

//Arrays - varialbes that hold multiple values

const values = new Array(
  1,
  2,
  3,
  4,
  5,
  true,
  "Apple",
  "Samsung",
  "Oppo",
  "Vsmart",
  "Asus"
);

//Add values to array
//Add vlue to the end of the array
values[11] = 0;
values.push("Duy");

//Add value to the top
values.unshift("Cao");

//Take the last one off
values.pop();

//Check if it's an array or not (return boolean)
console.log(Array.isArray("hello world")); //false

//Get the index of the certain value
console.log(values.indexOf("Apple")); //7

console.log(values); //array
console.log(values[7]); //Apple

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Auto", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for (let i = 0; i < companies.length; i++) {
// console.log(companies[i]);
//}

// forEach

//companies.forEach(function (company) {
// console.log(company);
//});

// filter

//let canDrink = [];
//for (let i = 0; i < ages.length; i++) {
//  if (ages[i] >= 21) {
//    canDrink.push(ages[i]);
// }
//}

//const canDrink = ages.filter(function (age) {
//  if (age >= 21) {
//    return true;
//  }
//});

const canDrink = ages.filter((age) => age >= 21);

console.log(canDrink);

// Filter retail companies

//const retailCompanies = companies.filter(function (company) {
//  if (company.category === "Retail") {
//    return true;
//  }
//});

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

//console.log(retailCompanies);

// Get 80s company

const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

console.log(eightiesCompanies);

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(lastedTenYears);

// map
// sort
// reduce
