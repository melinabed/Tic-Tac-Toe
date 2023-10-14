const startGame = document.querySelectorAll('#diff');
startGame.forEach((startGame) => {
    startGame.addEventListener('click', () => {
        Game.start();
    });
});

const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const setMarker = (index, sign) => {
        if (index > board.length)
        return;
        board[index] = sign;
    };
    const getMarker = (index) => {
        if (index > board.length)
        return;
        return board[index];
    }
    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    };
    return {setMarker, getMarker, reset};
})();

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").innerHTML,"X"),
            createPlayer(document.querySelector("#player2").innerHTML, "O")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard();
        setMarker();
        getMarker();
        reset();
    };
    return {
        start,
    }
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}






