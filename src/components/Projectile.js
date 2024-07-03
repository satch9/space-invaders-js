// The Projectile class represents the projectiles fired by the player.
// It defines the projectile's properties such as position, speed, and status.
// The class includes methods for drawing the projectile on the canvas, updating its position, starting the projectile at a specific location, and resetting it when it goes out of bounds.
// It manages the projectile's movement and visibility on the canvas.
class Projectile {
  constructor() {
    this.width = 6;
    this.height = 20;
    this.x = 0;
    this.y = 0;
    this.speed = 20;
    this.free = true;
  }

  draw(context) {
    if (!this.free) {
      context.save();
      context.fillStyle = "gold";
      context.fillRect(this.x, this.y, this.width, this.height);
      context.restore();
    }
  }

  update() {
    if (!this.free) {
      this.y -= this.speed;
      if (this.y < -this.height) this.reset();
    }
  }

  start(x, y) {
    this.x = x - this.width * 0.5;
    this.y = y;
    this.free = false;
  }

  reset() {
    this.free = true;
  }
}
