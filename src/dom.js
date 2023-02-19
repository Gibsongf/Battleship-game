
const boardContainer = document.querySelector('.gameboards');
const p1Board = simple_el('div','board','',boardContainer);
const rowsNum = simple_el('div','rows-num','',boardContainer);
const p2Board = simple_el('div','board','',boardContainer);

function simple_el(type, selector_name, innerContent,appendTo) {
    const ell = document.createElement(type);
    ell.className = selector_name;
    if(innerContent.length > 1){
        ell.textContent = innerContent;
    }
    console.log(appendTo)
    return ell;
}


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