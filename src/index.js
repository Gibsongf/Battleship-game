/* import GameBoard from "../src/gameBoard.js"; */
import { btnRotateEvent, DomBoard } from "./dom.js";
import {player,machinePlayer} from "./player.js";
import "./style.css";

const p1_info = player();
const p1BoardDom = DomBoard(true, p1_info.myGame.board);

const p2_info = machinePlayer();
const p2BoardDom = DomBoard(false, p1_info.myGame.board);
p2_info.pcRandomMove(p2_info,p2BoardDom);
let canStart = false;


/* make a func while loop that will start when all ship are placed
event listener at p2board that when click active the p2receive attack
his turn will turn to false and then will be the machine turn
we will need a function to change the color of the target place
one for missed shot and accurate shot
 */
function pShip(elValue, remove, isClick) {
	const inx = p1_info.myGame.shipsPlaced;
	if (inx > 4) {
		removeEv();
		canStart = true;
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
	if (isClick === true) {
		p1BoardDom.clickShipPlace(move);
		return;
	}
	p1BoardDom.hoverGridEvents(move, remove, isClick);
}

function removeEv() {
	const events = ["click", "mouseover", "mouseout"];
	events.forEach((ev) =>
		p1BoardDom.allRows.forEach((arr) =>
			arr.forEach((r) => r.removeEventListener(ev, pShip))
		)
	);
}
const clickPlaceShip = (r) => {
	r.addEventListener("click", () => {
		pShip(r.value, false, true);
	});
};
const addHover = (r) => {
	r.addEventListener("mouseover", () => {
		pShip(r.value, false);
	});
};
const removeHover = (r) => {
	r.addEventListener("mouseout", () => {
		pShip(r.value, true);
	});
};
const allEv = (r) => {
	addHover(r);
	removeHover(r);
	clickPlaceShip(r);
};
btnRotateEvent();
p1BoardDom.allRows.forEach((arr) => {
	arr.forEach((r) => allEv(r));
});

/* now the main game loop */
p2BoardDom.allRows.forEach((arr) =>
	arr.forEach((r) =>
		r.addEventListener("click", () => {
            p2_info.myGame.receiveAttack(r.value)
		})
	)
);
