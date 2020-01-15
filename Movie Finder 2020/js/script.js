// OMDb API KEY: f187dec7

$(document).ready(() => {
	$('#findMovie').click(function(){
		let searchText = $('#searchText').val();
		getMovies(searchText);
	});
});

function getMovies(searchText, page=1) {
	$('#service').html("<h2 id='loading'>Loading. . .</h2>");
	$.getJSON("http://www.omdbapi.com/?s="+searchText+"&apikey=f187dec7", function(result) {
		var output = '<div class="container"><div class="row">';
		$.each(result.Search, function(i, field) {
			output += '<div class="col-lg-4" onClick="getMoreDetails("'+field.imdbID+'"><div class="single-service">'
			output += '<div class="thumb"><img class="img-fluid" src="'+field.Poster+'" alt=""></div>';
			output += '<div class="detail"><h2>'+field.Title+'</h2>';
			output += '<p>Date of release: '+field.Year+'</p></div></div></div>';
		});
		output += '</div></div>';
		$('#service').html(output);
	});
	$('#loading').hide();
}

function getMoreDetails(idMovie) {
	$.getJSON("http://www.omdbapi.com/?i="+idMovie+"&apikey=f187dec7", function(result) {
		var output = '<div class="modal-body"><div class="container-fluid">';
			$.each(result, function(field){
				output += '<div class="row"><h2>Title: '+field.Title+'</h2></div>';
				output += '<div class="row">Release date: <p>'+field.Released+'</p></div>';
				output += '<div class="row">Rated: <p>'+field.Rated+'</p></div>';
				output += '<div class="row">Genre: <p>'+field.Genre+'</p></div>';
				output += '<div class="row">Director: <p>'+field.Director+'</p></div>';
				output += '<div class="row">Actors: <p>'+field.Actors+'</p></div>';
				output += '<div class="row">Plot: <p>'+field.Plot+'</p></div>';
				output += '<div class="row">Language: <p>'+field.Language+'</p></div>';
				output += '<div class="row">Country: <p>'+field.Country+'</p></div>';
				output += '<div class="row">Ratings: <p>'+field.Ratings+'</p></div>';
			});
		output = '</div></div>';
		$('#service').html(output);
	});
}

function infiniteScroll(n) {
	$(window).endlessScroll({
		inflowPixels: 300,
		callback: function() {
			getMovies(searchText, n);
		}
	});
}