/* import GameBoard from "../src/gameBoard.js"; */
import { btnRotateEvent, DomBoard,infoUser  } from "./dom.js";
import { player, machinePlayer } from "./player.js";
import "./style.css";

const p1_info = player();
const p1BoardDom = DomBoard(true, p1_info.myGame.board);
const p2_info = machinePlayer();
const p2BoardDom = DomBoard(false, p1_info.myGame.board);
p2_info.randomPlaceShip(p2_info, p2BoardDom);
let canStart = false;

function pShip(elValue, remove, isClick) {
	const inx = p1_info.myGame.shipsPlaced;
	if (inx > 4) {
		canStart = true;
		infoUser("You can attack now");
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
		if(p1_info.allShips[inx+1] !== undefined){
			infoUser("Place your "+p1_info.allShips[inx+1].name); 
		}
		p1BoardDom.clickShipPlace(move);
		return;
	}
	p1BoardDom.hoverGridEvents(move, remove, isClick);
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

btnRotateEvent();
p1BoardDom.allRows.forEach((arr) => {
	arr.forEach((r) => {
		infoUser("Place your "+p1_info.allShips[0].name)
		addHover(r);
		removeHover(r);
		clickPlaceShip(r);
	});
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
		infoUser("You lose!")
		console.log("end put some pop up");
	}
	p2_info.turn = false;
}
function mainLoop() {
	if (canStart === true) {
		if (p1_info.turn === true) {
			const anw = attackEvents(this.value, p2_info, p2BoardDom);
			if (anw === "End game") {
				removeClickAtk();
				infoUser("You Won!")
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
}
function startGameByClickEv() {
	p2BoardDom.allRows.forEach((arr) =>
		arr.forEach((r) => r.addEventListener("click", mainLoop))
	);
}
p1_info.turn = true;
startGameByClickEv();
