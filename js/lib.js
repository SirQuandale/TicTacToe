function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] != null) {
            console.log('win');
            let row = document.querySelectorAll(`.row${i + 1}`);
            row.forEach(column => {
                column.classList.add('won');
            })
            addPoints();
            return gridBoard[i][0];
        }

        if (gridBoard[0][i] == gridBoard[1][i] && gridBoard[1][i] == gridBoard[2][i] && gridBoard[2][i] != null) {
            console.log('win');

            let column = document.querySelectorAll(`.column${i + 1}`)
            column.forEach(columnrow => {
                columnrow.classList.add('won');
            })

            return gridBoard[i][0];
        }

        if (gridBoard[0][0] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][2] && gridBoard[2][2] != null) {
            console.log('win');

            let diagnl = document.querySelectorAll(`.diag1`)
            diagnl.forEach(diagrow => {
                diagrow.classList.add('won');
            })

            return gridBoard[0][0];
        }

        if (gridBoard[0][2] == gridBoard[1][1] && gridBoard[1][1] == gridBoard[2][0] && gridBoard[2][0] != null) {
            console.log('win');

            let diagnl2 = document.querySelectorAll(`.diag2`)
            diagnl2.forEach(diagrow2 => {
                diagrow2.classList.add('won');
            })

            return gridBoard[0][0];
        }

    }
}

function addPoints() {
    for (let i = 0; i < 3; i++) {
        if (gridBoard[i][0] == gridBoard[i][1] && gridBoard[i][1] == gridBoard[i][2] && gridBoard[i][2] != null) {
            console.log('added point');
        }
    }
}