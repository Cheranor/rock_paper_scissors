//new variables for the scores
let userScore, computerScore;


//declare the game rules as an object
const RULES = {
    Rock: {win: ["Scissor"], "Scissors": " crushes "},
    Paper: {win: ["Rock"], "Rock": " wraps "},
    Scissors: {win: ["Paper"], "Paper": " cut "}
};


//list of all symbols
const SYMBOLS = ["Rock", "Paper", "Scissors"];


//new constant for scoreMessage
const scoreMessage = document.getElementById("scoreMessage");
//new constant for roundMessage
const roundMessage = document.getElementById('roundMessage');
//new constant for gameMessage
const gameMessage = document.getElementById('gameMessage');
//new constant for all buttons
const symbolButtons = document.querySelectorAll('.symbolButton');
//new constant for the start button
const startButton = document.querySelector('#startButton');


//getComputerSymbol
function getComputerSymbol() {
    //new variable randomNumber and fill it with a random number
    let randomNumber = Math.floor(Math.random()*SYMBOLS.length);
    //return symbol
    return SYMBOLS[randomNumber];
};


//determineRoundWinner depends upon userSymbol, computerSymbol
function getRoundWinner(userSymbol, computerSymbol) {
    //check if tie and print the correct message
    if (userSymbol == computerSymbol) {
        roundMessage.textContent = "It's a tie. You both picked " + userSymbol + ".";
    }
    //otherwise check if user wins
    else if (RULES[userSymbol].win.includes(computerSymbol)) {
        //print the correct message
        roundMessage.textContent = "You win! Your " + userSymbol + RULES[userSymbol][computerSymbol] + "the computer's " + computerSymbol +".";
        //increase the userscore
        userScore++;
    }
    //otherwiese check if computer wins
    else if (RULES[computerSymbol].win.includes(userSymbol)) {
        //print the correct message
        roundMessage.textContent = "You loose! The computer's " + computerSymbol + RULES[computerSymbol][userSymbol] + "your " + userSymbol +".";
        //increase the computerscore
        computerScore++;
    };
};


function playRound(userSymbol) {
    //new variable computerSymbol and fill it with a symbol
    let computerSymbol = getComputerSymbol();
    //determineRoundWinner
    getRoundWinner(userSymbol, computerSymbol);
    //show scores
    scoreMessage.textContent = `Your score: ${userScore}     Computer score: ${computerScore}`;
    //deactivate the buttons if the game is finished
    if (computerScore == 5 || userScore == 5) {
        symbolButtons.forEach(symbolButton => symbolButton.disabled = true);
        //print the 
        if (computerScore == 5) gameMessage.textContent = "You loose! Press \"New Game\" to start a new game."
        else gameMessage.textContent = "You win! Press \"New Game\" to start a new game.";
    };
};


//listen for a click on any symbol
symbolButtons.forEach(symbolButton => symbolButton.addEventListener('click', function() {
    //play a round with the clicked symbol
    let userSymbol = this.id;
    playRound(userSymbol);
}));


//listen for a click on the start button
startButton.addEventListener('click', function() {
    //activate the symbol buttons
    symbolButtons.forEach(symbolButton => symbolButton.disabled = false);
    //reset the scores
    computerScore = 0;
    userScore = 0;
    //reset the messages
    gameMessage.textContent = "Press a button to choose your symbol."
    scoreMessage.textContent = ""
    roundMessage.textContent = ""
});