var GAME = GAME || {};

GAME.view = {

  renderAsteroids: function(asteroids) {

    asteroids.forEach(function(asteroid) {
      GAME.view.renderAsteroid(asteroid);
    });

  },

  renderAsteroid: function(asteroid) {
    var canvas = document.getElementById('space');
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(asteroid.x, asteroid.y, 20, 0, 2 * Math.PI);
    context.stroke();
  },

};