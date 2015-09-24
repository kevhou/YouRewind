console.log("Js Loaded!");


// function myFunction() {
// 	// var input = document.getElementById(search);
// 	// console.log(input.value());
// 	e.preventDefault();
//     alert("The form was submitted");
// }

$('#form').submit(function(e){
	e.preventDefault();
	
	var search = $('#search').val();
	

	var video_id = search.split('v=')[1];
	var ampersandPosition = video_id.indexOf('&');
	if(ampersandPosition != -1) {
	  video_id = video_id.substring(0, ampersandPosition);
	}

	var makediv = '<iframe src="https://www.youtube.com/embed/' + video_id + '?autoplay=1&loop=1&playlist=' + video_id + '" width="640" height="390"></iframe>';

	// var getRef = document.getElementById("#video");
	// var parentDiv = getRef.parentNode;
	// parentDiv.insertBefore(makediv, getRef);

	$('#video').append(makediv)

	console.log(makediv);
})