/*!
	* Poke, an Ender module for handling swipe gestures on mobile devices
	* Version 0.0.1
	* (c) 2011 Paul Straw (@pausltraw)
	* Lots of code from Zepto's touch module: https://github.com/madrobby/zepto
	* Released under the MIT License
*/

!function($) {
	$.ender({
		poke: function(events) {
			return this.forEach(function(el) {
				var t = $(el),
					gestures,
					touch = {},
					lastSwipe;

				function swipeDirection(x1, x2, y1, y2){
					var xDelta = Math.abs(x1 - x2), yDelta = Math.abs(y1 - y2);
					if (xDelta >= yDelta) {
						return (x1 - x2 > 0 ? 'W' : 'E');
					} else {
						return (y1 - y2 > 0 ? 'N' : 'S');
					}
				}

				t.bind(events).bind({
					touchstart: function(e) {
						//reset stuff
						gestures = [];
						lastSwipe = '';

						touch.x1 = e.touches[0].pageX;
						touch.y1 = e.touches[0].pageY;
					},
					touchmove: function(e) {
						touch.x2 = e.touches[0].pageX;
						touch.y2 = e.touches[0].pageY;

						if (Math.abs(touch.x1 - touch.x2) > 60 || Math.abs(touch.y1 - touch.y2) > 60) {
							var currentSwipe = swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2);

							touch.x1 = touch.x2;
							touch.y1 = touch.y2;

							if (currentSwipe == lastSwipe) {
								return;
							} else {
								lastSwipe = currentSwipe;
								gestures.push(currentSwipe);
							}
						}
					},
					touchend: function() {
						if (!gestures.length) return;

						t.trigger(gestures.join('-'));
					}
				});
			});
		}
	}, true);
}(ender);