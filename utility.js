
const Doors = require("./game").Doors;

function getThirdDoor(Door1, Door2) {
    return [Doors.A, Doors.B, Doors.C].filter(numbers => numbers !== Door1 && numbers !== Door2)[0]
}

exports.getThirdDoor = getThirdDoor;