let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const userChoiceImg = document.getElementById("user-choice");
const computerChoiceImg = document.getElementById("computer-choice");
const resultParagraph = document.querySelector(".result > p");
const endGameAlert = document.getElementById("action-message");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoice() {
  let choices = [`r`, `p`, `s`];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function convertToImg(letter) {
  if (letter === "r") return `<img src="img/icons8-hand-rock-96.png"/>`;
  if (letter === "p") return `<img src="img/icons8-four-fingers-96.png"/>`;
  return `<img src="img/icons8-hand-scissors-skin-type-2-96.png"/>`;
}

function win(userChoice, computerChoice) {
  let userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  userChoiceImg.innerHTML = `${convertToImg(userChoice)}`;
  computerChoiceImg.innerHTML = `${convertToImg(computerChoice)}`;
  resultParagraph.innerHTML = `
    ${convertToWord(userChoice)} 
      beats 
    ${convertToWord(computerChoice)} 
      you win! 🔥`;

  if (userScore === 5 || computerScore === 5) {
    return endGame();
  }

  userChoiceDiv.classList.add(`green-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`green-glow`);
  }, 400);
}

function lose(userChoice, computerChoice) {
  let userChoiceDiv = document.getElementById(userChoice);
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  userChoiceImg.innerHTML = `${convertToImg(userChoice)}`;
  computerChoiceImg.innerHTML = `${convertToImg(computerChoice)}`;
  resultParagraph.innerHTML = `
    ${convertToWord(userChoice)} 
    loses to 
    ${convertToWord(computerChoice)} 
    you lose... ☠️`;

  if (userScore === 5 || computerScore === 5) {
    return endGame();
  }

  userChoiceDiv.classList.add(`red-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`red-glow`);
  }, 400);
}

function draw(userChoice, computerChoice) {
  let userChoiceDiv = document.getElementById(userChoice);
  userChoiceImg.innerHTML = `${convertToImg(userChoice)}`;
  computerChoiceImg.innerHTML = `${convertToImg(computerChoice)}`;
  resultParagraph.innerHTML = `
      ${convertToWord(userChoice)} 
        equals to 
      ${convertToWord(computerChoice)} 
        its a draw... 😒`;

  userChoiceDiv.classList.add(`gray-glow`);
  setTimeout(() => {
    userChoiceDiv.classList.remove(`gray-glow`);
  }, 400);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function endGame() {
  endGameAlert.innerHTML = userScore === 5 ? `you win 🔥` : `you lose 💩`;
  endGameAlert.innerHTML += ` <br> <button id="reset-btn" onClick="startNewGame()">reset</button>`;
  rockDiv.style.pointerEvents = "none";
  paperDiv.style.pointerEvents = "none";
  scissorsDiv.style.pointerEvents = "none";
}

function startNewGame() {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  rockDiv.style.pointerEvents = "auto";
  paperDiv.style.pointerEvents = "auto";
  scissorsDiv.style.pointerEvents = "auto";
  endGameAlert.innerHTML = `Play again`;
}

function main() {
  rockDiv.addEventListener(`click`, () => {
    game("r");
  });
  paperDiv.addEventListener(`click`, () => {
    game("p");
  });
  scissorsDiv.addEventListener(`click`, () => {
    game("s");
  });
}
main();
