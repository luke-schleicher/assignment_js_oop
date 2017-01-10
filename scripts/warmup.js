var WARMUP = {

  asteroids: [],

  init: function() {
    var this.interval = setInterval(tic, 1000);
  },

  Asteroid: function() {
    this.x = 0;
    this.y = 0;
    this.xVel = 1;
    this.yVel = 1;
  },

};

WARMUP.Asteroid.prototype.tic = function() {
  this.x += this.xVel;
  this.y += this.yVel;
};

WARMUP.asteroids.push(new WARMUP.Asteroid());

