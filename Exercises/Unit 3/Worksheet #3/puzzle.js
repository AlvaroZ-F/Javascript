class Puzzle () {
	
	function swapTiles(cell1, cell2) {
		var temp = document.getElementById(cell1).className;
		document.getElementById(cell1).className = document.getElementById(cell2).className;
		document.getElementById(cell2).className = temp;
	}

	function shuffle() {
		for (var row=1; row<=3; row++) {
			for (var column=1; column<=3; column++) {
				var row2 = Math.floor(Math.random()*3 + 1);
				// Pick a random row from 1 to 3
				var column2 = Math.floor(Math.random()*3 + 1);
				// Pick a random column from 1 to 3
				swapTiles("cell"+row+column, "cell"+row2+column2);
				// Swap the look and feel of both cells
			}
		}
	}

	function clickTile (row, column) {
		var cell = document.getElementById("cell"+row+column);
		var tile = cell.className;

		if (tile != "tile9") {
			// Checking if white tile is on the right.
			if (column < 3) {
				if (document.getElementById("cell"+row+(column+1)).className == "tile9") {
					swapTiles("cell"+row+column, "cell"+row+(column+1));
					return;
				}
			}

			// Checking if white tile is on the left.
			if (column > 1) {
				if (document.getElementById("cell"+row+(column-1)).className == "tile9") {
					swapTiles("cell"+row+column, "cell"+row+(column-1));
					return;
				}
			}

			// Checking if white tile is on above.
			if (row > 1) {
				if (document.getElementById("cell"+(row-1)+column).className == "tile9") {
					swapTile("cell"+row+column, "cell"+(row-1)+column);
					return;
				}
			}

			//Checking if white tile is below.
			if (row > 3) {
				if (document.getElementById("cell"+(row+1)+column).className == "tile9") {
					swapTile("cell"+row+column, "cell"+(row+1)+column);
					return;
				}
			}
		}
	}
}