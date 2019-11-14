class Puzzle {
	
	constructor(row, column) {
		this.row = row;
		this.column = column;
	}

	swapTiles(cell1, cell2) {
		var temp = document.getElementById(cell1).className;
		document.getElementById(cell1).className = document.getElementById(cell2).className;
		document.getElementById(cell2).className = temp;
	}

	shuffle() {
		for (var rowr=1; rowr<=3; rowr++) {
			for (var columnr=1; columnr<=3; columnr++) {
				// Pick a random row and a column from 1 to 3
				var row2 = Math.floor(Math.random()*3 + 1);
				var column2 = Math.floor(Math.random()*3 + 1);
				// Swap the cells
				swapTiles("cell"+rowr+columnr, "cell"+row2+column2);
			}
		}
	}

	clickTile() {
		var cell = document.getElementById("cell"+this.row+this.column);
		var tie = cell.className;

		if (tile != "tile9") {
			// Checking if white tile is on the right.
			if (this.column < 3) {
				if (document.getElementById("cell"+this.row+(this.column+1)).className == "tile9") {
					swapTiles("cell"+this.row+this.column, "cell"+this.row+(this.column+1));
					return;
				}
			}

			// Checking if white tile is on the left.
			if (this.column > 1) {
				if (document.getElementById("cell"+this.row+(this.column-1)).className == "tile9") {
					swapTiles("cell"+this.row+this.column, "cell"+this.row+(this.column-1));
					return;
				}
			}

			// Checking if white tile is above.
			if (this.row > 1) {
				if (document.getElementById("cell"+(this.row-1)+this.column).className == "tile9") {
					swapTiles("cell"+this.row+this.column, "cell"+(this.row-1)+this.column);
					return;
				}
			}

			// Checking if white tile is below.
			if (this.row > 3) {
				if (document.getElementById("cell"+(this.row+1)+this.column).className == "tile9") {
					swapTiles("cell"+this.row+this.column, "cell"+(this.row+1)+this.column);
					return;
				}
			}
		}
	}
}

function newGame() {
	var newpuzzle = new Puzzle()
}