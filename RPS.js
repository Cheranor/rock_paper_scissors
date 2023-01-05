//declare the game rules as an object
const RULES = {
    Rock: {win: ["Scissor"], "Scissors": " crushes "},
    Paper: {win: ["Rock"], "Rock": " wraps "},
    Scissors: {win: ["Paper"], "Paper": " cuts "}
}


//list of all symbols
const SYMBOLS = ["Rock", "Paper", "Scissors"]


//capitalize
function capitalize(toCapitalize) {
    //new variable capitalized (string, undefined)
    let capitalized;
    //fill capitalized with upper case first letter
    capitalized = toCapitalize.charAt(0).toUpperCase();
    //add lower case rest
    capitalized += toCapitalize.slice(1).toLowerCase();
    //return result
    return capitalized;
}


//getUserSymbol
function getUserSymbol(){
    //new variable correctInput (boolean, false)
    let correctInput = false;
    //new variable userSymbol (string, undefined)
    let userSymbol
    //while not correctInput ask for input
    while (!correctInput) {
        //fill userSymbol with userInput
        userSymbol = prompt("Enter Rock, Paper or Scissors: ");
        //capitalize userSymbol
        userSymbol = capitalize(userSymbol);
        //change correctInput if input was correct
        if (SYMBOLS.includes(userSymbol)) {
            correctInput = true;
        }
    }
    //return userSymbol
    return userSymbol
}


//getComputerSymbol
function getComputerSymbol() {
    //new variable randomNumber
    //fill randomNumber with randomNumber from 0 to 2
    let randomNumber = Math.floor(Math.random()*3);
    //randomNumber acts as switch
    switch (randomNumber) {
        //return Rock for 0
        case 0: 
            return "Rock";
            break;
        //return Paper for 1
        case 1:
            return "Paper";
            break;
        //return Scissors for 2
        case 2:
            return "Scissors";
            break;
    }
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


//composeRoundMessage depends on userSymbol, computerSymbol, roundWinner
function composeRoundMessage(userSymbol, computerSymbol, roundWinner) {
    //new variable message (string, undefined)
    let message;
    //roundWinner acts as switch
    switch (roundWinner) {
        //tie
        case "Tie":
            //compose message for tie
            message = `It's a tie! You both chose ${userSymbol}`;
            break;
        //user wins
        case "User":
            //compose message for user win
            message = `You win! Your ${userSymbol} beats ${computerSymbol}`;
            break;
        //computer wins
        case "Computer":
            //compose message for computer win
            message = `You loose! Your ${userSymbol} looses to ${computerSymbol}`;
            break;
    }
    //return message
    return message
}


//gameloop
function game() {
    //output greeting
    console.log("Welcome! Let's play a game of Rock Paper Scissors.")
    console.log("We will play 5 rounds.")
    //new variable userScore (int, 0)
    let userScore = 0;
    //new variable computerScore (int, 0)
    let computerScore = 0;
    //new variable winner (string, undefined)
    let winner = "Tie";
    //repeat 5 times:
    for (i=1; i <=5; i++) {
        //new variable userSymbol (string, undefined)
        let userSymbol;
        //new variable computerSymbol (string, undefined)
        let computerSymbol;
        //new variable roundWinner (string, undefined)
        let roundWinner;
        //fill userSymbol with getUserSymbol
        userSymbol = getUserSymbol();
        //fill computerSymbol with getComputerSymbol
        computerSymbol = getComputerSymbol();
        //fill roundWinner with determineRoundWinner
        roundWinner = getRoundWinner(userSymbol, computerSymbol)
        //updateScore
        if (roundWinner == "User") {userScore++}
        else if (roundWinner == "Computer") {computerScore++}
        //output score
        console.log(`Score: User: ${userScore} Points     Computer: ${computerScore} Points`)
    }
    //fill winner with determineWinner
    if (userScore > computerScore) {winner = "User"}
    else if (userScore < computerScore) {winner = "Computer"}
    //output finalMessage
    if (winner == "Tie") {console.log("You tied!")} 
    else if (winner == "User") {console.log("You win!")}
    else if (winner == "Computer") {console.log("You loose!")}
    console.log(`Final score: User: ${userScore} Points     Computer: ${computerScore} Points`)
}

game();