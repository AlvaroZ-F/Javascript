//Ejercicio 1
function ejercicio1(cadena) {
	cadena = cadena.toLowerCase() //Convierte la cadena entera en minusculas
		.split(' ') // La convierte en un array de cadenas separandola por los espacios
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1)) // Se recorre cada elemento del array, el primer caracter se hace mayuscula, el resto minuscula.
		.join(' '); // Se vuelve a crear como una cadena, cada elemento separado por un espacio.
	return cadena;
}
document.write("<p> Ejercicio 1: "+ejercicio1("examen parcial javascript")+"</p>");

//Ejercicio 2
function ejercicio2(fechas) {
	for (var i=0; i<fechas.length-1; i++){
		var result = 0;
		var newdate = new Date(fechas[i].split('/')[2], fechas[i].split('/')[1], fechas[i].split('/')[0]);
		if (newdate > result) {
			var result = newdate;
		}
	}
	return result.toLocaleDateString("es-ES");
}
var testejercicio2 = ejercicio2(["01/05/2001", "30/10/2010", "25,12/2009"]);
document.write("<p> Ejercicio 2: Fechas Introducidas = ([01/05/2001], [30/10/2010], [25,12/2009]) ---- Result: "+testejercicio2+"</p>");

// Ejercicio 3
function ejercicio3(sum) {
	if (sum.length === 0) {
		return 0;
	} else {
		return sum[0] + ejercicio3(sum.slice(1));
	}
}
document.write("<p> Suma de elementos del array [1,3,6,12,4]: "+ejercicio3([1,3,6,12,4])+"</p>")

// Ejercicio 4
function ejercicio4(fila, col, color1, color2) {
	document.write("<table>");
	for (let i = 0; i <= fila; i++) {
		if (i % 2 == 0) {
			document.write("<tr bgcolor='"+color1+"'>");
		} else {
			document.write("<tr bgcolor='"+color2+"'>");
		}
		for (let j = 0; j <= col; j++) {
			document.write("<td> ===0=== </td>");
		}
		document.write("</tr>");
	}
}

document.write(ejercicio4(4,4,"green","blue"));

// Ejercicio 5
function ejercicio5() {
	var table = document.querySelector('#tabletime')
	var selectedCell = table.getElementsByClassName('selected');
	var set_time = SetTimeOut(event, 10000);

	table.addEventListener('click', function(e) {
  			var td = e.target
  
  			if (td.tagName !== 'TD') {
    			return
  			}
  
  			if (selectedCells.length) {
    			selectedCells[0].className = ''    
  			}

 			 td.className = 'selected'
 			 document.innerHTML(set_time);
	});
}
