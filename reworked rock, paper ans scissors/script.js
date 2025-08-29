// Step 1: Grab DOM elements
const choiceButtons = document.querySelectorAll('.choice');
const playerImg = document.querySelector('.player-choice img');
const computerImg = document.querySelector('.computer-choice img');
const resultText = document.querySelector('.result'); // For showing Win/Lose/Draw
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');

let playerScore = 0;
let computerScore = 0;

// Step 2: Button click listeners
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;

        // Update player hand
        updatePlayerHand(playerChoice);

        // Highlight selected button
        highlightSelection(button);

        // Generate computer choice
        let computerChoice = getComputerChoice();

        // Update computer hand
        updateComputerHand(computerChoice);

        // Decide winner
        let result = getWinner(playerChoice, computerChoice);

        // Update UI with result
        showResult(result);
    });
});

// Step 3: Update player's hand image
function updatePlayerHand(choice) {
    const map = {
        rock: './images/Rock hand.png',
        paper: './images/paper hand.png',
        scissors: './images/scissors hand.png'
    };
    playerImg.src = map[choice] || map.rock;
    playerImg.alt = `${choice} hand`;
}

// Step 4: Highlight clicked button
function highlightSelection(clickedButton) {
    choiceButtons.forEach(btn => btn.classList.remove('selected'));
    clickedButton.classList.add('selected');
}

// Step 5: Get computer choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

// Step 6: Update computer hand image
function updateComputerHand(choice) {
    const map = {
        rock: './images/Rock hand.png',
        paper: './images/paper hand.png',
        scissors: './images/scissors hand.png'
    };
    computerImg.src = map[choice] || map.rock;
    computerImg.alt = `${choice} hand`;
}

// Step 7: Decide winner
function getWinner(player, computer) {
    if (player === computer) return "draw";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

// Step 8: Show result + update scores
function showResult(result) {
    if (result === "draw") {
        resultText.textContent = "It's a Draw! 🤝";
    } else if (result === "player") {
        resultText.textContent = "You Win! 🎉";
        playerScore++;
    } else {
        resultText.textContent = "Computer Wins! 💻";
        computerScore++;
    }

    // Update score display
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}
