function createSimpleEl(type, selector_name, innerContent, appendTo) {
	const ell = document.createElement(type);
	ell.className = selector_name;
	if (innerContent !== undefined) {
		ell.textContent = innerContent;
	}
	if (appendTo !== undefined) {
		appendTo.appendChild(ell);
	}
	return ell;
}

function DomBoard(forPlayer,playerObjBoard) {
	const boardContainer = document.querySelector(".gameboards");
	let allRows = createDomBoard().slice(1);
	update()
	return {update,allRows}
	
	function update(){
		for (let k of Object.keys(playerObjBoard)){
			console.log(allRows[k])
			for(let i in playerObjBoard[k]){
			}
		}
	}
	function createDomBoard() {
		let letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
		const theBoard = createSimpleEl("div", "boards", "", boardContainer);
		let boardCon = createSimpleEl("div", "board-container", "", theBoard);
		let allRows = [];

		const colIndexLetters = (r) => {
			const indxLetter = letters.shift();
			createSimpleEl("div", "column-letters", indxLetter, r);
		};

		const boardRows = (r, i) => {
			const tenRows = []
			const arr = Array.from(Array(10).keys());
			arr.forEach((a) => {
				if (r.className !== "col") {
					createSimpleEl("div", "rows-num", a, r);
				} else {
					const el = createSimpleEl("div", "row", "", r);
					/* value = dom/obj board coordinate*/
					el.value = `${a}, ${i - 1}`;
					tenRows.push(el);
				}
			});
			return tenRows
		};

		for (let i = 0; i <= 10; i++) {
			const col = document.createElement("div");
			if (i === 0) {
				col.classList.add("rows-number");
			} else {
				col.classList.add("col");
			}
			colIndexLetters(col);
			allRows.push(boardRows(col, i));
			boardCon.appendChild(col);
		}
		if(forPlayer === true){
			createSimpleEl("h2", "info", 'Your side', theBoard);
		}
		else{
			createSimpleEl("h2", "info", 'Opponent side', theBoard);

		}
		return allRows;

	}
}

export default DomBoard;
