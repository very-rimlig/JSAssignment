// outputs: Your are an adult, The greater number is: 24, Your favorite number is an odd number


let birthYear = 1987;
let favoriteNumber = 38;

const currentYear = 2025; //const eftersom vi ska utgå från att inte ändra denna
let age = currentYear - birthYear; //kommentar överflödig

let isChild = age <= 10;
let isTeen = age >=11 && age <= 17;
let isAdult = age >= 18;


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
