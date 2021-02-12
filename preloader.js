export default class PreLoader extends Phaser.Scene{
	constructor(){
		super('PreLoader')
	}
	preload ()
	{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('barn', 'assets/barn.png');
    this.load.image('sun', 'assets/sun.png');
    this.load.spritesheet('farmer', 'assets/farmer.png', { frameWidth: 40, frameHeight: 40 });
    this.load.spritesheet('cow', 'assets/cow.png', { frameWidth: 40, frameHeight: 40 });
	}

	create()
	{
		this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('cow', { start: 2, end: 3 }),
        frameRate: 5,
        repeat: -1
    });
	
	
	this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('cow', { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1
    });
	
	this.anims.create({
        key: 'fleft',
        frames: this.anims.generateFrameNumbers('farmer', { start: 2, end: 3 }),
        frameRate: 5,
        repeat: -1
    });
	
	
	this.anims.create({
        key: 'fright',
        frames: this.anims.generateFrameNumbers('farmer', { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1
    });
	
	this.scene.start('MainMenu');
	}
}