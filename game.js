const gameState = {};

function preload() {
  this.load.image(
    "codey",
    "https://content.codecademy.com/courses/learn-phaser/codey.png"
  );
}

function create() {
  gameState.codey = this.add.sprite(40, 60, "codey");
  gameState.cursor = this.input.keyboard.createCursorKeys();
}

function update() {
  if (gameState.cursor.up.isDown) gameState.codey.y -= 3;
  if (gameState.cursor.down.isDown) gameState.codey.y += 3;
  if (gameState.cursor.left.isDown) gameState.codey.x -= 3;
  if (gameState.cursor.right.isDown) gameState.codey.x += 3;
}

const config = {
  width: 500,
  height: 500,
  backgroundColor: 0xdda0dd,
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);
