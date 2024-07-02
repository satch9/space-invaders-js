class UI {
  constructor(game) {
    this.game = game
  }

  drawStatusText(context) {
    context.save()
    context.shadowOffsetX = 2
    context.shadowOffsetY = 2
    context.shadowColor = 'black'
    context.fillText('Score :  ' + this.game.score, 20, 40)
    context.fillText('Vague :  ' + this.game.waveCount, 20, 80)
    for (let i = 0; i < this.game.player.lives; i++) {
      context.fillRect(20 + 10 * i , 100, 5, 20)
    }
    if (this.game.gameOver) {
      context.textAlign = 'center'
      context.font = ' 100px Impact'
      context.fillText(
        'GAME OVER!',
        this.game.width * 0.5,
        this.game.height * 0.5,
      )
      context.font = '20px Impact'
      context.fillText(
        'Press R to restart!',
        this.game.width * 0.5,
        this.game.height * 0.5,
      )
    }
    context.restore()
  }
}
