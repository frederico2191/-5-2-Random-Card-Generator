/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // confirm("Ready to play?");
  // var age = prompt("How old are you?");
  // Get a reference to the element we want to update
  //   el = document.getElementById("result"),
  //   message;

  // // Check the age and set the message variable based on that
  // if (age >= 18) {
  //   message = "Let's get started then!";
  // } else {
  //   message = "You're under 18? Be careful out there....";
  // }
  // // Update the content of the element with the message
  // el.innerHTML = message;

  const suitHolders = document.querySelectorAll(".suit");
  console.log("suitHolders", suitHolders);

  const cardHolder = document.getElementById("numberSelected");
  console.log("cardHolder", cardHolder);

  const suitRamdomizer = Math.floor(Math.random() * 3);
  console.log("suitRamdomizer", suitRamdomizer);

  const cardRamdomizer = Math.floor(Math.random() * 13);
  console.log("cardRamdomizer", cardRamdomizer);

  const possibleSuitsArray = ["♥", "♦", "♣", "♠"];
  const possibleNumbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "D", "K", "A"];

  document
    .querySelectorAll(".suit")
    .forEach(el => (el.innerHTML = possibleSuitsArray[suitRamdomizer]));

  document.getElementById("numberSelected").innerHTML =
    possibleNumbersArray[cardRamdomizer];
};

// function ayee() {
//   confirm("Ready to play?");
//   var age = prompt("How old are you?"),
//     // Get a reference to the element we want to update
//     el = document.getElementById("result"),
//     message;

//   // Check the age and set the message variable based on that
//   if (age >= 18) {
//     message = "Let's get started then!";
//   } else {
//     message = "You're under 18? Be careful out there....";
//   }
//   // Update the content of the element with the message
//   el.innerHTML = message;
// }
