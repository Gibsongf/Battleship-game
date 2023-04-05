import { completeShip} from "../src/ships.js";

const aShip = completeShip('Submarine');
test('Increase the ship hit number',() => {
    expect(aShip.hit()).toBe(1)
    expect(aShip.hit()).toBe(2)
    expect(aShip.hit()).toBe(3)

})
test('Check if the ship was sunk',() => {
    expect(aShip.isSunk()).toBe(true)
    expect(aShip.sunk).toBe(true)
})