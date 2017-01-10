var GAME = GAME || {};

GAME.model = {

  asteroids: [],
  currentLevel: 1,

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
    var i = numberOfAsteroids + 3;
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
  var canvas = document.getElementById('space');
  this.x += this.xVel;
  if (this.x < 0) {
    this.x += canvas.width;
  } else if (this.x > canvas.width) {
    this.x -= canvas.width;
  };
  this.y += this.yVel;
  if (this.y < 0) {
    this.y += canvas.height;
  } else if (this.y > canvas.height) {
    this.y -= canvas.height;
  };
};
