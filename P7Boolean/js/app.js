//Goal -> you're child = fales, you´re teen = false, you're an adult = true



let birthYear = 2000; //födelseår ska kunna ändras såklar
const currentYear = 2025; //const eftersom vi ska utgå från att inte ändra denna
let age = currentYear - birthYear; //kommentar överflödig
console.log(age); //testar om uträkning av ålder stämmer

//let isChild 0-10
// let isTeen 11-17
// let isAdult 18 or higher

let isChild = age <= 10;
let isTeen = age >=11 && age <= 17;
let isAdult = age >= 18;


console.log(isChild);
console.log(isTeen);
console.log(isAdult);
