/* eslint-disable */
import "bootstrap";
import "./style.css";

let counter = 0;
const counterButton = document.getElementById("counter");
const suitHolders = document.querySelectorAll(".suit");
const cardHolder = document.getElementById("numberSelected");
const possibleSuitsArray = ["♥", "♦", "♣", "♠"];
const possibleNumbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "D", "K", "A"];
const winnerSuit = possibleSuitsArray[Math.floor(Math.random() * 3)];
const winnerArray = possibleNumbersArray[Math.floor(Math.random() * 13)];
const winnerCard = [winnerSuit, winnerArray];
let playerNamesLocalStorage = [];
let playerAge = [];
let amountOfPlayers = 0;

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

function mainDomFunction() {
  counter++;
  if (counter === 1) {
    counterButton.textContent = "1 single time played so far";
  } else {
    counterButton.textContent = ` ${counter} times played`;
  }
  const anewSuit = Math.floor(Math.random() * 3);
  const anewRamdomizer = Math.floor(Math.random() * 13);
  let checker = [
    possibleSuitsArray[anewSuit],
    possibleNumbersArray[anewRamdomizer]
  ];

  const playingButtons = document.getElementById("playingButtons");

  const afterWinMenu = document.getElementById("afterWinMenu");
  console.log("afterWinMenu", afterWinMenu);

  const result = equalsCheck(checker, winnerCard);
  if (result) {
    console.log("WINNER!");
    playingButtons.style.display = "none";
    afterWinMenu.style.display = "flex";
    document.querySelectorAll(".suit").forEach(el => {
      el.innerHTML = '<i class="fa-duotone fa-trophy-star"></i>';
    });
    document.getElementById("numberSelected").innerHTML =
      "WINNER!" + '<i class="fa-duotone fa-trophy"></i>';
    setTimeout(function() {
      alert(
        `Congratulations! ${playerNamesLocalStorage[0]}, you needed only ${counter} attempts to win !!!`
      );
    }, 100);
  } else {
    // afterWinMenu.style.display = "none";
    console.log("I have to continue trying");
    document.querySelectorAll(".suit").forEach(el => {
      el.innerHTML = possibleSuitsArray[anewSuit];
    });
    document.getElementById("numberSelected").innerHTML =
      possibleNumbersArray[anewRamdomizer];
  }
}

const anewCard = document.getElementById("anewCard");
anewCard.onclick = mainDomFunction;

window.onload = function() {
  confirm("Ready to play?");

  playerAge[amountOfPlayers] = prompt("How old are you?");
  console.log("playerAge", playerAge);
  playerNamesLocalStorage[amountOfPlayers] = prompt("Provide player name :)");

  localStorage.setItem(
    "playerNames",
    JSON.stringify(playerNamesLocalStorage[amountOfPlayers])
  );
  localStorage.setItem("playerAge", JSON.stringify(playerAge));

  if (playerAge[amountOfPlayers] >= 18) {
    mainDomFunction();
  } else {
    document.write("You're under 18? Be careful out there....");
  }
};

const button = document.getElementById("btn");
button.onclick = function(event) {
  button.textContent = `Hope you're releasing your stress! You've pressed ${event.detail} times this amnesiac button`;
};

const top = document.getElementById("top");
top.onclick = function() {
  console.log("topppppppp", top);
  top.textContent = "I will be rendering the localStorage data";
};
const samePlayerButton = document.getElementById("samePlayerButton");
samePlayerButton.onclick = function() {
  console.log("samePlayerButton", samePlayerButton);
  samePlayerButton.textContent = "I will be rendering the localStorage data";
  amountOfPlayers++;
  playerNamesLocalStorage[amountOfPlayers] =
    playerNamesLocalStorage[amountOfPlayers - 1];
  playerAge[amountOfPlayers] = playerAge[amountOfPlayers - 1];
};
const differentPlayerButton = document.getElementById("differentPlayerButton");
differentPlayerButton.onclick = function() {
  console.log("differentPlayerButton", differentPlayerButton);
  differentPlayerButton.textContent =
    "I will be rendering the localStorage data";
};

const exit = document.getElementById("exit");
exit.onclick = function() {
  console.log("exiiiiit", exit);
  if (confirm("Alright champ! Sure you wanna go?")) {
    window.close();
  }
};
