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
			console.log(allRows[k],k)
			for(let i in playerObjBoard[k]){
				allRows[k][i].textContent = playerObjBoard[k][i]
			}
		}
	}
	function createDomBoard() {
		let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
		const theBoard = createSimpleEl("div", "boards", "", boardContainer);
		let boardCon = createSimpleEl("div", "board-container", "", theBoard);
		let allRows = [];

		const colIndexLetters = (r,i) => {
			if(i === 0){
				createSimpleEl("div", "index-row", '', r);
			}
			else{
				createSimpleEl("div", "index-row", i-1, r);
			}
		};

		const boardRows = (r, i) => {
			const tenRows = []
			const arr = Array.from(Array(10).keys());

			arr.forEach((a) => {
				const indxLetter = letters.shift();
				if (r.className !== "row") {
					createSimpleEl("div", "index-column", indxLetter, r);
				} else {
					const el = createSimpleEl("div", "grid", "", r);
					/* value = dom/obj board coordinate*/
					el.value = `${a}, ${i - 1}`;
					tenRows.push(el);
				}
			});
			return tenRows
		};

		for (let i = 0; i <= 10; i++) {
			const row = document.createElement("div");
			if (i === 0) {
				row.classList.add("all-col-index");
			} else {
				row.classList.add("row");
			}
			colIndexLetters(row,i);
			allRows.push(boardRows(row, i));
			boardCon.appendChild(row);
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
