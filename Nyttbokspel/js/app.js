// --- Variabler / DOM ---
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const playBtn = document.getElementById("playBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("output");

// Boklista (samma som du hade)
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

// Hjälpfunktion för att skriva ut till sidan (istället för console.log)
function show(msg, append = true) {
  if (!append) output.textContent = "";
  // Lägg till med radbrytning
  output.textContent = output.textContent + msg + "\n";
}

// --- Din ursprungliga logik, men uppdaterad för att använda show() ---
function main(name, age, female, male) {
  // Rensa output för ny körning
  output.textContent = "";

  greeting(name);

  if (checkage(age)) {   // checkage returnerar true/false
    giveRandomBook();
    checkgender(female, male);
  }
}

// Hälsning
function greeting(name) {
  show("Hej " + name);
}

// Ålderskontroll + specialmeddelande
function checkage(age) {
  if (age < 20) {
    show("Du är tyvärr för ung för att spela Boklotteriet");
    return false; // <--- säger till main att INTE fortsätta
  } else {
    show("Välkommen in till boklotteriet");

    if (age > 30) {
      show("Du uppgraderas till superläsare!");
    }
    return true; // <--- säger till main att fortsätta
  }
}

// Slumpa en bok från listan
function giveRandomBook() {
  let randomIndex = Math.floor(Math.random() * books.length);
  let chosenBook = books[randomIndex];

  // Visa extra tydligt
  show("\nLotteriet ger dig denna bok:");
  // skapa ett visuellt element i output för att lyfta fram boken
  const bookBadge = document.createElement("div");
  bookBadge.className = "book";
  bookBadge.textContent = chosenBook;

  // lägg in badge i output (eftersom show() jobbar med textContent, behöver vi appendChild)
  output.appendChild(bookBadge);
  show("", true); // lägga till radbrytning efter badgen
}

function checkgender(female, male) {
  if (female) {
    show("PS. Du får köpa månadens kvinnobok 'Man up' för halva priset på Bladbutiken");
  } else if (male) {
    show("PS. Du får köpa månadens mansbok 'Gråt mer' för halva priset på Bladbutiken");
  } else {
    show("PS. Du får köpa månadens queer-bok för INGENTING!");
  }
}

// --- Koppla UI till funktionerna ---
playBtn.addEventListener("click", () => {
  const name = nameInput.value.trim() || "Spelare";
  const age = Number(ageInput.value);
  const genderValue = document.querySelector('input[name="gender"]:checked')?.value || "other";

  // Konvertera till booleans som din main förväntar sig
  const female = genderValue === "female";
  const male = genderValue === "male";

  // Validera ålder-inmatning
  if (Number.isNaN(age) || age < 0) {
    output.textContent = "";
    show("Skriv in en giltig ålder (0 eller högre).", false);
    return;
  }

  main(name, age, female, male);
});

clearBtn.addEventListener("click", () => {
  output.textContent = "";
});

// (valfritt) kör en demo vid sidladdning
// main("Olle", 40, false, true);
