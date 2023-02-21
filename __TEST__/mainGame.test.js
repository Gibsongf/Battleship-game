import GameBoard from "../src/gameBoard.js";
import DomBoard from "../src/dom.js";
import player from "../src/player.js";

test('inital test dom',() => {
    const p1_info = player();
    let av_move = p1_info.myGame.placeShip(p1_info.allShips[0],'5,0');
    expect(av_move.goLeftRight('right')).toStrictEqual([5,[0,1,2,3,4]])

})