
const boardContainer = document.querySelector('.gameboards');
const p1Board = document.createElement('div');
const p2Board = document.createElement('div');
const rowsNum = document.createElement('div');


rowsNum.classList.add('rows-num');
p1Board.classList.add('board');
p2Board.classList.add('board');
boardContainer.appendChild(p1Board);
boardContainer.appendChild(rowsNum);
boardContainer.appendChild(p2Board);
for (let i = 0; i <= 9; i++){ 
    const num = document.createElement('div');
    num.textContent = i;
    rowsNum.appendChild(num);
    const col = document.createElement('div');
    col.classList.add('col');
    makeColumns(col);
    const clone = col.cloneNode(true);
    p1Board.appendChild(col)
    p2Board .appendChild(clone)
};
function makeColumns(r){
    const arr = Array.from(Array(10).keys());
    arr.forEach(a => {
        const row = document.createElement('div');
        row.classList.add("row")
    
        r.appendChild(row)
    })
}