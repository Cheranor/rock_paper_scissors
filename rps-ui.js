//declare the game rules as an object
const RULES = {
    Rock: {win: ["Scissor"], "Scissors": " crushes "},
    Paper: {win: ["Rock"], "Rock": " wraps "},
    Scissors: {win: ["Paper"], "Paper": " cuts "}
}


//list of all symbols
const SYMBOLS = ["Rock", "Paper", "Scissors"]


//getComputerSymbol
function getComputerSymbol() {
    //new variable randomNumber
    //fill randomNumber with randomNumber from 0 to 2
    let randomNumber = Math.floor(Math.random()*SYMBOLS.length);
    //return symbol
    return SYMBOLS[randomNumber];
}


//determineRoundWinner depends upon userSymbol, computerSymbol
function getRoundWinner(userSymbol, computerSymbol) {
    //new variable winner
    let winner;
    //check if tie and print the correct message
    if (userSymbol == computerSymbol) {
        winner = "Tie";
        console.log("It's a tie. You both picked " + userSymbol + ".");
    }
    //otherwise check if user wins and print the correct message
    else if (RULES[userSymbol].win.includes(computerSymbol)) {
        winner = "User";
        console.log("You win! Your " + userSymbol + RULES[userSymbol][computerSymbol] + "the computer's " + computerSymbol +".")
    }
    //otherwiese check if computer wins and print the correct message
    else if (RULES[computerSymbol].win.includes(userSymbol)) {
        winner = "Computer";
        console.log("You loose! The computer's " + computerSymbol + RULES[computerSymbol][userSymbol] + "your " + userSymbol +".")
    }
    //return winner
    return winner
}


function playRound(userSymbol) {
    //new variable computerSymbol (string, undefined)
    let computerSymbol;
    //new variable roundWinner (string, undefined)
    let roundWinner;
    //fill computerSymbol with getComputerSymbol
    computerSymbol = getComputerSymbol();
    //fill roundWinner with determineRoundWinner
    roundWinner = getRoundWinner(userSymbol, computerSymbol)

    return roundWinner;
}


const symbolButtons = document.querySelectorAll('.symbolButton');

symbolButtons.forEach(symbolButton => symbolButton.addEventListener('click', function() {
    let userSymbol = this.id;
    playRound(userSymbol);
}));