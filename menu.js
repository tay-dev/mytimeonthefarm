export default class MainMenu extends Phaser.Scene{
	constructor(){
		super('MainMenu');
	}
	create(){
		
	 this.add.image(250, 150, 'sky');
	 this.sun = this.add.image(0,100,'sun');
	 this.platforms = this.physics.add.staticGroup();
    this.platforms.create(62, 284, 'ground');
    this.platforms.create(187, 284, 'ground');
    this.platforms.create(312, 284, 'ground');
    this.platforms.create(437, 284, 'ground');
	
	this.platforms.create(50, 210, 'barn');
		this.add.text(16, 16, 'CLICK TO START PARTNER', { fontSize: '32px', fill: '#000' });
		this.input.once('pointerdown', () => {
            this.scene.start('MainGame');
        });
	}
}