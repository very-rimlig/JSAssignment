/* Det här var min kod som jag först gjorde den
let numberOfBottles;
numberOfBottles = 10;

const line1 = " green bottles hanging on the wall.";
const line2 = "And if one green bottle, should accidentally fall, there will be";

console.log(numberOfBottles + line1);
console.log(numberOfBottles + line1);
console.log(line2);
console.log(numberOfBottles -1 + line1);
*/

/*Det här är min kod för att skriva ut ramsan med färre kod-rader
let numberOfBottles = 10;

console.log(numberOfBottles + " green bottles hanging on the wall. "
  + numberOfBottles + " green bottles hanging on the wall.");
console.log("And if one green bottle should accidentally fall, there will be "
  + (numberOfBottles - 1) + " green bottles hanging on the wall.");
*/

//Det här är min kod för att skriva ut ramsan med hjälp av en for-loop
let numberOfBottles = 10;

while (numberOfBottles > 0) {
  console.log(`${numberOfBottles} green bottles hanging on the wall. ${numberOfBottles} green bottles hanging on the wall.`);
  console.log(`And if one green bottle should accidentally fall, there will be ${numberOfBottles - 1} green bottles hanging on the wall.`);
  console.log(" La, La, La Laaa "); //  rad mellan verserna med lalala

  numberOfBottles--; // minska antalet
}
console.log("Now, there are no more bottles left on the wall, tralalala");
