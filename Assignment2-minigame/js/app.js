const profileName = "Olle";
let profileAge = 40;
let female = false;
let male = true;

function main(name, age, female, male) {
  greeting(name);

  if (checkage(age)) {   // checkage returnerar true/false
    giveRandomBook();
    checkgender(female, male);
  }
}

// Hälsning
function greeting(name) {
  console.log("Hej " + name);
}

// Ålderskontroll + specialmeddelande
function checkage(age) {
  if (age < 20) {
    console.log("Du är tyvärr för ung för att spela Boklotteriet");
    return false; // <--- säger till main att INTE fortsätta
  } else {
    console.log("Välkommen in till boklotteriet");

    if (age > 30) {
      console.log("Du uppgraderas till superläsare!");
    }
    return true; // <--- säger till main att fortsätta
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

  console.log("Lotteriet ger dig denna bok: " + chosenBook);
}
function checkgender(female, male) {
  if (female) {
    console.log("PS. Du får köpa månadens kvinnobok 'Man up' för halva priset på Bladbutiken");
  } else if (male) {
    console.log("PS. Du får köpa månadens mansbok 'Gråt mer' för halva priset på Bladbutiken");
  } else {
    console.log("PS. Du får köpa månadens queer-bok för INGENTING!");
  }
}


main(profileName, profileAge, female, male);
