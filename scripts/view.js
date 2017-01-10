var GAME = GAME || {};

GAME.view = {

  init: function() {
    this.canvas = document.getElementById('space');
    this.context = this.canvas.getContext("2d");
    this.setGameBoardListener();
  },

  renderShip: function(ship) {
    this.context.save();
    this.context.translate(ship.x, ship.y);
    this.context.rotate(ship.angle * Math.PI/180);
    this.context.font = "20px Arial";
    this.context.fillStyle = "white";
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
    this.context.fillText("A", 0, 0);
    this.context.restore();
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

  setGameBoardListener: function() {
    $(document).on('keydown', function(event) {
      GAME.controller.updateDirection(event.originalEvent.code);
    });
  },

};
