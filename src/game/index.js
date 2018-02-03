let gm = gm||{};
gm.scene = {};
gm.play = {};

(function(){
	function load(){
		return new Promise((resolve, reject) => {
		const loader = new PIXI.loaders.Loader();
		loader.add('fnt', 'res/fonts/digital-regular/digital-regular.fnt')
		loader.load((loader, resources) => {
			PIXI.loaders.parseBitmapFontData(resources.fnt, new PIXI.Texture.fromImage("res/fonts/digital-regular/digital-regular.png"));
			resolve();
		});
	});
	}

	function main(){
		var container = new PIXI.Container();
		gm.app.stage.addChild(container);

		gm.scene.root = container;
	}

	gm.scene.init = function(){
		load()
		.then(()=>{
			main();

			gm.scene.root.addChild(new PIXI.Sprite(new PIXI.Texture.fromImage("res/test/panda.png")));
		});
	}
}())
