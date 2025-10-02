function dubbleratal(numberToDouble) {
  return numberToDouble * 2;
}
console.log(dubbleratal(4)); //Output:8

//Här gör jag en funktion där siffran som stoppas in i parametern multipliceras med sig själv och returners och skrivs ut
function multiplyWithIS(numberToMult) {
  return numberToMult * numberToMult;
}
console.log(multiplyWithIS(4));

//Här gör jag en funktion som räknar ut medeltalet av två värden
function average(number1, number2) {
  return (number1 + number2) / 2;
}
console.log(average(2, 6)); // Output: 4

//nu prövar jag sista övningen
function Welcome(forn, efn) {
  return "Welcome " + forn + efn;
}
console.log(Welcome("Ben", " Ting"));

//Write a function that has no parameters and returns a random number from 0 to 2
function slumptal() {
  return Math.floor(Math.random() * 3);
}

console.log(slumptal());

// näststista övningen

//sista övningen
