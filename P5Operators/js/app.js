//Räkna ut radien av en cirkel där input är 2 och resultatet blir cirka 12,56


let r = 2;

// arean = pi * r^2
let area = Math.PI * r * r;

console.log(area);

//Räkna ut radien av en cirkel där input är 2 och resultatet blir cirka 12,56 men skriv bara ut två dec

console.log(area.toFixed(2));

//Implement a program that takes a number input and displays its negation
let num1 = 11;
console.log(-num1);

//Implement a program that calculates the BMI of a person using their weight in kilograms and height in meters. Display the BMI value

let vikt = 70;

let langd = 1.82;

// BMI = vikt / (längd * längd)
let bmi = vikt / (langd * langd);

console.log("Ditt BMI är:", bmi.toFixed(2));

//Implement a program that calculates the length of the hypotenuse of a right triangle using the lengths of the other two sides as inputs. Display the result.
let x = 3;
let y = 4;

// Hypotenusan = roten ur (x^2 + y^2)
let hypotenuse = Math.sqrt(x * x + y * y);

console.log("Hypotenusan är:", hypotenuse);

//Implement a program that takes a number input representing seconds and converts it to minutes and remaining seconds, then displays the result


let totsekunder = 111;

let minuter = Math.floor(totsekunder / 60); // Hela minuter

let sekunderkvar = totsekunder % 60;             // Resten som blir över, sekunder

console.log(minuter + " minuter och " + sekunderkvar + " sekunder");
