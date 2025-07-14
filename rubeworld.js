// rubeworld.js — Fallback if real RUBE is unavailable
class RUBE {
  static World = class {
    constructor(options = {}) {
      this.scale = options.scale || 30;
      this.bodies = [];
    }

    loadWorldFromRUBEObject(data) {
      console.log("Loaded mock RUBE object:", data);
      this.bodies = data.body || [];
      return true;
    }

    update() {
      // Optional physics logic
    }

    draw(ctx) {
      ctx.fillStyle = "#444";
      this.bodies.forEach((body, i) => {
        ctx.fillRect(100 + i * 120, 300, 80, 20); // Draw placeholder rectangles
      });
    }
  }
}
