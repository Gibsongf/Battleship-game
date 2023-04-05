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
	test('correct coordinates that the ship can be placed', () => {
		expect(board.getCoord(coordinates,aShip).right).toStrictEqual(receive.right);
		expect(board.getCoord(coordinates,aShip).left).toStrictEqual(receive.left);
		expect(board.getCoord(coordinates,aShip).up	).toStrictEqual(receive.up);
		expect(board.getCoord(coordinates,aShip).down).toStrictEqual(receive.down);
	});
	test("ship register at board obj", () => {
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
	test("don't allow place ship in invalid board location", () => {
		let coord = '0,0';
		expect(board.placeShip(coord,aShip,true,'up')).toStrictEqual('Not a valid move');
		expect(board.placeShip(coord,aShip,true,'left')).toStrictEqual('Not a valid move');
	});
	test("Position already used when placing ship",() => {
		board.placeShip(coordinates,aShip,true,'left')
		expect(board.placeShip(coordinates,aShip,true,'left')).toStrictEqual('POSITION ALREADY USED');
		
	})
});

describe("board reaction after receive an attack", () => {
	const atkCoord = '2,1';
	board.placeShip('2,1', aShip, true,'right')
	test("ship get hit", () => {
		expect(board.receiveAttack(atkCoord)).toStrictEqual(["Submarine", 1, false,[2,1]]);
		expect(board.receiveAttack('2,2')).toStrictEqual(["Submarine", 2, false,[2,2]]); 
	});
	test("repeat hit location", () => {
		expect(board.receiveAttack(atkCoord)).toStrictEqual(
			"Already shot there"
		);
	});
	test("missed hit", () => {
		expect(board.receiveAttack('7,1')).toStrictEqual("Missed");
	});
	test('ship is sunk after all part been hit', () =>{
		expect(board.receiveAttack('2,3')).toStrictEqual(["Submarine", 3, true,[2,3]]);
	})
});


	

