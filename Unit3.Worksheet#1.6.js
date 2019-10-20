/*
	Create a function which calculates recursively the Math operation Power.
*/

function elevated(base, fact) {
	if (fact == 0) {
		return 1; // Any number elevated to 0 equals to 1.
	} else {
		return base * elevated(base, fact - 1) //Recursive Call
	}
}

document.write(elevated(2, 4));
