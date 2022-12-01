function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] != null) { //checks if one of these horizontal rows is filled. the [0] or [1] = rows
            didWin = true; //enables win
            let row = document.querySelectorAll(`.row${i + 1}`); //checks all the three rows
            row.forEach(column => { //for one of the winning rows, the background changes color to green.
                column.classList.add('won'); //adds a green background to the winning 3 boxes
                column.classList.remove('boxes-hover'); //removes the gray hover color
            })
            addPoints(); //adds points to player or enemy. could also be a draw
            return gridBoard[i][0];
        } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] != null) { //the same is repeated here, except the indexes are turned around to recognize vertical rows
            didWin = true;
            let column = document.querySelectorAll(`.column${i + 1}`) //column instead of row
            column.forEach(columnrow => {
                columnrow.classList.add('won');
                columnrow.classList.remove('boxes-hover');
            })
            addPoints();
            return gridBoard[i][0];
        } else if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] != null) { //specific indexes for diagnal win
            didWin = true;
            let diagnl = document.querySelectorAll(`.diag1`)
            diagnl.forEach(diagrow => {
                diagrow.classList.add('won');
                diagrow.classList.remove('boxes-hover');
            })
            addPoints();
            return gridBoard[0][0];
        } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] != null) { //diagnal win
            didWin = true;
            let diagnl2 = document.querySelectorAll(`.diag2`)
            diagnl2.forEach(diagrow2 => {
                diagrow2.classList.add('won');
                diagrow2.classList.remove('boxes-hover');
            })
            addPoints();
            return gridBoard[0][0];
        }
    }
}

function addPoints() {
    for (let i = 0; i < 3; i++) {
        if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] == 'X') { //checks if any horizontal row is completly is X
            totalWinsX = totalWinsX + 1;
        } else if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] == 'O') { //checks if any horizontal row is completly is O
            totalWInsO = totalWInsO + 1;
        } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] == 'X') { //checks if any vertical row is completly is X
            totalWinsX = totalWinsX + 1;
        } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] == 'O') { //checks if any vertical row is completly is O
            totalWInsO = totalWInsO + 1;
        }
    }
    if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] == 'X') { //checks if diagnol left is X
        totalWinsX = totalWinsX + 1;
        console.log('1');
    } else if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] == 'O') { //checks if diagnol left is O
        totalWInsO = totalWInsO + 1;
        console.log('2');
    } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] == 'X') { //checks if diagnol right is X
        totalWinsX = totalWinsX + 1;
        console.log('3');
    } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] == 'O') { //checks if diagnol right is O
        totalWInsO = totalWInsO + 1;
        console.log('4');
    }
    document.querySelector('.player-x-score').textContent = totalWinsX;
    document.querySelector('.player-o-score').textContent = totalWInsO;
    window.localStorage.setItem('totalXwins', totalWinsX);
    window.localStorage.setItem('totalOwins', totalWInsO);
}

function eventReset() {
    window.location.reload();
}

function eventClearScore() {
    window.localStorage.clear();
    window.location.reload();
}