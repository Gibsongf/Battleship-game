/* 
Create Game boards factory.
Note that we have not yet created any User Interface.
We should know our code is coming together by running the tests.
You shouldn’t be relying on console.logs or 
DOM methods to make sure your code is doing what you expect it to.

Game boards 
should be able to place ships at specific coordinates
by calling the ship factory function.

should have a receiveAttack function that 
takes a pair of coordinates, determines whether or 
not the attack hit a ship and then sends 
the ‘hit’ function to the correct ship, 
or records the coordinates of the missed shot.

should keep track of missed attacks so they can display them properly.
should be able to report whether or not all of their ships have been sunk. */

/* a 2D board with 10x10 with column being letter and row number */
function objBoard() {
    let column = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let board = {};

    const arr = (r) => {
        r++;
        let ar = [];
        for (let i = 0; i <= column.length - 1; i++) {
            ar.push("  ");
        }
        board[r] = ar;
    };

	function divideBoard(board){
		let p1Board = {} ;
		let p2Board = {} ;
		Object.keys(board).slice(0,5).forEach(k => p1Board[k] = board[k])
		Object.keys(board).slice(5).forEach(k => p2Board[k] = board[k])
		return [p1Board,p2Board]
		
	}
	
    board.columns = column;
    Array.from(column.keys()).forEach((r) => arr(r));
    let halfs = divideBoard(board)
	return {board,p1Board:halfs[0],p2Board:halfs[1]};
}
/* should be able to place ships at specific coordinates
by calling the ship factory function. */
/* user will click in a board location then the ship image 
will show default position being horizontal */
function placeShip(horizontal,vertical,boardPart){

}
function gameBoard() {
	let board = objBoard();

	
}
console.log(gameBoard());

