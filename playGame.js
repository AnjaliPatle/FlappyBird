class playGame extends Phaser.Scene{
    constructor() {
        super('play')
        this.score=0;
    }

 preload() {
    this.load.image('bg', 'assets/bg.png')
    this.load.image('bird','assets/bird.png')
    this.load.image('pipe','assets/pipe.png')
}

 create() {
    this.bg = this.add.tileSprite(400, 300,config.width,config.width, 'bg');
    this.bird = this.physics.add.image(300, 260, 'bird').setScale(0.1).setOrigin(0, 0);
    this.bird.setCollideWorldBounds(false);
    this.bird.body.allowGravity=true;
    this.bird.body.gravity.y=2500;
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.on('pointerdown', this.fly, this);
   // this.add.image(300,600,'pipe').setScale(0.7)
    //  this.pipes= this.physics.add.group({
    //      key: 'pipe',
    //      repeat: 4,
    //      setXY: {
    //          x: 300,
    //          y: 300,
    //          stepX: Phaser.Math.Between(20, config.width - 20),
    //          stepY: Phaser.Math.Between(15, 300),
    //      },
    //      setScale: { x: 0.02, y: 0.02 }
    //  })
    // this.setObjectVelocity(this.bomb);

     this.pipes=this.physics.add.group();
     let x=700;
     for(let i=0;i<100;i++){
         let gapX=Phaser.Math.Between(250,450);
         let gap=Phaser.Math.Between(130,200);
         let upY=Phaser.Math.Between(-150,100);
         let pipeUp=this.pipes.create(x,upY,'pipe').setRotation(3.14).setScale(0.7)
         let pipeDown=this.pipes.create(x,upY+gap+600,'pipe').setScale(0.7)
         x+=gapX;
     }
     this.setObjectVelocity(this.pipes)
     this.physics.add.overlap(this.pipes,this.bird,this.endGame,null,this)
    // this.anims.create({
    //     key:'explode',
    //     frames:this.anims.generateFrameNumbers('explosion'),
    //     frameRate:20,
    //     hideOnComplete:true
    // })
    // this.gunShot=this.sound.add('gun-shot')
    // this.coinhit=this.sound.add('coinhit')
    // this.end=this.sound.add('end')
    // this.physics.add.collider(this.jet,this.stars,this.collectStars,null,this)
    // this.physics.add.collider(this.jet,this.bomb,this.endGame,null,this)
    // this.scoreText=this.add.text(15,15,'Score: 0',{fontSize:32,fill:'#0f0'})
}
endGame(pipes,bird){
    //this.physics.pause();
    this.bird.setTint(0xff0000)
    this.gameOver=true;
}
//  collectStars(jet,stars){
//     this.coinhit.play();
//     stars.disableBody(true,true)
//     let x=Phaser.Math.Between(20,config.width-20);
//     stars.enableBody(true,x,0,true,true)
//     let xVel=Phaser.Math.Between(-100,100);
//     let yVel=Phaser.Math.Between(80,120);
//     this.stars.setVelocity(xVel,yVel);
//     this.score+=10;
//     this.scoreText.setText('Score: '+this.score)
// }

 setObjectVelocity(pipes){
    pipes.children.iterate(function(pipe){
        pipe.setVelocity(-110,0);
    })
}
  fly() {
        this.bird.setVelocity(0,-600);
    }

//  destroyBomb(ammo, bomb) {
//     this.gunShot.play()
//     this.explosion=this.add.sprite(bomb.x,bomb.y,'explosion').setScale(3);
//     this.explosion.play('explode')
//     bomb.disableBody(true, true)
//     ammo.disableBody(true, true)
//     let x=Phaser.Math.Between(20,config.width-20);
//     bomb.enableBody(true,x,0,true,true)
//     let xVel=Phaser.Math.Between(-100,100);
//     let yVel=Phaser.Math.Between(100,150);
//     bomb.setVelocity(xVel,yVel);
//     this.score+=20;
//     this.scoreText.setText('Score: '+this.score)
// }
// endGame(jet,bomb){
//     this.physics.pause();
//     this.jet.setTint(0xff0000)
//     this.explosion=this.add.sprite(jet.x,jet.y,'this.').setScale(6);
//     this.explosion.play('explode')
//     this.gameOver=true;
//     this.end.play()
// }
  update() {
    if(this.gameOver){
        this.scene.start('end',{totalScore:this.score});
    }
        this.bg.tilePositionX+=3;
//     if (this.cursors.left.isDown) {
//         this.jet.setVelocityX(-150);
//     } else if (this.cursors.right.isDown) {
//         this.jet.setVelocityX(+150);
//     } else {
//         this.jet.setVelocityX(0);
//     }

//     if (this.cursors.up.isDown) {
//         this.jet.setVelocityY(-150);
//     } else if (this.cursors.down.isDown) {
//         this.jet.setVelocityY(+150);
//     } else {
//         this.jet.setVelocityY(0);
//     }
//     this.checkForRepos(this.bomb);
//     this.checkForRepos(this.stars);
 }


}