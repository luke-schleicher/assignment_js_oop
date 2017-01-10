var GAME = GAME || {};

GAME.model = {

  asteroids: [],
  currentLevel: 1,

  init: function() {
    this.canvas = document.getElementById('space');
    this.ship = new this.Ship();
    this.createAsteroids(this.currentLevel);
  },

  Ship: function() {
    this.x = Math.floor(GAME.model.canvas.width / 2);
    this.y = Math.floor(GAME.model.canvas.height / 2);
    this.angle = 360;
    this.xVel= 0;
    this.yVel = 0;
  },

  Asteroid: function(size) {
    this.x = Math.floor(Math.random() * GAME.model.canvas.width);
    this.y = Math.floor(Math.random() * GAME.model.canvas.height);
    this.xVel = GAME.model.randomVelocity();
    this.yVel = GAME.model.randomVelocity();
    this.size = size;
  },

  createAsteroids: function(numberOfAsteroids) {
    var i = numberOfAsteroids + 3;
    while (i--) {
      this.asteroids.push(new this.Asteroid(12));
    }
  },

  randomVelocity: function() {
    return (Math.random() / 3) * (Math.random() < 0.5 ? -1 : 1)
  },

  updateAsteroidPositions: function() {
    this.asteroids.forEach(function(element) {
      element.tic();
    });
  },

  updateShipPosition: function() {
    this.ship.tic();
  },

  updateXPos: function(obj) {
    obj.x += obj.xVel;
    if (obj.x < 0) {
      obj.x += this.canvas.width;
    } else if (obj.x > this.canvas.width) {
      obj.x -= this.canvas.width;
    }
  },

  updateYPos: function(obj) {
    obj.y += obj.yVel;
    if (obj.y < 0) {
      obj.y += this.canvas.height;
    } else if (obj.y > this.canvas.height) {
      obj.y -= this.canvas.height;
    }
  }

};

GAME.model.Asteroid.prototype.tic = function() {
  GAME.model.updateXPos(this);
  GAME.model.updateYPos(this);
};

GAME.model.Ship.prototype.tic = function() {
  GAME.model.updateXPos(this);
  GAME.model.updateYPos(this);
};
