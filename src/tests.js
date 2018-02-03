let gm = gm||{};
gm.tests = {};

(function(){
	gm.tests.pixiDefaults = function(){
		//simple sprite
		var panda = PIXI.Sprite.fromImage('res/test/panda.png');
		panda.texture.frame = new PIXI.Rectangle(0,0, 100,100);
		gm.app.stage.addChild(panda);
	}
	function createTextureMesh(){
		var strip = new BaseGhost(PIXI.Texture.fromImage('res/test/snake.png'));
		gm.scene.root.addChild(strip);
		strip.y = 0;
		strip.x = 0;
		strip.tint = 0xFFFFFF*Math.random();
		strip.scale.set(0.3);
		strip.moveTo(gm.app.screen.width/2*randfRange(0.9,1.1),gm.app.screen.height/1.5*randfRange(0.9,1.1));
	}
	gm.tests.textureMesh = function(){
		for(var i = 0;i < 3;i++){
			createTextureMesh();
		}
	}
	gm.tests.bitmapText = function(){
		let bitmapText = new PIXI.extras.BitmapText("text using a fancy font!", {font: "35px digital-regular", align: "right"});
		gm.scene.root.addChild(bitmapText);
	}
}())
