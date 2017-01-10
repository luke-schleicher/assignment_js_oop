var GAME = GAME || {};

GAME.model = {

  asteroids: [],
  currentLevel: 10,

  init: function() {
    this.createAsteroids(this.currentLevel);
  },

  Asteroid: function() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
    this.xVel = Math.random();
    this.yVel = Math.random();
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
