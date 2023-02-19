
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

function makeDomBoard() {
	const letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
	const boardContainer = document.querySelector(".gameboards");
    
	return makeIt();

	function makeIt() {
		const p1Board = createSimpleEl("div", "boards", "", boardContainer);
		const p2Board = createSimpleEl("div", "boards", "", boardContainer);

        const p1BoardContainer = createSimpleEl("div", "board-container", "", p1Board);
		const p2BoardContainer = createSimpleEl("div", "board-container", "", p2Board);
		for (let i = 0; i <= 10; i++) {
			const col = document.createElement("div");
			if (i === 0) {
				col.classList.add("rows-number");
			} else {
				col.classList.add("col");
			}
			colIndexLetters(col);
			boardRows(col);

			const clone = col.cloneNode(true);
            p1BoardContainer.appendChild(col);
			p2BoardContainer.appendChild(clone);
		}
        const p1Info = createSimpleEl("h2", "info", "Your board", p1Board);
		const p2Info = createSimpleEl("h2", "info", "Opponent board", p2Board);

		return [p1Board, p2Board];
	}

	function colIndexLetters(r) {
		const indxLetter = letters.shift();
		createSimpleEl("div", "column-letters", indxLetter, r);
	}

	function boardRows(r) {
		const arr = Array.from(Array(10).keys());
		arr.forEach((a) => {
			if (r.className !== "col") {
				createSimpleEl("div", "rows-num", a, r);
			} else {
				createSimpleEl("div", "row", "", r);
			}
		});
	}
}
export default makeDomBoard

