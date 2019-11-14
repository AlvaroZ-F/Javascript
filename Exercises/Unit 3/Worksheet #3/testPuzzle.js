class Puzzle {

	constructor(dim) {
		this.dim = dim;
	}

	createTable() {
		var tileCount = 1;
		document.write("<div id='table' style='display: table;'>");
		for (var i=1; i<=this.dim; i++) {
			document.write("<div id='row"+i+"' style='display: table-row;'>");
			for (var j=1; j<=this.dim; j++) {
				document.write("<div id='cell"+i+j+"' class='tile"+tileCount+"'></div>");
				tileCount++;
			}
			document.write("</div>");
		}
		document.write("</div>");
	}

	swapTiles(cell1, cell2) {
		var temp = document.getElementById(cell1).className;
		document.getElementById(cell1).className = document.getElementById(cell2).className;
		document.getElementById(cell2).className = temp;
	}

	shuffle() {
		for (var row = 1; row <= this.dim; row++) {
			for (var column = 1; column <= this.dim; column++) {
				var row2 = Math.floor(Math.random()*this.dim+1);
				var column2 = Math.floor(Math.random()*this.dim+1);
				// Swap the cells
				swapTiles("cell"+row+column, "cell"+row2+column2);
			}
		}
	}
}