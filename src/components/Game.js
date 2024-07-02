class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.keys = []
    this.player = new Player(this)

    this.projectilesPool = []
    this.numberOfProjectiles = 10
    this.createProjectiles()

    this.columns = 3
    this.rows = 3
    this.enemySize = 60

    this.waves = []
    this.waves.push(new Wave(this))

    // event listeners
    window.addEventListener('keydown', (e) => {
      if (this.keys.indexOf(e.key) === -1) this.keys.push(e.key)
      if (e.key === '1') this.player.shoot()
    })

    window.addEventListener('keyup', (e) => {
      const index = this.keys.indexOf(e.key)
      if (index > -1) this.keys.splice(index, 1)
    })
  }

  render(context) {
    this.player.draw(context)
    this.player.update()
    this.projectilesPool.forEach((projectile) => {
      projectile.update()
      projectile.draw(context)
    })
    this.waves.forEach((wave) => {
      wave.render(context)
    })
  }

  // create projectiles object pool
  createProjectiles() {
    for (let i = 0; i < this.numberOfProjectiles; i++) {
      this.projectilesPool.push(new Projectile())
    }
  }

  // get free projectiles object from the pool
  getProjectile() {
    for (let i = 0; i < this.projectilesPool.length; i++) {
      if (this.projectilesPool[i].free) return this.projectilesPool[i]
    }
  }

  // collision detection between 2 rectangles
  checkCollision(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.height + a.y > b.y
    )
  }
}
