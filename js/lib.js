function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] != null) { //checks if one of these rows is filled. the [0] or [1] = rows
            didWin = true; //enables win
            let row = document.querySelectorAll(`.row${i + 1}`); //checks all the three rows
            row.forEach(column => { //for one of the winning rows, the background changes color to green.
                column.classList.add('won'); //adds a green background to the winning 3 boxes
                column.classList.remove('boxes-hover'); //removes the gray hover color
            })
            addPoints(); //adds points to player or enemy. could also be a draw
            return gridBoard[i][0];
        } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] != null) { //the same is repeated here, except the indexes are turned around to recognize horizontal rows
            didWin = true;
            let column = document.querySelectorAll(`.column${i + 1}`) //column instead of row
            column.forEach(columnrow => {
                columnrow.classList.add('won');
                columnrow.classList.remove('boxes-hover');
            })
            return gridBoard[i][0];
        } else if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] != null) { //specific indexes for diagnal win
            didWin = true;
            let diagnl = document.querySelectorAll(`.diag1`)
            diagnl.forEach(diagrow => {
                diagrow.classList.add('won');
                diagrow.classList.remove('boxes-hover');
            })
            return gridBoard[0][0];
        } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] != null) { //diagnal win
            didWin = true;
            console.log(didWin);
            let diagnl2 = document.querySelectorAll(`.diag2`)
            diagnl2.forEach(diagrow2 => {
                diagrow2.classList.add('won');
                diagrow2.classList.remove('boxes-hover');
            })
            return gridBoard[0][0];
        }
    }
}

function addPoints() {
    for (let i = 0; i < 3; i++) {
        if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] == 'X') {
            totalWinsX = totalWinsX + 1;
            console.log(totalWinsX + 'X');
        } else if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] == 'O') {
            totalWInsO = totalWInsO + 1;
            console.log(totalWInsO + 'O');
        } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] == 'X') {
            totalWinsX = totalWinsX + 1;
            console.log(totalWinsX + 'X');
        } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] == 'O') {
            totalWInsO = totalWInsO + 1;
            console.log(totalWInsO + 'O');
        } else if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] == 'X') {
            totalWinsX = totalWinsX + 1;
            console.log(totalWinsX + 'X');
        } else if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] == 'O') {
            totalWInsO = totalWInsO + 1;
            console.log(totalWInsO + 'O');
        } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] == 'X') {
            totalWinsX = totalWinsX + 1;
            console.log(totalWinsX + 'X');
        } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] == 'O') {
            totalWInsO = totalWInsO + 1;
            console.log(totalWInsO + 'O');
        }
    }
}