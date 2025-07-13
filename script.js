const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
resizeCanvas();

let engineLevel = 1;
let rubeWorld = null;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);

function upgradeEngine() {
  engineLevel++;
  document.getElementById("upgradeInfo").textContent = "Engine Lv: " + engineLevel;
}

document.getElementById("upgradeEngine").onclick = upgradeEngine;

function startGame() {
  engineLevel = 1;
  document.getElementById("upgradeInfo").textContent = "Engine Lv: 1";

  rubeWorld = new RUBE.World({ scale: 30 });
  fetch("decryped_jpm.txt")
    .then(response => {
      if (!response.ok) throw new Error("File not found");
      return response.json();
    })
    .then(data => {
      const success = rubeWorld.loadWorldFromRUBEObject(data);
      if (!success) throw new Error("RUBE load failed");
      console.log("RUBE world loaded.");

      // Show terrain immediately
      rubeWorld.update();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rubeWorld.draw(ctx);

      requestAnimationFrame(gameLoop);
    })
    .catch(err => {
      alert("Error loading decryped_jpm.txt: " + err);
    });
}

function gameLoop() {
  requestAnimationFrame(gameLoop);
  if (!rubeWorld) return;
  rubeWorld.update();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  rubeWorld.draw(ctx);
}

// Start on tap/click (mobile safe)
canvas.addEventListener("touchstart", () => {
  if (!rubeWorld) startGame();
}, { once: true });

canvas.addEventListener("click", () => {
  if (!rubeWorld) startGame();
}, { once: true });