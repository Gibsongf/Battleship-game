function shipsFactory(type, shipLength) {
	return {
		name: type,
		length: shipLength,
		hits: 0,
		sunk: false,
		hit: "",
		isSunk: "",
		position: "horizontal",
	};
}

function completeShip(name) {
	let ship = shipsFactory(String(name), shipType[name]);

	ship.hit = () => {
		return (ship.hits += 1);
	};

	ship.isSunk = () => {
		if (ship.hits === ship.length) {
			ship.sunk = true;
			return true;
		} else {
			return false;
		}
	};

	return ship;
}

function objBoard() {
	let column = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
	let board = {};
	const arr = (r) => {
		let ar = [];
		for (let i = 0; i <= column.length - 1; i++) {
			ar.push(" ");
		}
		board[r] = ar;
	};
	function divideBoard(board) {
		let p1Board = {};
		let p2Board = {};
		Object.keys(board)
			.slice(0, 5)
			.forEach((k) => (p1Board[k] = board[k]));
		Object.keys(board)
			.slice(5)
			.forEach((k) => (p2Board[k] = board[k]));
		/* p1Board.columns = board.columns.slice(0,5)
		p2Board.columns = board.columns.slice(5) */
		return [p1Board, p2Board];
	}

	board.columns = column;
	Array.from(column.keys()).forEach((r) => arr(r));
	let halfs = divideBoard(board);
	return { board, p1Board: halfs[0], p2Board: halfs[1] };
}

const shipType = {
	Carrier: 5,
	Battleship: 4,
	Destroyer: 3,
	Submarine: 3,
	"Patrol Boat": 2,
};
let allShips = Object.keys(shipType).map(completeShip);

let battleship = shipsFactory("Patrol Boat", 2);
/* should be able to place ships at specific coordinates
by calling the ship factory function. */

class GameBoard {
	constructor() {
		this.gameObj = objBoard();
		console.log(this.gameObj);
	}
	/* 
	the user will have a order of the ship from the bigger to the smallest and 
	then click in a location that wanted to place that boat */
	placeShip(ship) {
		let coordinates = [
			7,
			this.gameObj.board.columns.indexOf("c"),
		]; /* click location (colum a/j row 1/10) */
		if (this.gameObj.board[coordinates[0]][coordinates[1]] !== " ") {
			return "POSITION ALREADY USED";
		}
		console.log(this.getCoord(coordinates, ship));
	}
	getCoord(coordinates, ship) {
		let minusV = this.getMinusCoord(coordinates[0], ship);/* row */
		let minusH = this.getMinusCoord(coordinates[1], ship);/* col */
		let plusV = this.getPlusCoord(coordinates[0], ship);/* row */
		let plusH = this.getPlusCoord(coordinates[1], ship);/* col */

		return { minusV, minusH, plusV, plusH };
	}

	getPlusCoord(coordinates, ship, indx = 0, lst = []) {
		if (indx >= ship.length) {
			return;
		}
		const newC = coordinates + indx;
		if (newC > 9) {
			return null;
		}
		lst.push(newC);
		this.getPlusCoord(coordinates, ship, indx + 1, lst);
		console.log(lst.length, ship.length);
		if (lst.length != ship.length) {
			return null;
		}
		return lst;
	}
	getMinusCoord(coordinates, ship, indx = 0, lst = []) {
		if (indx >= ship.length) {
			return;
		}
		const newC = coordinates - indx;
		if (newC < 0) {
			return null;
		}
		lst.push(newC);
		this.getMinusCoord(coordinates, ship, indx + 1, lst);
		console.log(lst.length, ship.length);
		if (lst.length != ship.length) {
			return null;
		}
		return lst;
	}
}
const t = new GameBoard();
t.placeShip(battleship);
/* export { completeShip }; */
