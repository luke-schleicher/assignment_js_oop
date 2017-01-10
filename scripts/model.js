var GAME = GAME || {};

GAME.model = {

  asteroids: [],
  currentLevel: 10,

  init: function() {
    this.createAsteroids(this.currentLevel);
  },

  Asteroid: function() {
    var canvas = document.getElementById('space');
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.xVel = GAME.model.randomVelocity();
    this.yVel = GAME.model.randomVelocity();
  },

  randomVelocity: function() {
    return (Math.random() / 3) * (Math.random() < 0.5 ? -1 : 1)
  },

  createAsteroids: function(numberOfAsteroids) {
    var i = numberOfAsteroids;
    while (i--) {
      this.asteroids.push(new this.Asteroid());
    }
  },

  updateAsteroidPositions: function() {
    this.asteroids.forEach(function(element) {
      element.tic();
    });
  },

};

GAME.model.Asteroid.prototype.tic = function() {
  this.x += this.xVel;
  this.y += this.yVel;
};
