class playGame extends Phaser.Scene{
    constructor() {
        super('play')
        this.score=0;
        this.isAlive=true;
        this.gameOVer=false;
    }

 preload() {
    this.load.image('bg', 'assets/bg.png')
    this.load.image('bird','assets/bird.png')
    this.load.image('pipe','assets/pipe.png')
    this.load.audio('wing','assets/wing.mp3')
    this.load.audio('hit','assets/hit.mp3')
}

 create() {
    this.bg = this.add.tileSprite(400, 300,config.width,config.width, 'bg');
    this.bird = this.physics.add.image(300, 260, 'bird').setScale(0.1).setOrigin(0, 0);
    this.bird.setCollideWorldBounds(false);
    this.bird.body.allowGravity=true;
    this.bird.body.gravity.y=2500;
    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.on('pointerdown', this.fly, this);
    this.scoreText=this.add.text(15,15,'Score: 0',{fontSize:32,fill:'#fff'})
    this.wing=this.sound.add('wing')
    this.hit=this.sound.add('hit')
    this.pipes=this.physics.add.group();
    this.X=700;
    for(let i=0;i<100;i++){
         let gapX=Phaser.Math.Between(250,450);
         //let gap=Phaser.Math.Between(150,200);
         let gap=300;
         let upY=Phaser.Math.Between(-150,100);
         let pipeUp=this.pipes.create(this.X,upY-50,'pipe').setRotation(3.14).setScale(0.7)
         let pipeDown=this.pipes.create(this.X,upY+gap+500,'pipe').setScale(0.7)
         this.X+=gapX;
    }
    this.setObjectVelocity(this.pipes)
    this.physics.add.overlap(this.pipes,this.bird,this.endGame,null,this)
}
endGame(pipes,bird){
    this.hit.play()
    if (this.isAlive == false)
        return;
    this.bird.setVelocity(0,600);
    this.isAlive=false;
    this.bird.setTint(0xff0000);
}

 setObjectVelocity(pipes){
    pipes.children.iterate(function(pipe){
        pipe.setVelocity(-110,0);
    })
}
 fly() {
      if(this.isAlive==true){
        this.bird.setVelocity(0,-600);
      }
    this.bird.angle=-20;
    this.wing.play();
 }
  update() {
    if(this.gameOver==true){
        this.scene.start('end',{totalScore:this.score});
    }   
    if(((this.bird.y>600)&&(this.isAlive==false))||(this.bird.y>700)){
        this.gameOver=true;
    }
        if(this.isAlive==true)
        this.bg.tilePositionX+=3;
        if (this.bird.angle < 20)
            this.bird.angle += 1; 
         if(this.isAlive==false){
            this.pipes.children.iterate(function(pipe){
                pipe.setVelocity(0,0);
            })
        }
        console.log(this.score)
        let sc=this;
        this.pipes.children.iterate(function(pipe){
            if(pipe.x<300&&pipe.x>298){
                sc.score+=1;
                sc.scoreText.setText('Score: '+(sc.score/2))
            }
    })
 }


}