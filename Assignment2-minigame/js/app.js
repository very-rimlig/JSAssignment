const profileName = "Lena Larsson";
let profileAge = 32;
let female = true;
let male = false;

function main(name, age, female, male) {
  greeting(name);
  checkage(age);
}

function checkage(age) {
  if (age < 20) {
    console.log("Du är tyvärr för ung för att spela Boklotteriet");
  } else {
    console.log("Välkommen in till boklotteriet");
  }
}

function greeting(name) {
  console.log("Hej " + name);
}

main(profileName, profileAge, female, male);
