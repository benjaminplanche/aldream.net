$(document).ready(function(){
	$('#blog-masonry').masonry({
	  itemSelector: 'article',
	  // set columnWidth a fraction of the container width
	  columnWidth: function( containerWidth ) {
		return containerWidth / 3;
	  },
	  isFitWidth: true
	});
});