// This script initializes the game canvas, sets up the game elements, and starts the game loop.
// It creates a canvas, sets its dimensions, initializes the game and UI objects, and starts the animation loop.
// The animation loop clears the canvas, renders the game elements, and updates the UI status text.
// It uses requestAnimationFrame to continuously update the game state and render it on the canvas.

window.addEventListener("load", (e) => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 800;

  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.font = "30px Impact";

  const game = new Game(canvas);
  const ui = new UI(game);

  let lastTime = 0;
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render(ctx, deltaTime);
    ui.drawStatusText(ctx);
    requestAnimationFrame(animate);
  }

  animate(0);
});
