import { completeShip } from "./ships.js";
import GameBoard from "../src/gameBoard.js";

const shipType = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    "Patrol Boat": 2,
};
let allShips = () => Object.keys(shipType).map(completeShip);

function randomNumbers() {
    let numRand = () => Math.floor(Math.random() * 10);
    let arr = Array.from(Array(2).keys());
    let randomArr = arr.map(numRand);
    return randomArr;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomPlaceShip(pc, pcDom) {
    const inx = pc.myGame.shipsPlaced;
    if (inx > 4) {
        return;
    }
    let randomPlace = randomNumbers();
    const objM = pc.myGame.getCoord(randomPlace, pc.allShips[inx]);
    const direction = () => {
        const arr = [];
        Object.keys(objM).forEach((k) => {
            if (objM[k] !== undefined) {
                arr.push(k);
            }
        });
        return arr[getRndInteger(0, arr.length - 1)];
    };
    const di = direction();
    if (di === undefined) {
        randomPlaceShip(pc, pcDom);
    } else {
        pc.myGame.placeShip(randomPlace, pc.allShips[inx], true, di);
        randomPlaceShip(pc, pcDom);
    }
}
function machinePlayer() {
    return {
        turn: false,
        allShips: allShips(),
        myGame: new GameBoard(),
        randomPlaceShip,
        randCoord: randomNumbers,
    };
}
function player() {
    return {
        turn: false,
        allShips: allShips(),
        myGame: new GameBoard(),
    };
}
export { player, machinePlayer };
