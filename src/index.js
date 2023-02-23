/* import GameBoard from "../src/gameBoard.js"; */
import { btnRotateEvent, DomBoard} from "./dom.js";
import player from "./player.js";
import "./style.css";

const p1_info = player();
const p1BoardDom = DomBoard(true, p1_info.myGame.board);
const p2_info = player();
const p2BoardDom = DomBoard(false, p2_info.myGame.board);
btnRotateEvent()

function pShip(e,remove,fromClick) {
    const inx = p1_info.myGame.shipsPlaced
    
    
    if(inx >4){
        return
    }
	const move = p1_info.myGame.placeShip(p1_info.allShips[inx], e,fromClick);
	p1BoardDom.hoverGrid(move,remove);
}

p1BoardDom.allRows.forEach((arr) =>
	arr.forEach((r) => r.addEventListener("click",()=> {
        pShip(r.value,false,true);
        p1_info.myGame.shipsPlaced ++

    }))
);
p1BoardDom.allRows.forEach((arr) =>
	arr.forEach((r) => r.addEventListener("mouseover",()=> {
        pShip(r.value,false)
    }))
);
p1BoardDom.allRows.forEach((arr) =>
	arr.forEach((r) => r.addEventListener("mouseout", ()=> {
        pShip(r.value,true)
    }))
);


/* now the main game loop */
