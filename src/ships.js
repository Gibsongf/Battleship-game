function shipsFactory(type, shipLength) {
	return {
		name: type,
		length: shipLength,
		hits: 0,
		sunk: false,
		hit: "",
		isSunk: "",
	};
}

function completeShip(name) {
	let ship = shipsFactory(String(name), shipType[name]);

	ship.hit = () => {
		return (ship.hits += 1);
	};

	ship.isSunk = () => {
		if (ship.hits === ship.length) {
			ship.sunk = true;
			return true;
		} else {
			return false;
		}
	};

	return ship;
}



const shipType = {
	Carrier: 5,
	Battleship: 4,
	Destroyer: 3,
	Submarine: 3,
	"Patrol Boat": 2,
};

/* should be able to place ships at specific coordinates
by calling the ship factory function. */
export { completeShip };
