var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: [startGame,playGame,endGame]
};

var game = new Phaser.Game(config);