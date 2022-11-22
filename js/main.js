let gridBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const boxes = document.querySelectorAll('.img-btn');
let playerTurn = 'X';
let totalWinsX = 0;
let totalWInsO = 0;
let totalDraws = 0;
let didWin = false;


boxes.forEach((box, index) => {
    box.addEventListener('click', (data) => { //EventListener collects the data of the clicked box
        place = gridBoard[Math.floor(index / 3)][index % 3]; //places the x or o on the array board
        if (didWin == false) { //x and o can be placed as long as no one has won yet
            if (playerTurn === 'X') {
                if (data.target.attributes[0].nodeValue != 'img/o.png') {
                    data.target.attributes[0].nodeValue = 'img/x.png';
                    place = gridBoard[Math.floor(index / 3)][index % 3] = playerTurn;
                    playerTurn = 'O';
                }
            } else if (playerTurn === 'O') {
                if (data.target.attributes[0].nodeValue != 'img/x.png') {
                    data.target.attributes[0].nodeValue = 'img/o.png';
                    place = gridBoard[Math.floor(index / 3)][index % 3] = playerTurn;
                    playerTurn = 'X';
                }
            }
            checkWinner();
        }
    })
});