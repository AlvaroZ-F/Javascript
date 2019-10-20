/*
	Develop a function that'd delete repeated characters in a text string, including blanks.
*/

function reduplic(strn){
	let result=strn.charAt(0);
	let equal=false;
	let counter=0;
	for (let index = 1; index < strn.length; index++) {
		while (counter<result.length&&equal==false) {
			if (strn.charAt(index)==result.charAt(counter)||strn.chartAt(index==" ")) {
				equal=true;
			}
			counter++;
		}
		counter=0;
		if (!equal) {
			result=result+strn.charAt(index)
		}
		equal=false;
	}
	return result;
}
