/* 
Game boards 
should be able to report whether or not all of their ships have been sunk. */

/* a 2D board with 10x10 with column being letter and row number */
function objBoard() {
	let column = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
	let board = {};

	const arr = (r) => {
		/* r++; */
		let ar = [];
		for (let i = 0; i <= column.length - 1; i++) {
			ar.push(" ");
		}
		board[r] = ar;
	};

	/* board.columns = column; */
	Array.from(column.keys()).forEach((r) => arr(r));
	return board;
}
/* should be able to place ships at specific coordinates
by calling the ship factory function. */
/* user will click in a board location then the ship image 
will show default position being horizontal */
class GameBoard {
	constructor() {
		this.board = objBoard();
		this.shipsPlaced = 0;
		/* instead of shot we save the coordinates of each ship  */
		this.playerShipLocation = [];
		this.shotsLocation = [];
	}
	/* should be able to report whether or not all of their ships have been sunk. */
	allShipSunk(player) {
		/*
		allsunk = true 
		player.allShips.forEach 
		s => if s.sunk === false 
			allsunk = false
			return
		return allsunk
		*/
	}
	receiveAttack(coordinates) {
		coordinates = this.formatCoordinates(coordinates);

		const hitLocation = this.board[coordinates[0]][coordinates[1]];
		if (this.shotsLocation.includes(coordinates.join(","))) {
			return "Already shot there";
		}
		if (hitLocation !== " ") {
			hitLocation.hit();
			hitLocation.isSunk();
			this.shotsLocation.push(coordinates.join(","));
			return [hitLocation.name, hitLocation.hits, hitLocation.sunk];
		} else {
			this.shotsLocation.push(coordinates.join(","));
			return "Missed";
		}
	}

	formatCoordinates(toFormat) {
		const coordinates = toFormat.split(",");
		return [Number(coordinates[0]), Number(coordinates[1])];
	}
	placeShip(coordinates, ship, confirmed, direction) {
		coordinates = this.formatCoordinates(coordinates);
		if (this.board[coordinates[0]][coordinates[1]] !== " ") {
			return "POSITION ALREADY USED";
		}
		const avPos = this.getCoord(coordinates, ship);
		const isOccupied = (arr) => {
			let anw = false;
			arr.forEach((num) => {
				if (this.board[num[0]][num[1]] !== " ") {
					anw = true;
				}
			});
			return anw;
		};
		const saveShipToObjBoard = (arr) => {
			arr.forEach((num) => {
				this.board[num[0]][num[1]] = ship;
			});
		};

		if (confirmed === true && isOccupied(avPos[direction]) === false) {
			this.shipsPlaced += 1;
			saveShipToObjBoard(avPos[direction]);
		}
		return avPos[direction];
	}
	moveByRow = (avPos) => {
		if (!Array.isArray(avPos.row)) {
			return;
		}
		let arr = [];
		for (let i of avPos.row) {
			arr.push([i, avPos.col]);
		}
		return arr;
	};
	moveByCol = (avPos) => {
		if (!Array.isArray(avPos.col)) {
			return;
		}
		let arr = [];
		for (let i of avPos.col) {
			arr.push([avPos.row, i]);
		}
		return arr;
	};
	getCoord(coordinates, ship) {
		if (!Array.isArray(coordinates)) {
			coordinates = this.formatCoordinates(coordinates);
		}

		let up = {
			row: this.getAllCoord(coordinates[0], ship, true),
			col: coordinates[1],
		}; /* row */

		let left = {
			row: coordinates[0],
			col: this.getAllCoord(coordinates[1], ship, true),
		}; /* col */
		let down = {
			row: this.getAllCoord(coordinates[0], ship),
			col: coordinates[1],
		}; /* row */

		let right = {
			row: coordinates[0],
			col: this.getAllCoord(coordinates[1], ship),
		}; /* col */
		return {
			up: this.moveByRow(up),
			left: this.moveByCol(left),
			down: this.moveByRow(down),
			right: this.moveByCol(right),
		};
	}

	getAllCoord(coordinates, ship, minus, indx = 0, lst = []) {
		if (indx >= ship.length) {
			return;
		}

		if (minus === true) {
			const newC = coordinates - indx;
			if (newC < 0) {
				return null;
			}
			lst.push(newC);
		} else {
			const newC = coordinates + indx;
			if (newC > 9) {
				return null;
			}
			lst.push(newC);
		}

		this.getAllCoord(coordinates, ship, minus, indx + 1, lst);

		if (lst.length != ship.length) {
			return null;
		}
		return lst;
	}
}
export default GameBoard;
