/*
  Set up a webpage which will show the results of every single one of these statements:
    => Create variable "fechaHoy" containing today's date.
    => Create variable "fecha85" containing "fechaHoy" value, adding 85 days to it.
    => Create variable "fecha187" containing "fechaHoy" value, substracting 187 days to it.
    => Add 2 years to the variable "fecha85".
    => Substract 24 hours to the variable "fecha187".
    => Create variable "fechaResto" which would contain the result of substracting "fecha187" to "fecha85" ( fecha85 - fecha187 ).
*/

function addDays(date, days){
	date.setDate(date.getDate() + days);
	return date;
}
function removeDays(date, days){
	date.setDate(date.getDate() - days);
	return date;
}
function addYears(date, years){
	date.setDate(date.getDate() + years*365);
	return date;
}
function diffDate(f1, f2){
	var date1 = f1.split('/');
	var date2 = f2.split('/');
	var fdate1 = Date.UTC(date1[2],date1[1]-1,date1[0]);
	var fdate2 = Date.UTC(date2[2],date2[1]-1,date2[0]);
	var dif = fdate1 - fdate2;
	var days = Math.floor(dif / (1000*60*60*24));
	return days;
}

var time = new Date();

var fecha85 = addDays(time, 85);
var fecha187 = removeDays(time, 187);

var fechaResto = diffDate(fecha85, fecha187);
document.write("Present day: "+time+"<br>");
document.write("85 days in the future: "+fecha85+"<br>");
document.write("187 days ago: "+fecha187+"<br>");
document.write("2 years in the future: "+addYears(fecha85, 2)+"<br>");
document.write("24 hours ago: "+removeDays(fecha187, 1)+"<br>");
document.write("Custom Date fecha85-fecha187: "+fechaResto+"<br>");
