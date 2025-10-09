// --- DOM-element ---
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const playBtn = document.getElementById("playBtn");
const output = document.getElementById("output");

// --- Hjälpfunktioner ---
function show(text) {
  output.innerHTML += text + "<br>";
}

function clearOutput() {
  output.innerHTML = "";
}

// --- Spel-logik ---
function main(name, age, female, male) {
  clearOutput();
  greeting(name);

  if (checkage(age)) {
    giveRandomBook();
    checkgender(female, male);
  }
}

function greeting(name) {
  show("Hej " + name + "!");
}

function checkage(age) {
  if (age < 20) {
    show("Du är tyvärr för ung för att spela Boklotteriet 😢");
    return false;
  } else {
    show("Välkommen in till Boklotteriet! 🎉");
    if (age > 30) show("Du uppgraderas till superläsare! ⭐");
    return true;
  }
}

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
  const randomIndex = Math.floor(Math.random() * books.length);
  const chosenBook = books[randomIndex];
  show("<strong>Lotteriet ger dig denna bok:</strong> " + chosenBook);
}

function checkgender(female, male) {
  if (female) {
    show("PS. Du får köpa månadens kvinnobok <em>'Man up'</em> för halva priset 💃");
  } else if (male) {
    show("PS. Du får köpa månadens mansbok <em>'Gråt mer'</em> för halva priset 🕺");
  } else {
    show("PS. Du får köpa månadens queer-bok för <strong>INGENTING!</strong> 🏳️‍🌈");
  }
}

// --- Koppling till formuläret ---
playBtn.addEventListener("click", () => {
  const name = nameInput.value.trim() || "Spelare";
  const age = Number(ageInput.value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  const female = gender === "female";
  const male = gender === "male";

  main(name, age, female, male);
});
