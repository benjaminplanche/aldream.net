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
				var newPage = target.split(".")[0], isContentLoaded = false, isDezoomOver = 1;
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
							
							
							// First we dezoom a bit and make the current content fade away to delete it (keeping the content would slow the transition):
							// Then we move the camera back to its initial position, watching the whole scene:
					
							for (var el in Aldream.metaPositions) {
								$('#'+el)[0].style[Modernizr.prefixed('transition')] = 'transform 2s';
								var tr = [];
								for (var i = 0; i < 6; i++) {
									tr[i] = Aldream.metaPositions[el][i]-Aldream.metaPositions[Aldream.currentPage][i]+Aldream.origOffset[Aldream.currentPage][i];
								}
								tr = 'translateX('+tr[0]+'em) translateY('+(tr[1])+'em) translateZ('+(tr[2])+'em) rotateX('+tr[3]+'deg) rotateY('+tr[4]+'deg) rotateZ('+tr[5]+'deg)';
								$('#'+el)[0].style[Modernizr.prefixed('transform')] = tr; // Positioning every element relative to the current user's position.
							}
							
							
							$('#'+ Aldream.currentPage + ' #board')[0].style[Modernizr.prefixed('transition')] = 'opacity 1s';
							$('#'+ Aldream.currentPage + ' #board').css('opacity', 0);
							
							for (var el in Aldream.metaPositions) {
								$('#'+el).unbind('transitionend webkitTransitionEnd oTransitionEnd otransitionend');
								$('#'+el).on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function() {
									isDezoomOver++;
									if (isContentLoaded && isDezoomOver == Aldream.nbPages) {
										// We delete the previous content:
										$('#'+Aldream.currentPage).unbind('transitionend webkitTransitionEnd oTransitionEnd otransitionend');
										$('#'+Aldream.currentPage).html('');
											
										for (var elClo in Aldream.metaPositions) {
											$('#'+elClo).unbind('transitionend webkitTransitionEnd oTransitionEnd otransitionend');

											$('#'+elClo)[0].style[Modernizr.prefixed('transition')] = 'transform 2s';
											var tr = [];
											for (var i = 0; i < 6; i++) {
												tr[i] = Aldream.metaPositions[elClo][i]-Aldream.metaPositions[newPage][i]+Aldream.origOffset[newPage][i];
											}
											tr = 'translateX('+tr[0]+'em) translateY('+(tr[1])+'em) translateZ('+(tr[2])+'em) rotateX('+tr[3]+'deg) rotateY('+tr[4]+'deg) rotateZ('+tr[5]+'deg)';
											$('#'+elClo)[0].style[Modernizr.prefixed('transform')] = tr;
										}
										
										$('#'+newPage).html(Aldream.cache[newPage].body);
										$('#'+ newPage + ' #board').css('opacity', 0);
										$('#'+ newPage + ' #board')[0].style[Modernizr.prefixed('transition')] = 'opacity 20s 1.5s';
										$('#'+ newPage + ' #board').css('opacity', 1);
									}
								});
								
								$('#'+el)[0].style[Modernizr.prefixed('transition')] = 'transform 2s';
								$('#'+el)[0].style[Modernizr.prefixed('transform')] = 'translateX('+Aldream.metaPositions[el][0]+'em) translateY('+Aldream.metaPositions[el][1]+'em) translateZ('+Aldream.metaPositions[el][2]+'em) rotateX('+Aldream.metaPositions[el][3]+'deg) rotateY('+Aldream.metaPositions[el][4]+'deg) rotateZ('+Aldream.metaPositions[el][5]+'deg)';
							}
						});
					}
					if (Aldream.cache[newPage]) {
						isContentLoaded = true;
					}
					else {
						$('<div></div>').load(target, function (rep) {
							isContentLoaded = true;
							Aldream.cache[newPage] = {meta: {}, body: rep.split('<body>')[1].split('</body>')[0]};
							if (isDezoomOver == Aldream.metaPositions.length) {
								for (var elClo in Aldream.metaPositions) {
									$('#'+elClo).unbind('transitionend webkitTransitionEnd oTransitionEnd otransitionend');
									if (elClo == Aldream.currentPage) {
										// We delete the previous content:
										$('#'+Aldream.currentPage).unbind('transitionend webkitTransitionEnd oTransitionEnd otransitionend');
										$('#'+Aldream.currentPage).html('');
									}
									
									$('#'+elClo)[0].style[Modernizr.prefixed('transition')] = 'transform 2s';
									var tr = [];
									for (var i = 0; i < 6; i++) {
										tr[i] = Aldream.metaPositions[elClo][i]-Aldream.metaPositions[newPage][i]+Aldream.origOffset[newPage][i];
									}
									$('#'+elClo)[0].style[Modernizr.prefixed('transform')] = 'translateX('+Aldream.metaPositions[elClo][0]+'em) translateY('+Aldream.metaPositions[elClo][1]+'em) translateZ('+Aldream.metaPositions[elClo][2]+'em) rotateX('+Aldream.metaPositions[elClo][3]+'deg) rotateY('+Aldream.metaPositions[elClo][4]+'deg) rotateZ('+Aldream.metaPositions[elClo][5]+'deg)';
									
									if (elClo == newPage) {
										$('#'+newPage).html(Aldream.cache[newPage].body);
										$('#'+ newPage + ' #board').css('opacity', 0);
										$('#'+ newPage + ' #board')[0].style[Modernizr.prefixed('transition')] = 'opacity 1s 1s';
										$('#'+ newPage + ' #board').css('opacity', 1);
									}
								}
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