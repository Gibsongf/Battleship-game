import { completeShip} from './ships.js'
let allShips = Object.keys(shipType).map(completeShip);


/* Create Player.
Players can take turns playing the game by attacking the enemy Gameboard.

The game is played against the computer, so make ‘computer’ 
players capable of making random plays.
The AI does not have to be smart, 
but it should know whether or not a given move is legal.
(i.e. it shouldn’t shoot the same coordinate twice). */

function player(name){
    return {
        name,
        turn:false,
        allShips
    }
}