/*
  Create a function called paresImpares which would create a 100 random numbers array from 1 to 1000. Once created,
  show the content, then organize it in such way the even games are all together, as well as the uneven numbers.
  Then print the result array.
*/

function EvenUneven() {
	let arr = [];
	let arry = [];
	let t = 0;
	for (i = 0; i < 100; i++) {
		t = Math.;
		if (t % 2 == 0) {
			arry[i] = t;
		} else {
			arr[i] = t;
		}
	}
	arr = arr.concat(arry);
	return arr;
}
console.log(EvenUneven());
