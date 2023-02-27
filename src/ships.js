function shipsFactory(type, shipLength) {
	return {
		name: type,
		length: shipLength,
		hits: 0,
		sunk: false,
		hit: "",
		isSunk: "",
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

/* should be able to place ships at specific coordinates
by calling the ship factory function. */
export { completeShip };
