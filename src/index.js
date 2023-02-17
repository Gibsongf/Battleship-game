import GameBoard from "../src/gameBoard.js";
import './style.css'
const p1 = new GameBoard();
for(let i of p1.board.columns){
    console.log(i)
}