import { completeShip} from './ships.js'
import GameBoard from "../src/gameBoard.js";

const shipType = {
	Carrier: 5,
	Battleship: 4,
	Destroyer: 3,
	Submarine: 3,
	"Patrol Boat": 2,
};
let allShips = Object.keys(shipType).map(completeShip);


/* Create Player.
Players can take turns playing the game by attacking the enemy Gameboard.

The game is played against the computer, so make ‘computer’ 
players capable of making random plays.
The AI does not have to be smart, 
but it should know whether or not a given move is legal.
(i.e. it shouldn’t shoot the same coordinate twice). */

function player(){
    
    return {
        turn:false,
        allShips,
        myGame: new GameBoard()
    }
}
export default player