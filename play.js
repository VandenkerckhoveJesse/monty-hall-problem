var game = require('./game.js');
var utility = require('./utility.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const activeGame = new game.Game;
let revealed;
let chosen;

console.log("Welcome to the Monty Hall problem");
console.log("There are three doors: A, B and C. One of these doors has a car behind it and the other two a goat.")
console.log("You win whatever is behind the door");
readline.question("Which door do you choose?", door => {
    switch (door) {
        case "A" : revealed = activeGame.pickDoor(game.Doors.A);
            console.log("revelead " + revealed)
            chosen = game.Doors.A;
            break;
        case "B" : revealed = activeGame.pickDoor(game.Doors.B);
            console.log("revelead " + revealed)
            chosen = game.Doors.B;
            break;
        case "C" : revealed = activeGame.pickDoor(game.Doors.C);
            console.log("revelead " + revealed)
            chosen = game.Doors.C;
            break;
        default: throw new Error("Unexpected input, expected: 'A', 'B' or 'C'");
    }
    let ref = ["A", "B", "C"];
    console.log(`Behind the following door there is a goat behind: ${ref[revealed]}, you chose the door ${ref[chosen]}`);
    let otherDoor = utility.getThirdDoor(chosen, revealed);
    readline.question(`Do you wish to change the door to ${ref[otherDoor]}`, answer => {
        if(answer === "yes") {
            activeGame.changeDoor(otherDoor);
            chosen = otherDoor;
            console.log(`Door changed to ${ref[otherDoor]}`)
        } else {
            console.log(`Door remained to be ${ref[chosen]}`)
        }
        let refResult = ["", "You have won a car", "You must now take care of a goat"];
        console.log(refResult[activeGame.getResult()]);
    });

});
