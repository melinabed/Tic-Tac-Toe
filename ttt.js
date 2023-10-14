const startGame = document.querySelectorAll('#diff');
startGame.forEach((startGame) => {
    startGame.addEventListener('click', () => {
        Game.start();
    });
});

const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    const render = () => {
        const setValue = (index, marker) => {
            if (index > gameboard.length) return;
            gameboard[index] = marker;
        }
        const getValue = (index) => {
            if (index > gameboard.length) return;
            return gameboard[index];
        }
        const reset = () => {
            for (let i = 0; i < gameboard.length; i++) {
                gameboard[i] = "";
            }
        }
        return {setValue, getValue, reset};
    };

    return {
        render,
    }
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
        Gameboard.render();
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






