$(document).ready(function(){
	$('#blog-masonry').masonry({
		itemSelector: 'article',
		isFitWidth: true,
		columnWidth: 320,
		gutterWidth: 20
	});
});