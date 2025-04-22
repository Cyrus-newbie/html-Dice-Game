let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if ( randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
if (randomNumber1 === 1) {
    document.querySelector(".dice2").classList.add("visibility");
    document.querySelector(".dice3").classList.add("visibility");
    document.querySelector(".dice4").classList.add("visibility");
    document.querySelector(".dice5").classList.add("visibility");
    document.querySelector(".dice6").classList.add("visibility");
} else if (randomNumber1 === 2) {
    document.querySelector(".dice2").classList.remove("visibility");
    document.querySelector(".dice1").classList.add("visibility");
} else if (randomNumber1 === 3) {
    document.querySelector(".dice3").classList.remove("visibility");
    document.querySelector(".dice1").classList.add("visibility");
} else if (randomNumber1 === 4) {
    document.querySelector(".dice4").classList.remove("visibility");
    document.querySelector(".dice1").classList.add("visibility");
} else if (randomNumber1 === 5) {
    document.querySelector(".dice5").classList.remove("visibility");
    document.querySelector(".dice1").classList.add("visibility");
} else {
    document.querySelector(".dice6").classList.remove("visibility");
    document.querySelector(".dice1").classList.add("visibility");
}
if (randomNumber2 === 1) {
    document.querySelector(".dice2-2").classList.add("visibility");
    document.querySelector(".dice3-3").classList.add("visibility");
    document.querySelector(".dice4-4").classList.add("visibility");
    document.querySelector(".dice5-5").classList.add("visibility");
    document.querySelector(".dice6-6").classList.add("visibility");
} else if (randomNumber2 === 2) {
    document.querySelector(".dice2-2").classList.remove("visibility");
    document.querySelector(".dice1-1").classList.add("visibility");
} else if (randomNumber2 === 3) {
    document.querySelector(".dice3-3").classList.remove("visibility");
    document.querySelector(".dice1-1").classList.add("visibility");
} else if (randomNumber2 === 4) {
    document.querySelector(".dice4-4").classList.remove("visibility");
    document.querySelector(".dice1-1").classList.add("visibility");
} else if (randomNumber2 === 5) {
    document.querySelector(".dice5-5").classList.remove("visibility");
    document.querySelector(".dice1-1").classList.add("visibility");
} else {
    document.querySelector(".dice6-6").classList.remove("visibility");
    document.querySelector(".dice1-1").classList.add("visibility");
}
