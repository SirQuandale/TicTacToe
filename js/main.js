let gridBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const boxes = document.querySelectorAll('.img-btn');
const resetButton = document.querySelector('.reset');
let playerTurn = 'X';
let totalWinsX = 0
totalWinsX = parseInt(window.localStorage.getItem('totalXwins'));
let totalWInsO = 0;
totalWInsO = parseInt(window.localStorage.getItem('totalOwins'));
let totalDraws = 0;
let didWin = false;
let dataL;

resetButton.addEventListener('click', eventReset);
document.querySelector('.player-x-score').textContent = totalWinsX;
document.querySelector('.player-o-score').textContent = totalWInsO;

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
            dataL = data.target.attributes[0].nodeValue;
            console.log(data.target.attributes[0].nodeValue);
        }
    })
});