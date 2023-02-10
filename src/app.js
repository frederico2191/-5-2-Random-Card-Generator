/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cardCounter = 0;
const counterButton = document.getElementById("cardCounter");

function mainDomFunction() {
  cardCounter++;
  if (cardCounter === 1) {
    counterButton.textContent = ` ${cardCounter} single time played`;
  } else {
    counterButton.textContent = ` ${cardCounter} times played`;
  }
  const anewSuit = Math.floor(Math.random() * 3);
  const anewRamdomizer = Math.floor(Math.random() * 13);

  let checker = [
    possibleSuitsArray[anewSuit],
    possibleNumbersArray[anewRamdomizer]
  ];

  console.log("checker", checker);
  console.log("winnerCard", winnerCard);

  function equalsCheck(a, b) {
    if (a.length != b.length) {
      return false;
    } else {
      let result = false;

      // comparing each element of array
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        } else {
          result = true;
        }
      }
      return result;
    }
  }

  const result = equalsCheck(checker, winnerCard);
  if (result) {
    console.log("WINNER!");
    document.querySelectorAll(".suit").forEach(el => {
      el.innerHTML = '<i class="fa-duotone fa-trophy-star"></i>';
    });
    document.getElementById("numberSelected").innerHTML = "WINNER!";
    setTimeout(function() {
      alert(
        `Congratulations! You needed only ${cardCounter} attempts to win !!!`
      );
    }, 100);
  } else {
    console.log("I have to conitnue trying");
    document.querySelectorAll(".suit").forEach(el => {
      el.innerHTML = possibleSuitsArray[anewSuit];
    });
    document.getElementById("numberSelected").innerHTML =
      possibleNumbersArray[anewRamdomizer];
  }
}

const suitHolders = document.querySelectorAll(".suit");
const cardHolder = document.getElementById("numberSelected");

const possibleSuitsArray = ["♥", "♦", "♣", "♠"];
const possibleNumbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "D", "K", "A"];
const winnerSuit = possibleSuitsArray[Math.floor(Math.random() * 3)];
const winnerArray = possibleNumbersArray[Math.floor(Math.random() * 13)];
const winnerCard = [winnerSuit, winnerArray];
// console.log(winnerSuit)
// console.log(winnerArray)
// console.log(winnerCard)
let playerNamesLocalStorage = [];
let playerAge = [];
let amountOfPlayers = 0;

const anewCard = document.getElementById("anewCard");
anewCard.onclick = mainDomFunction;

window.onload = function() {
  confirm("Ready to play?");

  playerAge[0] = prompt("How old are you?");
  console.log("playerAge", playerAge);
  // localStorage.setItem("playerAge", JSON.stringify(playerAge);
  // let playerAgeLocalStorage = JSON.parse(localStorage.getItem("playerAge")
  // );

  // playerNamesLocalStorage[amountOfPlayers] = prompt("Provide player name :)");
  // localStorage.setItem(
  //   "playerNamesLocalStorage",
  //   JSON.stringify(playerNamesLocalStorage)
  // );

  // let playerNamesLocalStorage = JSON.parse(
  //   localStorage.getItem("playerNamesLocalStorage")
  // );

  if (playerAge[0] >= 18) {
    mainDomFunction();
  } else {
    document.write("You're under 18? Be careful out there....");
  }
};

const button = document.getElementById("btn");
button.onclick = function(event) {
  button.textContent = `This is the ${event.detail} time you press this unreliable button!`;
};
