let score = 0;

let handchoice = {
  paper: "Paper.png",
  scissors: "Scissors.png",
  rock: "Rock.png",
};

// Player choice
let pickuserhand = (hand) => {
  // Hide the hands section upon clicking
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  // Show the contest section
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // User pick
  document.getElementById("userimg").src = handchoice[hand];

  // Computer choice
  let cphand = computerhand();

  // Check result
  referee(hand, cphand);

  


};

// Computer choice
let computerhand = () => {
  let hands = ['rock', 'paper', 'scissors'];

  // Random entry
  let cphand = hands[Math.floor(Math.random() * hands.length)];
  // Update DOM
  document.getElementById("computerimg").src = handchoice[cphand];

  return cphand;
};

// Generates random image as per mapping on obj return value (handchoice)
computerhand();

// Checking results, setting score
const referee = (userhand, cphand) => {
  if (userhand === cphand) {
    setResults("It's a tie!");
  } else if (
    (userhand === "paper" && cphand === "rock") ||
    (userhand === "rock" && cphand === "scissors") ||
    (userhand === "scissors" && cphand === "paper")
  ) {
    setResults("YOU WIN!");
    score += 1; // Update the global score
    setScore(score);
  } else {
    setResults("YOU LOSE!");
  }
};

// Results
let setResults = (decision) => {
  // Controlling you lose/you win/tie text
  document.querySelector('.result h1').innerText = decision;
};

// Updating the scorecard
let setScore = (newScore) => {
  // Setting the score on card
  document.querySelector('.score h1').innerText = newScore;
};

// Reset button
let restartGame = () => {
  // Hide the hands section upon clicking
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
  // Show the contest section
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
};
