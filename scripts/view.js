var GAME = GAME || {};

GAME.view = {

  renderAsteroids: function(asteroids) {
    GAME.view.clearCanvas();
    asteroids.forEach(function(asteroid) {
      GAME.view.renderAsteroid(asteroid);
    });

  },

  renderAsteroid: function(asteroid) {
    var canvas = document.getElementById('space');
    var context = canvas.getContext("2d");
    context.fillStyle = "#FFF"
    context.fill();
    context.beginPath();
    context.arc(asteroid.x, asteroid.y, 10, 0, 2 * Math.PI);
    context.stroke();
  },

  clearCanvas: function() {
    var canvas = document.getElementById('space');
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  },

};
