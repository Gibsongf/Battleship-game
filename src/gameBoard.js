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
		let allSunk = true;
		player.allShips.forEach(ship => {
			if(ship.sunk === false){
				allSunk = false;
				return
			}
		})
		console.log(allSunk)
		return allSunk
		
	}
	receiveAttack(coordinates) {

		const arrCoord = this.formatCoordinates(coordinates)
		const hitLocation = this.board[arrCoord[0]][arrCoord[1]];
		if (this.shotsLocation.includes(coordinates)) {
			return "Already shot there";
		}
		if (hitLocation !== " ") {
			hitLocation.hit();
			hitLocation.isSunk();
			this.shotsLocation.push(coordinates);
			return [hitLocation.name, hitLocation.hits, hitLocation.sunk,arrCoord];
		} else {
			this.shotsLocation.push(coordinates);
			return "Missed";
		}
	}

	formatCoordinates(toFormat) {
		const coordinates = toFormat.split(",");
		return [Number(coordinates[0]), Number(coordinates[1])];
	}
	placeShip(coordinates, ship, confirmed, direction) {
		if (!Array.isArray(coordinates)) {
			coordinates = this.formatCoordinates(coordinates);
		}
		if (this.board[coordinates[0]][coordinates[1]] !== " ") {
			return "POSITION ALREADY USED";
		}
		const avPos = this.getCoord(coordinates, ship);
		const isOccupied = (arr) => {
			if (!Array.isArray(arr)) {
				return true;
			}
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
			return avPos[direction];
		}
		if(isOccupied(avPos[direction]) === true){
			return 'Not a valid move'
		}
		return avPos;
	}

	arrayMoves = (avPos) => {
		if (Array.isArray(avPos.col)) {
			let arr = avPos.col.map((i) => [avPos.row, i]);
			return arr;
		}
		if (Array.isArray(avPos.row)) {
			let arr = avPos.row.map((i) => [i, avPos.col]);
			return arr;
		}
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
			right: this.arrayMoves(right),
			down: this.arrayMoves(down),
			left: this.arrayMoves(left),
			up: this.arrayMoves(up),
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
