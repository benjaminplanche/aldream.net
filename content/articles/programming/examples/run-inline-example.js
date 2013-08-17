// Shim layer with setTimeout fallback // Thank to Paul Irish (http://paulirish.com/2011/requestanimationframe-for-smart-animating)
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var run = true;
var signal = 0;

function DrawLaunchUI() {
	// Semi-transparent layer:
	a.fillStyle = 'hsla(0, 0%, 100%, .5)';
	a.fillRect(0, 0, c.width, c.height);
  
	// Rounded rect:
	a.fillStyle = 'hsla(0, 0%, 75%, .7)';
	a.beginPath();
	var left = c.width/2-30, right = c.width/2+30, top = c.height/2-30, bottom = c.height/2+30, radius = 10;
	a.beginPath();
	a.moveTo(left + radius, top);
	a.lineTo(right - radius, top);
	a.quadraticCurveTo(right, top, right, top + radius);
	a.lineTo(right, bottom - radius);
	a.quadraticCurveTo(right, bottom, right - radius, bottom);
	a.lineTo(left + radius, bottom);
	a.quadraticCurveTo(left, bottom, left, bottom - radius);
	a.lineTo(left, top + radius);
	a.quadraticCurveTo(left, top, left + radius, top);
	a.closePath();
	a.fill();
	
	// Arrow:
	a.fillStyle = 'hsl(0, 0%, 50%)';
	a.beginPath();
	a.moveTo(left + 15, top + 15);
	a.lineTo(right - 13, c.height/2);
	a.lineTo(left + 15, bottom - 15);
	a.closePath();
	a.fill();
}

function Run(){
	// We request the next frame first to assure ~60fps:
	if (run) {
		requestAnimFrame(Run);
		Paint();
	}
	else {
		Clear();
		DrawLaunchUI();
	}
	signal = false;
}

window.onclick = function() {
	signal = run = !run;
	if (run) Run();
}

// We generate an overview of the scene, then wait for the user to launch it:
b.style.cursor = 'pointer';
Run(); 
run = false;