/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  confirm("Ready to play?");
  const age = prompt("How old are you?");
  if (age >= 18) {
    const suitHolders = document.querySelectorAll(".suit");
    // console.log("suitHolders", suitHolders);
    const cardHolder = document.getElementById("numberSelected");
    // console.log("cardHolder", cardHolder);
    const suitRamdomizer = Math.floor(Math.random() * 3);
    // console.log("suitRamdomizer", suitRamdomizer);
    const cardRamdomizer = Math.floor(Math.random() * 13);
    // console.log("cardRamdomizer", cardRamdomizer);

    const possibleSuitsArray = ["♥", "♦", "♣", "♠"];
    const possibleNumbersArray = [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      "J",
      "D",
      "K",
      "A",
    ];

    document
      .querySelectorAll(".suit")
      .forEach((el) => (el.innerHTML = possibleSuitsArray[suitRamdomizer]));

    document.getElementById("numberSelected").innerHTML =
      possibleNumbersArray[cardRamdomizer];
  } else {
    document.write("You're under 18? Be careful out there....");
  }
};
