let paraGraph = document.getElementById("para1");
const button = document.getElementById("buttonTest");
button.style.backgroundColor = "lightblue"; // Här lägger vi in "inline css" alltså formaterar över vår css-fil, vi ändrar ett elements utseende
button.style.fontSize = "20px"; // Här lägger vi in "inline css" alltså formaterar över vår css-fil, vi ändrar ett elements utseende
button.style.border = "2px solid black"; // Här lägger vi in "inline css" alltså formaterar över vår css-fil, vi ändrar ett elements utseende

const message = document.getElementById("message");
const warning = document.getElementById("warning");

let counter = 0;




  button.addEventListener("click", () => {
    button.style.color = "green"; // här lägger vi till textfärg som blir när man har klickat på knappen
    button.style.backgroundColor = "grey"; // och bakgrundsfärgen blir grån när vi tryckt
    counter++;
    paraGraph.innerHTML =
      "Nu har du tryckt " + counter + " gånger";
    message.innerHTML = "Sluta tryck på knappen!";
    if (counter === 10) {
      warning.innerHTML = "Om du trycker en gång till slängs du ut!";
      warning.style.color = "red";
      warning.style.fontWeight = "bold";
    }
    if (counter === 11) {
      warning.innerHTML = "😱 Jag sa ju att du skulle slängas ut!";
      document.body.style.backgroundColor = "black";
      document.body.style.color = "black";
      button.style.color = "black";
      button.style.backgroundColor = "black";
    }
  });


