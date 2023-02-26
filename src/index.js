/* import GameBoard from "../src/gameBoard.js"; */
import { btnRotateEvent, DomBoard } from "./dom.js";
import player from "./player.js";
import "./style.css";

const p1_info = player();
const p1BoardDom = DomBoard(true, p1_info.myGame.board);

let canStart = false;
/* make a func while loop that will start when all ship are placed
event listener at p2board that when click active the p2receive attack
his turn will turn to false and then will be the machine turn
we will need a function to change the color of the target place
one for missed shot and accurate shot
 */
btnRotateEvent();

function pShip(elValue, remove, isClick) {
	const inx = p1_info.myGame.shipsPlaced;
	if (inx > 4) {
		return;
	}
	const direction = ["right", "down", "left", "up"];
	const i = document.querySelector(".rotate").value;
	const move = p1_info.myGame.placeShip(
		elValue,
		p1_info.allShips[inx],
		isClick,
		direction[i]
	);
	if(isClick === true){
		p1BoardDom.clickShipPlace(move);
		return
	}
	p1BoardDom.hoverGrid(move, remove, isClick);
}
const gridClick = (r) => {
	r.addEventListener("click", () => {
		pShip(r.value, false,true);
	})
}
const gridHover = (r) =>{
	r.addEventListener("mouseover", () => {
	pShip(r.value, false);
})
}
p1BoardDom.allRows.forEach((arr) =>
	arr.forEach((r) => {
		gridClick(r)
		gridHover(r)
	})
	)
;
;
p1BoardDom.allRows.forEach((arr) =>
	arr.forEach((r) =>
		r.addEventListener("mouseout", () => {
			pShip(r.value, true);
		})
	)
);
