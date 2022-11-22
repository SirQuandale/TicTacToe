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

boxes.forEach((box, index) => {
    box.addEventListener('click', (data) => {;
        place = gridBoard[Math.floor(index / 3)][index % 3];
        console.log(data.target.attributes[0].nodeValue);
        if (playerTurn === 'X') {
            if (data.target.attributes[0].nodeValue != 'img/o.png') {
                data.target.attributes[0].nodeValue = 'img/x.png';
                place = gridBoard[Math.floor(index / 3)][index % 3] = playerTurn;
                console.log(place);
                playerTurn = 'O';
            }
        } else if (playerTurn === 'O') {
            if (data.target.attributes[0].nodeValue != 'img/x.png') {
                data.target.attributes[0].nodeValue = 'img/o.png';
                place = gridBoard[Math.floor(index / 3)][index % 3] = playerTurn;
                console.log(place);
                playerTurn = 'X';
            }
        }

        checkWinner();
        console.log(gridBoard);
    })
});