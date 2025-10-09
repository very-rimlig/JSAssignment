const partier = ["Moderaterna", "Socialdemokraterna", "Sverigedemokraterna"];

const divWrapper = document.getElementById("wrapperDiv");

const ulTemp = document.createElement("ul");

partier.forEach((parti) => {
  let liTemp = document.createElement("li");
  liTemp.textContent = parti;
  ulTemp.appendChild(liTemp);
})

divWrapper.appendChild(ulTemp);
