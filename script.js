let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const userChoiceImg = document.getElementById("user-choice");
const computerChoiceImg = document.getElementById("computer-choice");
const resultParagraph = document.querySelector(".result > p");
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
