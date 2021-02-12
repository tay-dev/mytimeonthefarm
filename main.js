export default class MainGame extends Phaser.Scene
{

constructor (){
	super('MainGame');
	this.player;
	this.moveLeft = false;
	this.moveRight = false;
	this.jump = false;
	this.farmer;
	this.platforms;
	this.cursors;
	this.sun;
	this.text;
	this.move;
	this.level = 1;
	this.gameOver = false;
	this.levelText;
	this.i = 0;
}
generatefarmer (x,b)
{
	this.farm = this.farmer.create(x, 10, 'farmer');
	this.farm.setBounce(0.3);
    this.farm.setCollideWorldBounds(true);
	this.farm.setVelocityX(b);
	if(this.farm>0){
		this.farm.anims.play('fright', true);
		
	}else{
		this.farm.anims.play('fleft', true);
	}
}
dead (player)
{
    this.physics.pause();

    player.setTint(0xff0000);

    this.gameOver = true;
}

create ()
{
	this.add.image(250, 150, 'sky');
	this.platforms = this.physics.add.staticGroup();

    this.platforms.create(62, 284, 'ground');
    this.platforms.create(187, 284, 'ground');
    this.platforms.create(312, 284, 'ground');
    this.platforms.create(437, 284, 'ground');
	
	this.platforms.create(50, 210, 'barn');
	//this.add.image(50, 210, 'barn');
	
	this.levelText = this.add.text(16, 16, 'level: 1', { fontSize: '32px', fill: '#000' });
	this.sun = this.add.image(0,100,'sun');
	

	this.text = this.add.text(50, 290, '0', { font: '10px Courier', fill: '#000000' });
	this.player = this.physics.add.sprite(200, 250, 'cow');
	this.farmer = this.physics.add.group();
	this.generatefarmer(Phaser.Math.Between(20,480),Phaser.Math.Between(-50,50));
	
	this.move = this.tweens.add({
        targets: this.sun,
        x: 400,
        duration: 15000,
		loop: -1,
		ease: 'Power2',
        yoyo: true,
        delay: 500
    });
    //  cow physics
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
	
	
	this.cursors = this.input.keyboard.createCursorKeys();
	
	
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.farmer, this.platforms);
	this.physics.add.collider(this.player, this.farmer, this.dead, null, this);
	
}

update(){
    if (this.gameOver)
    {
		this.levelText.setText('CLICK TO RETRY!!');
        this.input.once('pointerdown', () => {
            this.scene.start('MainGame');
			this.gameOver = false;
			this.i = 0;
			this.level = 1;
        });
		this.move.stop();
    }

    if (this.cursors.left.isDown || this.input.x < 250)
    {
        this.player.setVelocityX(-160);

        this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown || this.input.x > 250)
    {
        this.player.setVelocityX(160);

        this.player.anims.play('right', true);
    }
    else
    {
        this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown && this.player.body.touching.down || this.input.y <100 &&  this.player.body.touching.down){
        this.player.setVelocityY(-300);
    }
	if(this.gameOver == false){
		this.i++;
		this.text.setText(this.i);
	}
	if(this.i % 500 == 0 && this.gameOver == false){
		this.generatefarmer(Phaser.Math.Between(20,480),Phaser.Math.Between(-50,50));
			this.level++;
			this.levelText.setText('level:' + this.level);
	}
	if(this.i % 100 == 0){
		
		this.farmer.getChildren().forEach(function(farm) {
			var dt;
			if(farm.x < this.player.x){
				
				dt =Phaser.Math.Between(0,50);
			}else{
				
				dt =Phaser.Math.Between(-50,0);
			}
			//var dt =Phaser.Math.Between(-50,50);
			farm.setVelocityX(dt);
			if(dt > 0){
				farm.anims.play('fright', true);
			} else{
				farm.anims.play('fleft', true);
				
			}
		}, this);
		
	}


}
}