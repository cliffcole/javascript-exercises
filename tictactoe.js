function diagonalWinner(tic){
    if(tic[0][0] == tic[1][1]){
        if(tic[0][0] == tic[2][2]){
            console.log("Winner");
        }
    }  else if(tic[2][0] == tic[1][1]) {
        if(tic[2][0] == tic[0][2]){
            console.log("Winner 2");
        }

    }
}
function horizontalWinner(tic){
    
}

function ticTacToe(tic){
    diagonalWinner(tic);
    for(var x = 0; x < tic.length; x++){
        //console.log(tic[x]);
    }
}

console.log(ticTacToe([['O','X','O'],
                       [null,'O','X'],
                       ['O',null,'O']]));