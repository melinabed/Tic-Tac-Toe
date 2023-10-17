//Event Listener attacthed to drop down difficulty menu
//that implements start of game
const mode = document.querySelectorAll('#diff');
mode.forEach((mode) => {
    mode.addEventListener('click', () => {
        Game.start();
    });
});

//Controls the render of the gameboard
const Gameboard = (() => {

    const render = () => {
        const gameBox = document.querySelectorAll('.box');
        gameBox.forEach((gameBox) => {
            gameBox.addEventListener('click', Game.handleClick);
                
        });
    }
    const update = (index, value) => {
        gameBox[index] = value;
    }
    
    return {
        render,
        update
    }
})();

//Logic for game and calls the gameboard function as well as
//applies an index for the gameboard boxes
const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector('#player1'), "X"),
            createPlayer(document.querySelector('#player2'), "O")
            ]
            currentPlayerIndex = 0;
            gameOver = false;
            Gameboard.render();
    }
    const handleClick = (event) => {
        let index = parseInt(event.target.id.split("x")[1]);
        Game.update(index, players[currentPlayerIndex].mark);
    }

    return {
        start,
        handleClick
    }

})();

//Player creation
const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}



