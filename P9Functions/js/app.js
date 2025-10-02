let listMove = ["F", "F", "F", "R", "R", "F", "F", "F", "R", "R", "R", "F", "F", "F", "R", "R","R", "F", "R", "R", "F"]

listMove.forEach((steg) => {
  if (steg === "F") {
    console.log("Move forward.");
  }
  else if (steg === "R") {
    console.log("Move right.");
  }})
