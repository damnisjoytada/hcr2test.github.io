// Simplified fallback version of rubeworld.js
// This is a placeholder that mimics basic structure and logs load calls

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
      // Simulate physics
    }

    draw(ctx) {
      ctx.fillStyle = "#444";
      this.bodies.forEach((body, index) => {
        ctx.fillRect(100 + index * 100, 300, 80, 20); // Draw fake bodies
      });
    }
  }
}