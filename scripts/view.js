var GAME = GAME || {};

GAME.view = {

  init: function() {
    this.canvas = document.getElementById('space');
    this.context = this.canvas.getContext("2d");
  },

  renderShip: function(ship) {
    this.clearCanvas();
    this.context.font = "10pt Arial";
    this.context.fillStyle = "white";
    this.context.rotate(ship.angle * Math.PI/180)
    this.context.fillText("A", ship.x, ship.y);
  },

  renderAsteroids: function(asteroids) {
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
