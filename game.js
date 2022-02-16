var Prizes = {
    GOAT: 0,
    CAR: 1
};

var GameState = {
    PLAYING: 0,
    WON_CAR: 1,
    LOST_GOAT: 2
};

var Doors = {
    A: 0,
    B: 1,
    C: 2
};


class Game {
    #doors = [Prizes.GOAT, Prizes.GOAT, Prizes.GOAT];
    #pickedDoor = null;
    #revealedDoor;
    #state = GameState.PLAYING;
    constructor() {
        let carDoor = Math.floor(Math.random() * 3);
        this.#doors[carDoor] = Prizes.CAR;
        this.#revealedDoor = (carDoor + (Math.random() * 2)) % 2
    }

    pickDoor(door) {
        if(this.#pickedDoor === null) {
            this.#pickedDoor = door;
            return this.#revealedDoor;
        }
        throw new Error("You can only pick the door for the first time once. Use change ")
    }

    changeDoor(door) {
        if(this.#state === GameState.PLAYING) {
            this.#pickedDoor = door;
        } else {
            throw new Error("Game has already ended")
        }
    }

    getResult() {
        if(this.#doors[this.#pickedDoor] === Prizes.CAR) {
            this.#state = GameState.WON_CAR;
            return GameState.WON_CAR;
        } else {
            this.#state = GameState.LOST_GOAT;
            return GameState.LOST_GOAT;
        }
    }

}