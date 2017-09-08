function getWinner(player1, player2){
    
}
function rockPaperScissors(player1, player2){

    var winner = "";

    if (player1 == "rock"){
        if( player2 == "rock"){
            winner = "Tie";
            return winner;
        }
        else if (player2 == "paper"){
            winner = "Player2 - Paper covers Rock";
            return winner;
        }
        else {
            winner = "Player1 - Rock crushes scissors";
            return winner;
        }
        
    }
    else if (player1 == "paper"){
        if( player2 == "paper"){
            winner = "Tie";
            return winner;
        }
        else if (player2 == "scissors"){
            winner = "Player2 - Scissors cuts paper";
            return winner;
        }
        else {
            winner = "Player1 - Papper covers rock";
            return winner;
        }

    }
    else {
        if( player2 == "scissors"){
            winner = "Tie";
            return winner;
        }
        else if (player2 == "rock"){
            winner = "Player2 - Rock crushes scissors";
            return winner;
        }
        else {
            winner = "Player1 - siscors cuts papper";
            return winner;
        }
    }

    return winner;
}

console.log(rockPaperScissors('rock','scissors'));
console.log(rockPaperScissors('rock','paper'));
console.log(rockPaperScissors('paper','paper'));