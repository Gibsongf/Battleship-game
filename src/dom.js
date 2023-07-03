import hitX from "../src/img/hitX.png";

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
// function createImg() {
//     const iconHit = new Image();
//     iconHit.src = hitX;
//     iconHit.className = "hit-icon";
//     return iconHit;
// }
function btnRotateEvent() {
    const rotate = document.querySelector(".rotate");
    rotate.addEventListener("click", () => {
        rotate.value = Number(rotate.value) + 1;
        if (Number(rotate.value) >= 4) {
            rotate.value = 0;
        }
    });
}
function infoUser(passToUser) {
    const info = document.querySelector(".inform-user");
    info.textContent = passToUser;
}
function DomBoard(player1) {
    const boardContainer = document.querySelector(".gameboards");
    let allRows = createDomBoard().slice(1);
    return { hitEvent, missedEvent, hoverGridEvents, allRows, clickShipPlace };

    function hitEvent(arr) {
        allRows[arr[0]][arr[1]].setAttribute(
            "style",
            `background-image: url(${hitX})`
        );
    }
    function missedEvent(arr) {
        allRows[arr[0]][arr[1]].setAttribute("id", "missed-shot");
    }
    function clickShipPlace(arr) {
        if (!Array.isArray(arr)) {
            return;
        }
        arr.forEach((ar) =>
            allRows[ar[0]][ar[1]].setAttribute("id", "ship-placed")
        );
    }
    function hoverGridEvents(arr, remove) {
        const rotate = document.querySelector(".rotate");
        const direction = Object.keys(arr)[Number(rotate.value)];
        if (arr === "POSITION ALREADY USED" || arr === "Not a valid move")
            return;

        if (remove === true) {
            arr[direction].forEach((ar) => {
                if (allRows[ar[0]][ar[1]].id === "hovered") {
                    allRows[ar[0]][ar[1]].setAttribute("id", "");
                }
            });
        } else {
            arr[direction].forEach((ar) => {
                if (allRows[ar[0]][ar[1]].id !== "ship-placed") {
                    allRows[ar[0]][ar[1]].setAttribute("id", "hovered");
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

export { btnRotateEvent, DomBoard, infoUser };
