let gridBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const boxes = document.querySelectorAll('.img-btn');
const resetButton = document.querySelector('.reset');
const scoreReset = document.querySelector('.clear');
let playerTurn = 'X';
let totalWinsX = 0;
let totalWInsO = 0;
let totalDraws = 0;
let didWin = false;
let dataL;

resetButton.addEventListener('click', eventReset);
scoreReset.addEventListener('click', eventClearScore);
document.querySelector('.player-x-score').textContent = totalWinsX;
document.querySelector('.player-o-score').textContent = totalWInsO;

if (window.localStorage.getItem('totalXwins') != null ) {
    totalWinsX = parseInt(window.localStorage.getItem('totalXwins'))
    document.querySelector('.player-x-score').textContent = totalWinsX;
}

if (window.localStorage.getItem('totalOwins') != null) {
    totalWInsO = parseInt(window.localStorage.getItem('totalOwins'));
    document.querySelector('.player-o-score').textContent = totalWInsO;
}

boxes.forEach((box, index) => {
    box.addEventListener('click', (data) => { //EventListener collects the data of the clicked box
        place = gridBoard[Math.floor(index / 3)][index % 3]; //places the x or o on the array board
        if (didWin == false) { //x and o can be placed as long as no one has won yet
            if (playerTurn === 'X') { //if X is the current player
                if (data.target.attributes[0].nodeValue != 'img/o.png') { //checks if the box isnt filled with O
                    data.target.attributes[0].nodeValue = 'img/x.png'; //replaces the blank box with X
                    place = gridBoard[Math.floor(index / 3)][index % 3] = playerTurn; //places the X in the array board
                    playerTurn = 'O'; //player turn changes
                    // aiplaceTile()
                }
            } else if (playerTurn === 'O') {
                if (data.target.attributes[0].nodeValue != 'img/x.png') {
                    data.target.attributes[0].nodeValue = 'img/o.png';
                    place = gridBoard[Math.floor(index / 3)][index % 3] = playerTurn;
                    playerTurn = 'X';
                }
            }
            checkWinner(); //checks winner
            dataL = data.target.attributes[0].nodeValue; //fills empty variable with the click data
        }
    })
});