/* 
Begin your app by creating the Ship factory function.

Your ‘ships’ will be objects that include their length,
the number of times they’ve been hit and whether
or not they’ve been sunk.

REMEMBER you only have to test
your object’s public interface.
 
Only methods or properties that are
used outside of your ‘ship’ object need unit tests.

Ships should have a hit()
function that increases 
the number of ‘hits’ in your ship.

isSunk() should be a 
function that calculates 
it based on their length and the number of ‘hits’. */

/* const hit = (ship) => {
	console.log(this)
	return ship.hits += 1;
}; */

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
/* let carrier = shipsFactory('Carrier', 5);
let battleship = shipsFactory("Battleship", 4);
let destroyer = shipsFactory("Destroyer", 3);
let submarine  = shipsFactory("Submarine", 3);
let patrolBoat = shipsFactory("Patrol Boat", 2); */

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
let allShips = Object.keys(shipType).map(completeShip);

export { completeShip };
/* console.log(shipsFactory("Destroyer")); */
/* 

*/
