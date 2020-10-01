class startGame extends Phaser.Scene{
    constructor() {
        super('start')
    }
    preload(){
        this.load.image('bg','assets/bg.png')
        this.load.image('bird','assets/bird.png')
        this.load.image('play','assets/play.png')
    }
    create(){
        this.add.image(400,300,'bg').setScale(1)
        this.add.image(385,300,'bird').setScale(0.125)
        this.startbtn=this.add.image(375,400,'play').setScale(0.05)
        this.startbtn.setInteractive();
        this.startbtn.on('pointerdown',this.startGame,this)
    }
    startGame(){
        this.scene.start('play');
    }
}