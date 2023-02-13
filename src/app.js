/* eslint-disable */
import "bootstrap";
import "./style.css";

let counter = 0;
const counterButton = document.getElementById("counter");
const suitHolders = document.querySelectorAll(".suit");
const cardHolder = document.getElementById("numberSelected");
const redSuits = ["♥", "♦"];
const possibleSuitsArray = ["♥", "♦", "♣", "♠"];
const possibleNumbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "D", "K", "A"];
const winnerSuit = possibleSuitsArray[Math.floor(Math.random() * 3)];
const winnerArray = possibleNumbersArray[Math.floor(Math.random() * 13)];
const winnerCard = [winnerSuit, winnerArray];
const allPlayers = [];

function checkingForWinnerCard(a, b) {
  if (a.length != b.length) {
    return false;
  } else {
    let winnerCardFound = false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      } else {
        winnerCardFound = true;
      }
    }
    return winnerCardFound;
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
  let currentCard = [
    possibleSuitsArray[anewSuit],
    possibleNumbersArray[anewRamdomizer]
  ];

  if (redSuits.includes(currentCard[0])) {
    cardHolder.classList.remove("blackSuit");
    cardHolder.classList.add("redSuit");
    suitHolders.forEach(el => {
      el.classList.remove("blackSuit");
      el.classList.add("redSuit");
    });
  } else {
    cardHolder.classList.remove("redSuit");
    cardHolder.classList.add("blackSuit");
    suitHolders.forEach(el => {
      el.classList.remove("redSuit");
      el.classList.add("blackSuit");
    });
  }

  const playingButtons = document.getElementById("playingButtons");

  const afterWinMenu = document.getElementById("afterWinMenu");

  const winnerCardFound = checkingForWinnerCard(currentCard, winnerCard);

  if (winnerCardFound) {
    playingButtons.style.display = "none";
    afterWinMenu.style.display = "flex";
    document.querySelectorAll(".suit").forEach(el => {
      el.innerHTML = '<i class="fa-duotone fa-trophy-star"></i>';
    });

    const allPlayers = localStorage.getItem("allPlayers");
    console.log("all players", allPlayers);
    const parsedAllPlayers = JSON.parse(allPlayers);
    console.log("parsed all players", parsedAllPlayers);
    const currentPlayer = parsedAllPlayers[parsedAllPlayers.length - 1];

    console.log("currentPlayer !!", currentPlayer);

    console.log("The name on the winner note", currentPlayer.name);
    document.getElementById("numberSelected").innerHTML = "WINNER!";

    setTimeout(function() {
      alert(
        `Congratulations! ${currentPlayer.name}, you needed only ${counter} attempts to win !!!`
      );
    }, 100);

    currentPlayer.score = counter;
    console.log("counter: ", counter);
    localStorage.setItem("allPlayers", JSON.stringify(parsedAllPlayers));
  } else {
    afterWinMenu.style.display = "none";
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
  const player = {
    name: "",
    age: 0,
    score: 0
  };

  player.age = prompt("How old are you?");
  console.log("player.age :", player?.age);
  player.name = prompt("Provide player name :)");
  allPlayers.push(player);
  localStorage.setItem("allPlayers", JSON.stringify(allPlayers));

  if (player.age >= 18) {
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
  const allPlayers = localStorage.getItem("allPlayers");
  console.log("all players", allPlayers);
  const parsedAllPlayers = JSON.parse(allPlayers);
  console.log("parsed all players", parsedAllPlayers);
  const bestScoreArray = parsedAllPlayers.sort((a, b) => a.score - b.score);
  console.log("bestScoreArray", bestScoreArray);
  let filteredBestScoreArray = bestScoreArray?.filter(el => el.score !== 0);
  console.log("filteredBestScoreArray", filteredBestScoreArray);
  console.log(
    "filteredBestScoreArray[0].score",
    filteredBestScoreArray?.length && filteredBestScoreArray[0].score
  );
  let top3 = "Come on, you have to play first :)";
  if (filteredBestScoreArray?.length && filteredBestScoreArray.length == 1) {
    top3 = ` ${filteredBestScoreArray[0].name} is the only and best player with ${filteredBestScoreArray[0].score} points!`;
  }
  if (filteredBestScoreArray?.length && filteredBestScoreArray.length == 2) {
    top3 = ` 1st Place: ${filteredBestScoreArray[0].name} - ${filteredBestScoreArray[0].score} points!
    2nd Place: ${filteredBestScoreArray[1].name} - ${filteredBestScoreArray[1].score} points!`;
  }
  if (filteredBestScoreArray?.length && filteredBestScoreArray.length == 3) {
    top3 = ` 1st Place: ${filteredBestScoreArray[0].name} - ${filteredBestScoreArray[0].score} points! 2nd Place: ${filteredBestScoreArray[1].name} - ${filteredBestScoreArray[1].score} points! 3rd Place: ${filteredBestScoreArray[2].name} - ${filteredBestScoreArray[2].score} points`;
  }
  top.textContent = top3;
};

const samePlayerButton = document.getElementById("samePlayerButton");
samePlayerButton.onclick = function() {
  samePlayerButton.textContent = "Same player";
  const samePlayer = {
    name: "",
    age: 0,
    score: 0
  };
  const allPlayersSamePlayer = localStorage.getItem("allPlayers");
  console.log("all players Same Player", allPlayersSamePlayer);
  const parsedAllPlayersSamePlayer = JSON.parse(allPlayersSamePlayer);
  console.log("parsed all players Same Player", parsedAllPlayersSamePlayer);
  samePlayer.age =
    parsedAllPlayersSamePlayer[parsedAllPlayersSamePlayer.length - 1].age;
  samePlayer.name =
    parsedAllPlayersSamePlayer[parsedAllPlayersSamePlayer.length - 1].name;

  samePlayer.score = 0;
  parsedAllPlayersSamePlayer[parsedAllPlayersSamePlayer.length] = samePlayer;

  localStorage.setItem(
    "allPlayers",
    JSON.stringify(parsedAllPlayersSamePlayer)
  );
  counter = 0;
  afterWinMenu.style.display = "none";
  playingButtons.style.display = "block";
};

const differentPlayerButton = document.getElementById("differentPlayerButton");
differentPlayerButton.onclick = function() {
  const newPlayer = {
    name: "",
    age: 0,
    score: 0
  };
  const allPlayersNewPlayer = localStorage.getItem("allPlayers");
  console.log("all players New Player", allPlayersNewPlayer);
  const parsedAllPlayersNewPlayer = JSON.parse(allPlayersNewPlayer);
  console.log("parsed all players New Player", parsedAllPlayersNewPlayer);

  differentPlayerButton.textContent = "different Player Button";

  newPlayer.age = prompt("How old are you?");

  newPlayer.name = prompt("Provide player name :)");

  newPlayer.score = 0;
  parsedAllPlayersNewPlayer[parsedAllPlayersNewPlayer.length] = newPlayer;

  localStorage.setItem("allPlayers", JSON.stringify(parsedAllPlayersNewPlayer));
  counter = 0;
  afterWinMenu.style.display = "none";
  playingButtons.style.display = "block";

  if (newPlayer.age >= 18) {
    mainDomFunction();
  } else {
    document.write("You're under 18? Be careful out there....");
  }
};

const exit = document.getElementById("exit");
exit.onclick = function() {
  if (confirm("Alright champ! Sure you wanna go?")) {
    window.close(
      confirm(
        "Did you know that Scripts may close only the windows that were opened by them. No hope for 'window.close() function' I just found that out..."
      )
    );
  }
};
