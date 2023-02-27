import GameBoard from "../src/gameBoard.js";
import { completeShip } from "../src/ships.js";

const aShip = completeShip("Submarine");
const board = new GameBoard();

describe("Place ship from GameBoard", () => {
	let coordinates = "4, 5";
	const receive = {
		right : [[4, 5],[4, 6],[4, 7]],
		left : [[4, 5],[4, 4],[4, 3]],
		up : [[4, 5],[3, 5],[2, 5]],
		down : [[4, 5],[5, 5],[6, 5]]
	};
	test('new get coord', () => {
		expect(board.getCoord(coordinates,aShip).right).toStrictEqual(receive.right);
		expect(board.getCoord(coordinates,aShip).left).toStrictEqual(receive.left);
		expect(board.getCoord(coordinates,aShip).up	).toStrictEqual(receive.up);
		expect(board.getCoord(coordinates,aShip).down).toStrictEqual(receive.down);
	});
	test.only("put ship somewhere and register tha place at board obj", () => {
		const checkBoard = (arr) => {
			let allSaves = true
			arr.forEach((num) => {
				if(board.board[num[0]][num[1]] === " "){
					allSaves = false
				}
			});
			return allSaves
		}
		;
		expect(board.placeShip(coordinates,aShip,true,'left')).toStrictEqual(receive.left);
		expect(checkBoard(receive.left)).toBe(true);
		expect(checkBoard(receive.right)).toBe(false);
	});
	test("Receive undefined in invalid direction", () => {
		let coord = '0,0';
		expect(board.placeShip(aShip, coord).up).toStrictEqual(undefined);
		expect(board.placeShip(aShip, coord).left).toStrictEqual(undefined);
	});
	test("Position already used",() => {
		board.placeShip(aShip, coordinates, true,'left')
		expect(board.placeShip(aShip, coordinates,true,'left')).toStrictEqual('POSITION ALREADY USED');
		
	})
});

describe("receiveAttack functionality", () => {
	const atkCoord = '2,1';
	board.placeShip(aShip, '2,1', true).left
	test("ship get hit by receiveAttack", () => {
		expect(board.receiveAttack(atkCoord)).toStrictEqual(["Submarine", 1, false,]);
	});
	test("receiveAttack used location", () => {
		expect(board.receiveAttack(atkCoord)).toStrictEqual(
			"Already shot there"
		);
	});
	test("receiveAttack missed", () => {
		expect(board.receiveAttack('7,1')).toStrictEqual("Missed");
	});
});
