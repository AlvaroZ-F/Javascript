/*
	PUZZLE. Create a square picture with x number of cells, keeping one empty, so the
	player can swipe the cells to one direction or the other until the cells are all
	in place. Keep in mind:
	- The dimensions of the puzzle will be choosen at the start by the player.
	- The blank space can only move up, down, left and right. Be sure the player's
	move is valid.
	- Add a time limit as a timer, and count the movements made.
	- Implement "draw()" method that will print in the screen the puzzle so it can
	be tested.
*/

class Board {
	constructor(dim, diff = 0) {
		this.dim = dim;
		this.diff = diff;
	}

	get positions_sol() {
		return this.create_pos_array();
	}

	create_pos_array() {
		var array = [];
		for (let i = 0; i <= (this.dim * this.dim)-2; i++) {
			array[i] = i+1;
		}
		array[(this.dim * this.dim)-1] = 0;
		return array;
	}

	shuffle() {

	}

	draw() {

	}

}

class Player {
	constructor(counter, timer) {
		this.counter = counter;
		this.timer = timer;
	}

	moves() {

	}

	timeout() {
		
	}
}
puzzle = new Board(prompt("Introduce the dimensions of the puzzle"));
document.write(puzzle.create_pos_array());
