import GameBoard from "../src/gameBoard.js";
import DomBoard from "./dom.js";
import player from "./player.js";
import "./style.css";



const p1_info = player();
const p1BoardDom = DomBoard(true,p1_info.myGame.board);
const p2_info = player();
const p2BoardDom = DomBoard(false,p2_info.myGame.board);
function pShip(){
    const formatCoordinates = (toFormat) => {
		const coordinates = toFormat.split(',')
		return [Number(coordinates[0]), Number(coordinates[1])]
	}
    const newC = formatCoordinates(this.value)
    console.log(newC)
   
}
p1BoardDom.allRows.forEach(arr => arr.forEach(r => r.addEventListener('click',pShip)) )


console.log(p1_info.myGame.board)
/* take the ship length and change the color of 
the grid to the len of the ship and this start from the where the cursor is hovering
a button to rotate a that is it */
/* a rotate btn that go tto the available direction that place ship get */



/* now the main game loop */

