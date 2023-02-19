import GameBoard from "../src/gameBoard.js";
import './style.css'
const p1 = new GameBoard();

function makeDomBoard(){

}
const boardContainer = document.querySelector('.gameboards');
const p1Board = simple_el('div','board-1','',boardContainer);
const p2Board = simple_el('div','board-2','',boardContainer);

function simple_el(type, selector_name, innerContent,appendTo) {
    const ell = document.createElement(type);
    ell.className = selector_name;
    if(innerContent !== undefined){
        ell.textContent = innerContent;
    }
    if(appendTo !== undefined){
        appendTo.appendChild(ell)
    }
    return ell;
}

const letters = ['',"A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
for (let i = 0; i <= 10; i++){ 
    const col = document.createElement('div');
    if(i === 0){
        col.classList.add('rows-num');
    }
    else{
        col.classList.add('col');
    }
    boardRows(col);
    const clone = col.cloneNode(true);
    p1Board.appendChild(col)
    p2Board .appendChild(clone)
};


function boardRows(r){
    const arr = Array.from(Array(10).keys());
    const indxLetter = letters.shift();
    simple_el('div',"column-letters",indxLetter,r);
    
    arr.forEach(a => {
        if(a === 0 && letters.length > 0){
            
            if(r.className !== 'col'){  
                simple_el('div',"rows-num",a,r);    
            }
            else{
                simple_el('div',"row",'',r);
            }
        }
        else if(r.className !== 'col'){  
            simple_el('div',"rows-num",a,r);    
        }
        else{
            simple_el('div',"row",'',r);            
        }
        
    })
}