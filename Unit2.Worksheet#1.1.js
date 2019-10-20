/*
  Write a page that'd create an object type Date and print on the page the following
  information:
    => Current Year.
    => Current Month.
    => Current Day.
    => Current hour.
    => Current minute.
    => Current second.
*/

var time = new Date();

var year = "Year: "+time.getFullYear();
var month = "Month: "+time.getMonth();
var day = "Day: "+time.getDate();
var hour = "Hour: "+time.getHours();
var minute = "Minute: "+time.getMinutes();
var second = "Second: "+time.getSeconds();

var datearray = [year,month,day,hour,minute,second];
for (i=0;i<=datearray.length-1;i++) {
	document.write("<h5>"+datearray[i]+"</h3><br>");
}
