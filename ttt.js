//Displays a message if the game is won or ended in a tie
const displayController = (() => {
    const renderMessage = (message) => {
        document.querySelector('#message').innerHTML = message;
    }
    return {
        renderMessage,
    }
})();

//Creates a gameboard as an array and renders it when
//the start button is clicked
const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id=square-${index}>${square}</div>`
        })
        document.querySelector('#gameboard').innerHTML = boardHTML;
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', Game.handleClick);
        })
    };
    const update = (index, value) => {
        gameboard[index] = value;
        render();
    };
    
    const getGameboard = () => gameboard;
    
    return {
        render,
        update,
        getGameboard
    }

})();

//Factory for the players and markers
const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

//Logic for the game
const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector('#player1').value, "X"),
            createPlayer(document.querySelector('#player2').value, "O")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('click', handleClick);
        })
    }
    const handleClick = (event) => {
        if (gameOver) {
            return;
        }

        let index = parseInt(event.target.id.split('-')[1]);

        if (Gameboard.getGameboard()[index] !== "")
            return;

            Gameboard.update(index, players[currentPlayerIndex].mark);

            if (checkWinner(Gameboard.getGameboard(), players[currentPlayerIndex].mark)) {
                gameOver = true;
                displayController.renderMessage(`${players[currentPlayerIndex].name} wins. 3 in a row!`)
            } else if (checkTie(Gameboard.getGameboard())) {
                gameOver = true;
                displayController.renderMessage("It's a tie!")
            }   

            currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }
    const restart = () => {
        for (let i = 0; i < 9; i++) {
            Gameboard.update(i, "");
        }
        Gameboard.render();
        gameOver = false;
        document.querySelector('#message').innerHTML = "";
    }

    return {
        start,
        handleClick,
        restart
    }
})();

//Logic to determine win conditions with the win combinations
function checkWinner(board) {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winCombos.length; i++) {
        const [a, b, c] = winCombos[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]){
            return true;
        }
    }
    return false;
}

function checkTie(board) {
    return board.every(cell => cell !== "")
}

const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', () => {
    Game.start();
})

const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click', () => {
    Game.restart();
})




