// The UI class handles the user interface elements and status display in the game.
// It receives the game object and renders the score, wave count, player lives, and game over message on the canvas.
// The class includes a method for drawing the status text on the canvas, updating the UI elements based on the game state, and displaying game over messages.
// It manages the visual representation of game information and feedback to the player.
class UI {
  constructor(game) {
    this.game = game;
  }

  drawStatusText(context) {
    context.save();
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "black";
    context.fillText("Score :  " + this.game.score, 20, 40);
    context.fillText("Vague :  " + this.game.waveCount, 20, 80);
    for (let i = 0; i < this.game.player.maxLives; i++) {
      context.strokeRect(20 + 20 * i, 100, 5, 15);
    }
    for (let i = 0; i < this.game.player.lives; i++) {
      context.fillRect(20 + 20 * i, 100, 5, 15);
    }
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = " 100px Impact";
      context.fillText(
        "GAME OVER!",
        this.game.width * 0.5,
        this.game.height * 0.5
      );
      context.font = "20px Impact";
      context.fillText(
        "Press R to restart!",
        this.game.width * 0.5,
        this.game.height * 0.5 + 30
      );
    }
    context.restore();
  }
}
