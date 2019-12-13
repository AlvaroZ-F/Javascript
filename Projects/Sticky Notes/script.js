const notesContainer = document.querySelector("#notesContainer");
const controller = document.getElementById("controller");
const button = controller.children[0];

button.addEventListener("click", function() {
	notesContainer.innerHTML += newNote();
});

function newNote() {
	return "<div class='sticky-note'><div class='handle'><div class='close'></div></div><div class='content'></div></div>";
}