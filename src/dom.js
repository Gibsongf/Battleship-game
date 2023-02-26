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
function btnRotateEvent(){
	const rotate = document.querySelector(".rotate");
		rotate.addEventListener("click", () => {
			rotate.value = Number(rotate.value) + 1;
			if (Number(rotate.value) >= 4) {
				rotate.value = 0;
			}
		});
}
function DomBoard(player1, playerObjBoard) {
	const boardContainer = document.querySelector(".gameboards");
	let allRows = createDomBoard().slice(1);
	return { update, hoverGrid, allRows,clickShipPlace };

	
	function clickShipPlace(arr){
		if (!Array.isArray(arr)) {
			return;
		}
		arr.forEach(ar => allRows[ar[0]][ar[1]].setAttribute("id", "ship-placed"))

	}
	function hoverGrid(arr, remove,) {
		const rotate = document.querySelector(".rotate");

		const direction = Object.keys(arr)[Number(rotate.value)];
		if (arr[direction] === undefined) return;
		if(arr === 'POSITION ALREADY USED') return
		
		if (remove === true ) {
			
			arr[direction].forEach(ar => {
				if(allRows[ar[0]][ar[1]].id === 'hovered'){
					allRows[ar[0]][ar[1]].setAttribute("id", "")
				}

			});
			
		} else {
			arr[direction].forEach(ar => {
				if(allRows[ar[0]][ar[1]].id !== 'ship-placed'){
					allRows[ar[0]][ar[1]].setAttribute("id", "hovered")
				}

			});
		}
	}
	function createDomBoard() {
		let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
		const theBoard = createSimpleEl("div", "boards", "", boardContainer);
		let boardCon = createSimpleEl("div", "board-container", "", theBoard);
		let allRows = [];

		const colIndexLetters = (r, i) => {
			if (i === 0) {
				createSimpleEl("div", "index-row", "", r);
			} else {
				createSimpleEl("div", "index-row", i - 1, r);
			}
		};

		const boardRows = (r, i) => {
			const tenRows = [];
			const arr = Array.from(Array(10).keys());

			arr.forEach((a) => {
				const indxLetter = letters.shift();
				if (r.className !== "row") {
					createSimpleEl("div", "index-column", indxLetter, r);
				} else {
					const el = createSimpleEl("div", "grid", "", r);
					/* value = dom/obj board coordinate*/
					el.value = `${i - 1},${a}`;
					tenRows.push(el);
				}
			});
			return tenRows;
		};

		for (let i = 0; i <= 10; i++) {
			const row = document.createElement("div");
			if (i === 0) {
				row.classList.add("all-col-index");
			} else {
				row.classList.add("row");
			}
			colIndexLetters(row, i);
			allRows.push(boardRows(row, i));
			boardCon.appendChild(row);
		}
		if (player1 === true) {
			createSimpleEl("h2", "info", "Your side", theBoard);
		} else {
			createSimpleEl("h2", "info", "Opponent side", theBoard);
		}
		return allRows;
	}
}

export { btnRotateEvent, DomBoard};
