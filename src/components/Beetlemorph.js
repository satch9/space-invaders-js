// The Beetlemorph class extends the Enemy class and represents a specific type of enemy in the game.
// It initializes the Beetlemorph enemy with specific properties such as image, animation frames, lives, and maximum lives.
// This class adds unique characteristics to the Beetlemorph enemy compared to the generic Enemy class.
class Beetlemorph extends Enemy {
  constructor(game, positionX, positionY) {
    super(game, positionX, positionY);
    this.image = document.getElementById("beetlemorph");
    this.frameX = 0;
    this.maxFrame = 2;
    this.frameY = Math.floor(Math.random() * 4);
    this.lives = 1;
    this.maxLives = this.lives;
  }
}
