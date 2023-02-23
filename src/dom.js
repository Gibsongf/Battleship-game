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
function btnRotateEvent() {
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
	return { update, hoverGrid, allRows };

	function update() {
		for (let k of Object.keys(playerObjBoard)) {
			for (let i in playerObjBoard[k]) {
				allRows[k][i].textContent = playerObjBoard[k][i];
			}
		}
	}

	function hoverGrid(arr, remove, confirm) {
		const rotate = document.querySelector(".rotate");
		if (arr === "POSITION ALREADY USED") return;
		const direction = Object.keys(arr)[rotate.value];
		if (arr[direction] === undefined) return;
		if (confirm === true) {
			arr[direction].forEach((ar) =>
				allRows[ar[0]][ar[1]].setAttribute("id", "ship-placed")
			);
			return;
		}

		if (remove === true) {
			arr[direction].forEach((ar) =>
				allRows[ar[0]][ar[1]].setAttribute("id", "")
			);
		} else {
			for (let k of arr[direction]) {
				allRows[k[0]][k[1]].setAttribute("id", "hovered");
			}
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

export { btnRotateEvent, DomBoard };
