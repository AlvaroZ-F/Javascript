// OMDb API KEY: f187dec7

$(document).ready(() => {
	$('#findMovie').click(function(){
		let searchText = $('#searchText').val();
		getMovies(searchText);
	});
});

function getMovies(searchText) {
	$('#service').html("<h2 id='loading'>Loading. . .</h2>");
	$.getJSON("http://www.omdbapi.com/?s="+searchText+"&apikey=f187dec7", function(result) {
		var output = '<div class="container"><div class="row"><div class="col-lg-4"><div class="single-service">';
		$.each(result.Search, function(i, field) {
			output += '<div class="thumb"><img class="img-fluid" src="'+field.Poster+'" alt=""></div>';
			output += '<div class="detail"><h2>'+field.Title+'</h2>';
			output += '<p>Date of release: '+field.Year+'</p></div>';
		});
		output += '</div></div></div></div>';
		$('#service').html(output);
	});
	$('#loading').hide();
}

function getMoreDetails(idMovie) {
	$.getJSON("http://www.omdbapi.com/?i="+idMovie+"&apikey=f187dec7", function(result) {
		
	});
}