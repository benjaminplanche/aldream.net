$(document).ready(function(){
	var $container = $('#blog-masonry');
	$container.imagesLoaded(function(){
	  $container.masonry({
			itemSelector : 'article',
			columnWidth: 318,
			gutterWidth: 20,
			isAnimated: !Modernizr.csstransitions
		});
	});
	/*
	function Navigation() {
		var target = $(this).attr('href');
		if (target.indexOf("://") == -1) { // Intern link	
			$(this).click(function () {
				var newPage = target.split(".")[0], isContentLoaded = false, isDezoomOver = 1;
				history.pushState(null, newPage, newPage+'.html');
				if (!Aldream.cache[Aldream.currentPage]) { // We save the current page in the cache:
					Aldream.cache[Aldream.currentPage] = {meta: {}, body: '<section>'+$('body > section').html()+'</section>'};
				}
				if (Aldream.doTransition) {
					$('body').append('<div style="visibility:hidden;" id="meta"><div id="meta-index"></div><div id="meta-blog"></div><div id="meta-demo"></div><div id="meta-projects"></div><div id="meta-about"></div></div>');
					Aldream.transformZoom(Aldream.currentPage); // Positioning every element relative to the current user's position.
					$('#meta-'+Aldream.currentPage).html(Aldream.cache[Aldream.currentPage].body);
					$('#meta').css('visibility','visible');
					$('body > section').remove();
					$('body').removeAttr('id');
					// First we dezoom a bit and make the current content fade away to delete it (keeping the content would slow the transition):
					// Then we move the camera back to its initial position, watching the whole scene:
					
					
					setTimeout(function(){
						$('#meta-'+ Aldream.currentPage + ' > section')[0].style[Modernizr.prefixed('transition')] = 'opacity 1s';
						$('#meta-'+ Aldream.currentPage + ' > section').css('opacity', 0);
					
						for (var el in Aldream.metaPositions) {
							$('#meta-'+el).unbind('transitionend webkitTransitionEnd oTransitionEnd otransitionend');
							$('#meta-'+el).on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function() {
								isDezoomOver++;
								if (isContentLoaded && isDezoomOver == Aldream.nbPages) {
									ZoomIn(newPage);
								}
							});
							
							$('#meta-'+el)[0].style[Modernizr.prefixed('transition')] = 'all 2s';
							$('#meta-'+el)[0].style[Modernizr.prefixed('transform')] = 'translateX('+Aldream.metaPositions[el][0]+'em) translateY('+Aldream.metaPositions[el][1]+'em) translateZ('+Aldream.metaPositions[el][2]+'em) rotateX('+Aldream.metaPositions[el][3]+'deg) rotateY('+Aldream.metaPositions[el][4]+'deg) rotateZ('+Aldream.metaPositions[el][5]+'deg)';
						}
					}, 16);
					if (Aldream.cache[newPage]) {
						isContentLoaded = true;
					}
					else {
						$('<div></div>').load(target, function (rep) {
							isContentLoaded = true;
							Aldream.cache[newPage] = {meta: {}, body: '<section>'+rep.split('<section>')[1].split('<script>')[0]};
							if (isDezoomOver == Aldream.nbPages) {
								ZoomIn(newPage);
							}
						});
					}
				}
				//$.load($(this).attr('href') + ' #' + page);
				return false;
			});
		}
		
		function ZoomIn(newPage) {
			// We delete the previous content:
			$('#meta-'+Aldream.currentPage).unbind('transitionend webkitTransitionEnd oTransitionEnd otransitionend');
			$('#meta-'+Aldream.currentPage).html('');
			
			$('#meta-'+newPage).html(Aldream.cache[newPage].body);
			$('#meta-'+ newPage + ' > section').css('opacity', 0);
			$('#meta-'+ newPage + ' > section')[0].style[Modernizr.prefixed('transition')] = 'opacity 1s 1s';
			$('#meta-'+newPage)[0].style[Modernizr.prefixed('transition')] = 'none';
			setTimeout(function(){
				$('#meta-'+ newPage + ' > section').css('opacity', 1);
				
			for (var elClo in Aldream.metaPositions) {

				$('#meta-'+elClo)[0].style[Modernizr.prefixed('transition')] = 'transform 2s';
				var tr = [];
				for (var i = 0; i < 6; i++) {
					tr[i] = Aldream.metaPositions[elClo][i]-Aldream.metaPositions[newPage][i]+Aldream.origOffset[newPage][i];
				}
				tr = 'translateX('+tr[0]+'em) translateY('+(tr[1])+'em) translateZ('+(tr[2])+'em) rotateX('+tr[3]+'deg) rotateY('+tr[4]+'deg) rotateZ('+tr[5]+'deg)';
				$('#meta-'+elClo)[0].style[Modernizr.prefixed('transform')] = tr;
			}
			}, 30);
			
			$('#meta-'+ newPage + ' > section').on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function(e) {
				e = e.originalEvent.propertyName;
				$('#meta').remove();
				$('body').prepend(Aldream.cache[newPage].body);
				$('body').attr('id', newPage);
				$('a').each(Navigation);
				Aldream.currentPage = newPage;
			});
			
			
		}
	}
	$('a').each(Navigation);*/
});