var mailTable = document.getElementById("mails");

var sender, issue, date;

function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			mailData(this);
		}
	};
	xhttp.open("GET", "maildata.xml", true);
	xhttp.send();
}
var numMostrados=0;
function mailData(xml) {
	var cont = 0;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("mail");
	for (var i=numMostrados; i<x.length; i++) {

			document.getElementById("mails").innerHTML += "<tr><td class='sender'>" + x[i].getElementsByTagName("sender")[0].childNodes[0].nodeValue + "</td><td class='issue'>" + x[i].getElementsByTagName("issue")[0].childNodes[0].nodeValue + "</td><td class='date'>" + x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td></tr>";
		
		
	}
	numMostrados=i;
}