/* import GameBoard from "../src/gameBoard.js"; */
import { btnRotateEvent, DomBoard } from "./dom.js";
import { player, machinePlayer } from "./player.js";
import "./style.css";

const p1_info = machinePlayer();
const p1BoardDom = DomBoard(true, p1_info.myGame.board);

const p2_info = machinePlayer();
const p2BoardDom = DomBoard(false, p1_info.myGame.board);
p2_info.randomPlaceShip(p2_info, p2BoardDom);
p1_info.randomPlaceShip(p1_info, p1BoardDom);

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
/* turn this in function that reactive when is not the player turn and just active when is player turn */
function attackEvents(el, player, playerDom) {
	if (typeof el === "object") {
		el = el.value;
	}

	const coord = player.myGame.formatCoordinates(el);
	let response = player.myGame.receiveAttack(el);
	if (Array.isArray(response)) {
		playerDom.hitEvent(coord);
		player.turn = true;
		if (player.myGame.allShipSunk(player) === true) {
			return "End game";
		}
	}
	if (response === "Missed") {
		playerDom.missedEvent(coord);
		player.turn = true;
	}
	if (response === "Already shot there") {
		return "again";
	}
}
function removeClickAtk() {
	p2BoardDom.allRows.forEach((arr) =>
		arr.forEach((r) => r.removeEventListener("click", mainLoop))
	);
}
function machineLoop() {
	const str = p2_info.randCoord().join(",");
	const anw = attackEvents(str, p1_info, p1BoardDom);
	if (anw === "again") {
		machineLoop();
	}
	if (anw === "End game") {
		removeClickAtk();
		console.log("end put some pop up");
	}
	p2_info.turn = false;
}
function mainLoop() {
	if (p1_info.turn === true) {
		const anw = attackEvents(this.value, p2_info, p2BoardDom);
		if (anw === "End game") {
			removeClickAtk();
			console.log("end put some pop up");
		}
		if (anw !== "again") {
			p1_info.turn = false;
		}
	}
	if (p2_info.turn === true) {
		machineLoop();
	}
}
function startGameByClickEv() {
	p2BoardDom.allRows.forEach((arr) =>
		arr.forEach((r) => r.addEventListener("click", mainLoop))
	);
}
p1_info.turn = true;
startGameByClickEv();
