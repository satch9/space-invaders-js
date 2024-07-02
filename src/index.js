window.addEventListener("load", (e) => {
  const canvas = document.getElementById("canvas1")
  const ctx = canvas.getContext("2d")
  canvas.width = 600
  canvas.height = 800
  
  ctx.fillStyle = "white"
  ctx.strokeStyle = "white"
  ctx.lineWidth = 5
  ctx.font ="30px Impact"

  const game = new Game(canvas)
  const ui = new UI(game)

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.render(ctx)
    ui.drawStatusText(ctx)
    requestAnimationFrame(animate)
  }

  animate()
});
