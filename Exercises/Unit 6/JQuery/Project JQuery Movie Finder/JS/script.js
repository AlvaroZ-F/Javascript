// OMDb API KEY: f187dec7

$(document).ready(() => {
	$('#findMovie').click(function(){
		let searchText = $('#searchText').val();
		getMovies(searchText);
	});
});

function getMovies(searchText) {
	$('#movies').html("<h2 class='loading'>Loading. . .</h2>");
	$.getJSON("http://www.omdbapi.com/?s="+searchText+"&apikey=f187dec7", function(result) {
		$("#movies").append("<div class='movieBox'");
		$.each(result.Search, function(i, field) {
			$("#movies").append("<div class='title'>"+field.Title+"</div>");
			$("#movies").append("<div class='year'>"+field.Year+"</div>");
			$("#movies").append("<div class='poster'><img src='"+field.Poster+"'></div>");
			$("#movies").append("<div class='details' onClick(getMoreDetails('"+field.imdbID+"'))>Click for more details...</div>");

		});
		$("#movies").append("</div>");
	});
}

function getMoreDetails(idMovie) {
	$.getJSON("http://www.omdbapi.com/?i="+idMovie+"&apikey=f187dec7", function(result) {
		
	});
}