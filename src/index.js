let gm = gm||{};

function main(){
	initPIXI();
	init();

	gm.scene.init();
}
function initPIXI(){
	gm.app = new PIXI.Application(gm.settings.data.canvasSize.width, gm.settings.data.canvasSize.height, { antialias: true });
	document.body.appendChild(gm.app.view);
	gm.app.stage.interactive = true;
}
function init(){
	window.addEventListener('resize', function(event){
		gm.settings.fitCanvasToScreen();
	});
	gm.settings.fitCanvasToScreen();

	//TWEENJS
	createjs.Ticker.init();
	gm.app.ticker.add(createjs.Ticker._tick);
}
