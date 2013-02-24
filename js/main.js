$(document).ready(function(){
	$('#blog-masonry').masonry({
		itemSelector: 'article',
		gutterWidth: 20
	});
	$('#board').css('height', $(document).height()+'px');
	
	$('a').each(function() {
		var target = $(this).attr('href');
		if (target.indexOf("://") == -1) { // Intern link	
			$(this).click(function () {
				var newPage = target.split(".")[0], isDezoomOver = isContentLoaded = false;
				if (!Aldream.cache[Aldream.currentPage]) { // We save the current page in the cache:
					Aldream.cache[Aldream.currentPage] = {meta: {}, body: $('body').html()};
				}
				if (Aldream.doTransition) {
					if (Aldream.cache['meta']) {
						$('body').html(Aldream.cache['meta']);
						$('#'+Aldream.currentPage).html(Aldream.cache[Aldream.currentPage].body);
						Aldream.transformZoom(Aldream.currentPage); // Positioning every element relative to the current user's position.
						Aldream.transformDezoom('all 1.5s', function(){alert('ok');}); // Then dezooming to see the whole picture.
					}
					else {
						$('body').load('meta.html', function (rep) {
							Aldream.cache['meta'] = {meta: {}, body: rep.split('<body>')[1].split('</body>')[0]};
							$('#'+Aldream.currentPage).html(Aldream.cache[Aldream.currentPage].body);
							Aldream.transformZoom(Aldream.currentPage); // Positioning every element relative to the current user's position.
							Aldream.transformDezoom('all 1.5s', function(){
								isDezoomOver = true;
								if (isDezoomOver && isContentLoaded) {
									$('#'+newPage).html(Aldream.cache[newPage]);
								}
							}); // Then dezooming to see the whole picture.
							$('#'+Aldream.currentPage + ' #board').css('opacity', 0); // TO DO
						});
					}
					if (Aldream.cache[newPage]) {
						isContentLoaded = true;
					}
					else {
						$('<div></div>').load(target, function (rep) {
							isContentLoaded = true;
							Aldream.cache[newPage] = rep.split('<body>')[1].split('</body>')[0];
							if (isDezoomOver && isContentLoaded) {
								$('#'+newPage).html(Aldream.cache[newPage]);
							}
						});
					}
				}
				//$.load($(this).attr('href') + ' #' + page);
				return false;
			});
		}
	});
});