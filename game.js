const gameState = {};

function preload() {
  this.load.image(
    "codey",
    "https://content.codecademy.com/courses/learn-phaser/codey.png"
  );
  this.load.image(
    "platform",
    "https://content.codecademy.com/courses/learn-phaser/physics/platform.png"
  );
}

function create() {
  gameState.cursor = this.input.keyboard.createCursorKeys();

  // physics
  gameState.player = this.physics.add.sprite(225, 440, "codey").setScale(0.5);

  // platforms
  const platforms = this.physics.add.staticGroup();
  platforms.create(225, 510, "platform");

  // collisions
  gameState.player.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.player, platforms);
}

function update() {
  // if (gameState.cursor.up.isDown) gameState.player.setVelocityY(120);
  // if (gameState.cursor.down.isDown) gameState.player.setVelocityY(120);

  // player movement
  if (gameState.cursor.left.isDown) gameState.player.setVelocityX(-120);
  else if (gameState.cursor.right.isDown) gameState.player.setVelocityX(120);
  else gameState.player.setVelocityX(0);
}

const config = {
  width: 450,
  height: 500,
  backgroundColor: 0xdda0dd,
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      // debug: true,
    },
  },
};

const game = new Phaser.Game(config);
