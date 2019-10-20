/*
	You're starting your own credit card business. You need to 
	come up with a new way to validate credit cards with a simple
	function called "validateCreditCard" that returns true or false.
	Here are teh rules for valid number:
		- Number must be 16 digits, all of them must be numbers.
		- You must have at last two different digits.
		- The final digit must be even.
		- The sum of all the digits must be greater than 16.
*/

function validar(numero) {
	var aux=0;
	var aux1=false;
	var arr=numero.split("-");
	var num="";
	for (i=0;i<arr.length;i++) {
		num=num+arr[i];
	}
	for (i=0;i<num.length;i++) {
		aux=aux+parseInt(num.charAt(i));
	}
	noRepe = false;
	for (i=0;i<num.length;i++) {
		if (num.charAt(i)!=num.charAt(i+1)) {
			noRepe = true;
		}
	}
	if (num.length!=16) {
		return false;
	} else if(parseInt(num)!=num) {
		return false;
	} else if(parseInt(num)%2!=0) {
		return false;
	} else if(aux<16) {
		return false;
	} else {
		return true;
	}
}
