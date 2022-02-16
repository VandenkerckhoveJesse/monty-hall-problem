const game = require('./game.js');
const utility = require('./utility');

const GAME_SIM_AMOUNT = 100;

var changingGroup = [];
var stayingGroup = [];

initializeArrayWithGames(changingGroup);
initializeArrayWithGames(stayingGroup);

pickDoors(changingGroup);
pickDoors(stayingGroup);

changeDoors(changingGroup);

changingGroupResults = getGameResults(changingGroup);
stayingGroupResults = getGameResults(stayingGroup);

changingGroupWinPercentage = getWinPercentage(changingGroupResults);
stayingGroupWinPercentage = getWinPercentage(stayingGroupResults);

console.log(`The changing group has a win percentage of ${changingGroupWinPercentage}%`);
console.log(`The staying group has a win percentage of ${stayingGroupWinPercentage}%`);



function initializeArrayWithGames(array) {
    for(let i = 0; i < GAME_SIM_AMOUNT; i++) {
        array[i] = new game.Game();
    }
}

function pickDoors(gameArray) {
    let options = [game.Doors.A, game.Doors.B, game.Doors.C];
    for(let i = 0; i < GAME_SIM_AMOUNT; i++) {
        let picked = options[Math.floor(Math.random() * 3)];
        gameArray[i].pickDoor(picked);
    }
}

function changeDoors(gameArray) {
    for(let i = 0; i < GAME_SIM_AMOUNT; i++) {
        let game = gameArray[i];
        let previousDoor = game.getPickedDoor();
        let revealedDoor = game.revealedDoor;
        game.changeDoor(utility.getThirdDoor(previousDoor, revealedDoor));
    }
}

function getGameResults(gameArray) {
    const results = [];
    for(let i = 0; i < GAME_SIM_AMOUNT; i++) {
        results[i] = gameArray[i].getResult();
    }
    return results;
}

function getWinPercentage(resultArray) {
    return (resultArray.filter(gameState => gameState === game.GameState.WON_CAR).length / GAME_SIM_AMOUNT) * 100;
}