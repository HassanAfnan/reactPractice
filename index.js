console.log("Hello")

let name = "Afnan"

console.log("Name",name)

// forEach, map, filter, reduce => Higher Order Functions
// template litrals `${}`

let fruitList = [
    "Apple",
    "Banana",
    "Guava",
    "Grapes",
    "Mango"
];
console.log("ForEach")
fruitList.forEach((items) => {
  console.log(items)
});

console.log("Map")
fruitList.map((item,index) => {
   console.log(`${index} : ${item}`)   
});

console.log("Filter")
const age = [20,10,5,30,50,45];
let eligiblePeople = age.filter((ageReturn) => {
    return ageReturn >= 30   
});

console.log(eligiblePeople);

console.log("Reduce");

let sum = age.reduce((total, agesum) => {
   return total + agesum;
});

console.log(sum);

console.log("Custom logic")

let total = 0;

age.forEach((num) => {
   total = total + num;
});

console.log(total);