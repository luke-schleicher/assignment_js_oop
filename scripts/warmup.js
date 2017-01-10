var WARMUP = {

  asteroids: [],

  init: function() {
    this.createAsteroids(10000);
    this.benchmark();
    // var self = this;
    // this.interval = setInterval(function(){
    //   self.asteroids.forEach(function(element) {
    //     element.tic();
    //     console.log(element.x, element.y);
    //   });
    // }, 1000);
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
    };
  },

  benchmark: function() {
    var start = Date.now();
    this.asteroids.forEach(function(element) {
      var i = 10000;
      while (i--) {
        element.tic();
      }
    });
    console.log(Date.now() - start);
  }

};

WARMUP.Asteroid.prototype.tic = function() {
  this.x += this.xVel;
  this.y += this.yVel;
};

// NOTE:
// Via prototypical lookup
// 10,000 asteroids with 10,000 tics each = 494
// Via isntance methods
// 10,000 asteroids with 10,000 tics each = 1467
