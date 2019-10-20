/*
  Design a website that would create an array called "clase" which contains information about a class. Each element of the
  array must be a 5 fields string: Name, Age, First Trimester Score, Second Trimester Score, Third Trimester Score ( each
  separated by commas ). For example: Clase[0] = "Angel Garcia, 20, 6, 7, 10"
*/

function fillclassroom(student) {
	let classroom = [];
	classroom = classroom.concat([student]);
	return classroom;
}

let data = "-";
let classroomA = [];

while (data != "No") {
	data = prompt("Introduce new student: Name Lastname, Age, First Semester Score, Second's, and Third's");
	if (data != "No") {
		data = prompt("Enter new student?");
	}
}
document.write(classroomA);
