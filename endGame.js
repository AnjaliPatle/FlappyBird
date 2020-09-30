class endGame extends Phaser.Scene{
    constructor() {
        super('end')
    }
    init(data){
        this.score=data.totalScore;
    }
    preload(){
        this.load.image('bg','assets/bg.png')
        this.load.image('over','assets/game-over.png')
        this.load.image('replay','assets/replay.png')
    }
    create(){
        this.scene=this.add.image(400,300,'bg')
        this.add.image(390,300,'over').setScale(0.9)
        this.add.text(250,80,'Your Score:'+this.score,{fontSize:38})
        this.add.text(250,120,'Best Score:'+this.score,{fontSize:38})
        this.playAgain=this.add.image(380,500,'replay').setScale(0.2)
        this.playAgain.setInteractive();
       // this.playAgain.on('pointerdown',this.startGame,this)
    }
    // startGame(){
    //     this.scene.start('start');
    // }
}