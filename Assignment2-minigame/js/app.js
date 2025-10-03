const profileName = "Lena Larsson";
let profileAge = 32;
let female = true;
let male = false;

function main(name, age, female, male) {
  greeting(name);
  checkage(age);
  giveRandomBook();
}

// Hälsning
function greeting(name) {
  console.log("Hej " + name);
}

// Ålderskontroll + specialmeddelande
function checkage(age) {
  if (age < 20) {
    console.log("Du är tyvärr för ung för att spela Boklotteriet");
  } else {
    console.log("Välkommen in till boklotteriet");

    if (age > 30) {
      console.log("Du uppgraderas till superläsare!");
    }
  }
}

// Slumpa en bok från listan
function giveRandomBook() {
  const books = [
    "Sagan om Sune",
    "Bajsboken",
    "Kvinnorummet",
    "Lagboken",
    "Röda rummet",
    "Familjen",
    "Lär dig koda eller göm dig",
    "Regler är till för att brytas",
    "På järnväg genom ett regnigt Närke",
    "Kokboken"
  ];

  let randomIndex = Math.floor(Math.random() * books.length);
  let chosenBook = books[randomIndex];

  console.log("Du får läsa: " + chosenBook);
}

main(profileName, profileAge, female, male);
