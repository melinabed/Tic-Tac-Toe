//Attach event listener to to each game box
//Start the game
//Check the gamemode
//Set win conditions
//Determine current player
//After each move check win conditions and set other player as active

const mode = document.querySelectorAll('#diff');
mode.forEach((mode) => {
    mode.addEventListener('click', () => {
        Game.start();
    });
});

const Gameboard = (() => {

    const render = () => {
        const gameBox = document.querySelectorAll('.box');
        gameBox.forEach((gameBox) => {
            gameBox.addEventListener('click', Game.handleClick);
                
        });
    }
    
    
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
            createPlayer(document.querySelector('#player1'), "X"),
            createPlayer(document.querySelector('#player2'), "O")
            ]
            currentPlayerIndex = 0;
            gameOver = false;
            Gameboard.render();
    }
    const handleClick = (event) => {
        let index = parseInt(event.target.id.split("x")[1]);
        console.log(index);
    }

    return {
        start,
        handleClick
    }

})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}









//const gameBox = document.querySelectorAll('.box');
        //gameBox.forEach((gameBox) => {
            //gameBox.addEventListener('click', () => {
                //console.log('yurrr');
            //});
        //});
