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
const isSunk = (ship) => {
	if (ship.hit === ship.length) {
		return true;
	} else {
		return false;
	}
};
const hit = (ship) => {
	return {
		hits: ship.hits + 1,
	};
};
function shipsFactory(type) {
	const shipType = {
		Carrier: 5,
		Battleship: 4,
		Destroyer: 3,
		Submarine: 3,
		"Patrol Boat": 2,
	};
	return {
		name: type,
		length: shipType[type],
		hits: 0,
		sunk: false,
	};
}
export { isSunk, hit, shipsFactory };
/* console.log(shipsFactory("Destroyer")); */
/* 

*/
