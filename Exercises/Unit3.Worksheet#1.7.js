/*
	Create a function that would calculate the factorial of any given number. To check results, design a website that shows
  in the shape of a table the factorial for every value from 1 to 10.
*/
let number = prompt("Introduce the number you wish to factorize");

function factor(num) {
	document.write("<tr><td align='center'>Factorizing "+num+"...</td></tr>");
	if (num < 0) {
		document.write("<tr><td align='right'> -1 </td></tr>");
	} else if (num == 0) {
		document.write("<tr><td align='right'> 1 </td></tr>");
	} else {
		for (let i = 1; i <= num; i++) {
			document.write("<tr><td align='right'>... "+num*i+"</td></tr>");
		}
	}
}

factor(number);
