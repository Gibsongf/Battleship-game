import { isSunk, hit, shipsFactory } from './ships.js'

const aShip = shipsFactory('Carrier');
test('Increase of hit number',() => {
    expect(hit(aShip)).toBe(aShip.hits)
})
test('Check if the ship was sunk',() => {
    expect(isSunk(aShip)).toBe(false)
})