function diagonalWinner(tic){
    if(tic[0][0] == tic[1][1]){
        if(tic[0][0] == tic[2][2]){
            console.log("Winner: "+tic[0][0]);
            return("Winner: "+tic[0][0]);
        }
    }  else if(tic[2][0] == tic[1][1]) {
        if(tic[2][0] == tic[0][2]){
            console.log("Winner: "+ tic[2][0]);
        }

    } else if(tic[0][0] == tic[0][1]){
        if(tic[0][0] == tic[0][2]){
            console.log("Winner: "+tic[0][0]);
            return("Winner: "+tic[0][0]);
        }
    }  else if(tic[2][0] == tic[1][1]) {
        if(tic[2][0] == tic[0][2]){
            console.log("Winner: "+ tic[2][0]);
        }
    }
}
function horizontalWinner(tic){
    if(tic[0][0] == tic[1][1]){
        if(tic[0][0] == tic[2][2]){
            console.log("Winner: "+tic[0][0]);
            return("Winner: "+tic[0][0]);
        }
    }  else if(tic[2][0] == tic[1][1]) {
        if(tic[2][0] == tic[0][2]){
            console.log("Winner: "+ tic[2][0]);
        }

    }
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