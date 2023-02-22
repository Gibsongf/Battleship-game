import GameBoard from "../src/gameBoard.js";
import { completeShip } from "../src/ships.js";

const aShip = completeShip("Submarine");
const board = new GameBoard();
describe("Place ship from GameBoard", () => {
	test("put ship somewhere", () => {
		
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
