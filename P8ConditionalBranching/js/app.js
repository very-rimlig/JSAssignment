// outputs: Your are an adult, The greater number is: 24, Your favorite number is an odd number


let birthYear = 2011;
let favoriteNumber = 39;

const currentYear = 2025; //const eftersom vi ska utgå från att inte ändra denna
let age = currentYear - birthYear; //kommentar överflödig

let isChild = age <= 10;
let isTeen = age >=11 && age <= 17;
let isAdult = age >= 18;

if (birthYear > currentYear || birthYear < 1925) {
  console.log("Ogiltigt födelseår! Kontrollera att det är mellan 1925 och 2025.");
}

/*
//nu prövar vi detta med udda och jämna tal
if (favoriteNumber % 2 === 0) {
  console.log("Ditt favoritnummer är jämnt.");
} else {
  console.log("Ditt favoritnummer är udda.");
}
*/

// nu prövar vi med conditional (ternary op)
console.log(favoriteNumber % 2 === 0 ? "Ditt favoritnummer är jämnt." : "Ditt favoritnummer är udda.");



if (isAdult) {
  console.log("You are an adult");
} else {
  console.log(" ");
}

if (age > favoriteNumber) {
  console.log("Din ålder är största talet");
} else if (age < favoriteNumber) {
  console.log("Ditt favoritnummer är största talet");
} else {
  console.log("Ditt favoritnummer är din ålder!");
}
