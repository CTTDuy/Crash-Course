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
