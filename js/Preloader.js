Game.Preloader = function (game) {

	this.background = null
	this.preloadBar = null
	this.ready = false
	this.rnd

}

Game.Preloader.prototype = {

	init: function (problem_set) {
		this.problem_set = problem_set
	},

	preload: function () {

		this.preloadBar = this.add.sprite(120, 200, 'preloaderBar')

		this.load.setPreloadSprite(this.preloadBar)

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		for (i=0; i<10; i++) {
			this.game.load.image('k' + i, 'images/Keyboard_' + i + '.png');
		}

		this.game.load.image('delete', 'images/Delete_button.png');
		this.game.load.image('go', 'images/Go_button.png');
		this.game.load.image('lightning','images/LightningRound_Button.png')
		this.game.load.image('next', 'images/next_button.png')
		this.game.load.image('back', 'images/back_button.png')

	},

	create: function () {

		this.preloadBar.cropEnabled = false
		this.state.start('Menu', true, false, this.problem_set)


	},


}
