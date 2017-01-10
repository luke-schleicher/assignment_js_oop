var GAME = GAME || {};

GAME.view = {

  init: function() {
    this.canvas = document.getElementById('space');
    this.context = this.canvas.getContext("2d");
  },

  renderAsteroids: function(asteroids) {
    this.clearCanvas();
    asteroids.forEach(function(asteroid) {
      GAME.view.renderAsteroid(asteroid);
    });

  },

  renderAsteroid: function(asteroid) {
    this.context.strokeStyle = "white";
    this.context.beginPath();
    this.context.arc(asteroid.x, asteroid.y, asteroid.size, 0, 2 * Math.PI);
    this.context.stroke();
  },

  clearCanvas: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

};
