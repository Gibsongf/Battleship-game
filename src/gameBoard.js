/* 
Create Game boards factory.
Note that we have not yet created any User Interface.
We should know our code is coming together by running the tests.
You shouldn’t be relying on console.logs or 
DOM methods to make sure your code is doing what you expect it to.

Game boards 
should be able to report whether or not all of their ships have been sunk. */

/* a 2D board with 10x10 with column being letter and row number */
function objBoard() {
	let column = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
	let board = {};

	const arr = (r) => {
		r++;
		let ar = [];
		for (let i = 0; i <= column.length - 1; i++) {
			ar.push(" ");
		}
		board[r] = ar;
	};



	board.columns = column;
	Array.from(column.keys()).forEach((r) => arr(r));
	return board;
}
/* should be able to place ships at specific coordinates
by calling the ship factory function. */
/* user will click in a board location then the ship image 
will show default position being horizontal */
/* IS ONE FUCKING BOARD FOR PLAYER FUCK */
class GameBoard {
	constructor() {
		this.board = objBoard();
		/* instead of shot we save the coordinates of each ship  */
		this.playerShipLocation = [];
		this.shotsLocation = [];
	}
	/* should be able to report whether or not all of their ships have been sunk. */
	allShipSunk(player){
		/*
		allsunk = true 
		player.ships.forEach 
		s => if s.sunk === false 
			allsunk = false
			return
		return allsunk
		*/
	}
	receiveAttack (coordinates){
		coordinates[1] = this.board.columns.indexOf(coordinates[1]);
		
		const hitLocation = this.board[coordinates[0]][coordinates[1]]
		if(this.shotsLocation.includes(coordinates.join(','))){
			return "Already shot there";
		}
		if (hitLocation !== " ") {
			hitLocation.hit();
			hitLocation.isSunk();
			this.shotsLocation.push(coordinates.join(','))
			return [hitLocation.name,hitLocation.hits, hitLocation.sunk]
		}
		else{
			this.shotsLocation.push(coordinates.join(','))
			return 'Missed'
		}
	}

	placeShip(ship, coordinates) {
		/* need a player argument to negate invalid place for ship */
		coordinates[1] = this.board.columns.indexOf(coordinates[1]);

		if (this.board[coordinates[0]][coordinates[1]] !== " ") {
			return "POSITION ALREADY USED";
		}

		const availablePos = this.getCoord(coordinates, ship);
		const goUpDown = (direction) => {
			if (availablePos[direction] === null) {
				return "Not a valid move";
			}
			for (let newC of availablePos[direction]) {
				this.board[newC][coordinates[1]] = ship;
			}
			return [availablePos[direction], coordinates[1]];
		};
		const goLeftRight = (direction) => {
			if (availablePos[direction] === null) {
				return "Not a valid move";
			}
			for (let newC of availablePos[direction]) {
				/* WE IMPLEMENT THIS LATER */
				/* if newC(column) > player 1 half of the board = invalid move */
				/* if newC(column) < player 1 half of the board or 
				if newC(column) > player 2 half of the board = invalid move */

				this.board[coordinates[0]][newC] = ship;
			}
			return [coordinates[0], availablePos[direction]];
		};
		return { goUpDown, goLeftRight };
	}
	getCoord(coordinates, ship) {
		let up = this.getAllCoord(coordinates[0], ship, true); /* row */
		let left = this.getAllCoord(coordinates[1], ship, true); /* col */
		let down = this.getAllCoord(coordinates[0], ship); /* row */
		let right = this.getAllCoord(coordinates[1], ship); /* col */

		return { up, left, down, right };
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
