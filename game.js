import PreLoader from './preloader.js';
import MainMenu from './menu.js';
import MainGame from './main.js';
var config = {
    type: Phaser.AUTO,
	parent: 'dagame',
    width: 500,
    height: 300,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [ PreLoader, MainMenu, MainGame ]
};



let game = new Phaser.Game(config);


	