import GameBoard from "../src/gameBoard.js";
import { completeShip } from "../src/ships.js";

const aShip = completeShip("Submarine");
const board = new GameBoard();
describe("Place ship from GameBoard", () => {
	test("put ship somewhere", () => {
		let coordinates = '2, 0';
		expect(
			board.placeShip(aShip, coordinates).goUpDown("down")
		).toStrictEqual([[2, 3, 4], 0]);
		coordinates = '7,6';
    expect(board.placeShip(aShip,coordinates).goUpDown('up')).toStrictEqual([[7,6,5],6]);
  /*   coordinates = [7, 'c'];
    expect(board.placeShip(aShip,coordinates).goLeftRight('left')).toStrictEqual([7,[2,1,0]]);
    coordinates = [7, 'd'];
    expect(board.placeShip(aShip,coordinates).goLeftRight('right')).toStrictEqual([7,[3,4,5]]);
	});
	test("place ship invalid place", () => {
		let coordinates = [8, "a"];
		expect(
			board.placeShip(aShip, coordinates).goUpDown("down")
		).toStrictEqual("Not a valid move"); */
	});
});

/* describe("receiveAttack functionality", () => {
	test("ship get hit by receiveAttack", () => {
		expect(board.receiveAttack([2, "a"])).toStrictEqual(["Submarine", 1, false,]);
	});
	test("receiveAttack used location", () => {
		expect(board.receiveAttack([2, "a"])).toStrictEqual(
			"Already shot there"
		);
	});
	test("receiveAttack missed", () => {
		expect(board.receiveAttack([7, "d"])).toStrictEqual("Missed");
	});
}); */
