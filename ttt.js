const startGame = document.querySelectorAll('#diff');
startGame.forEach((startGame) => {
    startGame.addEventListener('click', () => {
        console.log("have you started?");
    });
});

function displayController() {
    const boxElement = document.querySelectorAll('.box');
    boxElement.forEach((boxElement) => {
        boxElement.addEventListener('click', () => {
            console.log('X')
        })
    })
}
