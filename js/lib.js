function reloadData() {
    totalWinsX = parseInt(window.localStorage.getItem('totalXwins'));
}

if (window.localStorage.length != 0) {
    reloadData();
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] != null) { //checks if one of these horizontal rows is filled. the [0] or [1] = rows
            didWin = true; //enables win
            let row = document.querySelectorAll(`.row${i + 1}`); //checks all the three rows
            row.forEach(column => { //for one of the winning rows, the background changes color to green.
                column.classList.add('won'); //adds a green background to the winning 3 boxes
                document.querySelectorAll('.boxes').forEach(hover => {
                    hover.classList.remove('boxes-hover');
                });
            })
            addPoints(); //adds points to player or enemy. could also be a draw
            return gridBoard[i][0];
        } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] != null) { //the same is repeated here, except the indexes are turned around to recognize vertical rows
            didWin = true;
            let column = document.querySelectorAll(`.column${i + 1}`) //column instead of row
            column.forEach(columnrow => {
                columnrow.classList.add('won');
                document.querySelectorAll('.boxes').forEach(hover => {
                    hover.classList.remove('boxes-hover');
                });
            })
            addPoints();
            return gridBoard[i][0];
        } else if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] != null) { //specific indexes for diagnal win
            didWin = true;
            let diagnl = document.querySelectorAll(`.diag1`)
            diagnl.forEach(diagrow => {
                diagrow.classList.add('won');
                document.querySelectorAll('.boxes').forEach(hover => {
                    hover.classList.remove('boxes-hover');
                });
            })
            addPoints();
            return gridBoard[0][0];
        } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] != null) { //diagnal win
            didWin = true;
            let diagnl2 = document.querySelectorAll(`.diag2`)
            diagnl2.forEach(diagrow2 => {
                diagrow2.classList.add('won');
                document.querySelectorAll('.boxes').forEach(hover => {
                    hover.classList.remove('boxes-hover');
                });
            })
            addPoints();
            return gridBoard[0][0];
        }
    }
}

function updateLocalStorage() {
    document.querySelector('.player-x-score').textContent = totalWinsX;
    document.querySelector('.player-o-score').textContent = totalWInsO;
    window.localStorage.setItem('totalXwins', totalWinsX);
    window.localStorage.setItem('totalOwins', totalWInsO);
    console.log(totalWinsX);
    console.log(window.localStorage.getItem('totalXwins'));
}

function addPoints() {
    for (let i = 0; i < 3; i++) {
        if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] == 'X') { //checks if any horizontal row is completly is X
            totalWinsX += 1;
            updateLocalStorage();
        } else if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] == 'O') { //checks if any horizontal row is completly is O
            totalWInsO += 1;
            updateLocalStorage();
        } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] == 'X') { //checks if any vertical row is completly is X
            totalWinsX += 1;
            updateLocalStorage();
        } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] == 'O') { //checks if any vertical row is completly is O
            totalWInsO += 1;
            updateLocalStorage();
        }
    }
    if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] == 'X') { //checks if diagnol left is X
        totalWinsX += 1;
        updateLocalStorage();
    } else if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] == 'O') { //checks if diagnol left is O
        totalWInsO += 1;
        updateLocalStorage();
    } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] == 'X') { //checks if diagnol right is X
        totalWinsX += 1;
        updateLocalStorage();
    } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] == 'O') { //checks if diagnol right is O
        totalWInsO += 1;
        updateLocalStorage();
    }
}

function eventReset() {
    for (let i = 0; i < boxes.length; i++) {
        for (let p = 1; p < boxes.length; p++) {
            didWin = false;

            document.querySelectorAll('.boxes').forEach(box => {
                box.classList.remove('won');
            });

            document.querySelectorAll('.boxes').forEach(hover => {
                hover.classList.add('boxes-hover');
            });

            // if (document.querySelector('.boxes').classList.getItem('boxes-hover') = true) {
            //     document.querySelector('.boxes').classList.add('boxes-hover');
            // }

            // if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] != null) { //checks if one of these horizontal rows is filled. the [0] or [1] = rows
            //     let row = document.querySelectorAll(`.row${i + 1}`); //checks all the three rows
            //     row.forEach(column => { //for one of the winning rows, the background changes color to green.
            //         column.classList.remove('won'); //adds a green background to the winning 3 boxes
            //         column.classList.add('boxes-hover'); //removes the gray hover color
            //     })
            //     row = document.querySelectorAll(`.row${i + 2}`);
            //     row.forEach(column => { //for one of the winning rows, the background changes color to green.
            //         column.classList.remove('won'); //adds a green background to the winning 3 boxes
            //         column.classList.add('boxes-hover'); //removes the gray hover color
            //     })
            //     // return gridBoard[i][0];
            // } else if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] != null) { //the same is repeated here, except the indexes are turned around to recognize vertical rows
            //     let column = document.querySelectorAll(`.column${i + 1}`) //column instead of row
            //     column.forEach(columnrow => {
            //         columnrow.classList.remove('won');
            //         columnrow.classList.add('boxes-hover');
            //     })
            //     // return gridBoard[i][0];
            // } else if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] != null) { //specific indexes for diagnal win
            //     let diagnl = document.querySelectorAll(`.diag1`)
            //     diagnl.forEach(diagrow => {
            //         diagrow.classList.remove('won');
            //         diagrow.classList.add('boxes-hover');
            //     })
            //     // return gridBoard[0][0];
            // } else if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] != null) { //diagnal win
            //     let diagnl2 = document.querySelectorAll(`.diag2`)
            //     diagnl2.forEach(diagrow2 => {
            //         diagrow2.classList.remove('won');
            //         diagrow2.classList.add('boxes-hover');
            //     })
            //     // return gridBoard[0][0];
            // } 
            gridBoard = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]
            console.log(gridBoard);
            boxes[0].attributes[0].nodeValue = 'img/blank.png';
            boxes[1].attributes[0].nodeValue = 'img/blank.png';
            boxes[2].attributes[0].nodeValue = 'img/blank.png';
            boxes[3].attributes[0].nodeValue = 'img/blank.png';
            boxes[4].attributes[0].nodeValue = 'img/blank.png';
            boxes[5].attributes[0].nodeValue = 'img/blank.png';
            boxes[6].attributes[0].nodeValue = 'img/blank.png';
            boxes[7].attributes[0].nodeValue = 'img/blank.png';
            boxes[8].attributes[0].nodeValue = 'img/blank.png';
            return gridBoard[i][0];
        }
    }
}

function eventClearScore() {
    window.localStorage.clear();
    window.location.reload();
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms['MyForm']["fname2"].value;
    console.log(x);
    console.log(y);
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else if (y == "") {
        alert("Name must be filled out");
        return false;
    }
}

function aiplaceTile() {
    if (gridBoard[1][1] != 'X') {
        boxes[4].attributes[0].nodeValue = 'img/o.png';
        gridBoard[1][1] = 'O';
        console.log(gridBoard);
    } else if (gridBoard[0][2] != 'X') {
        
    }
}