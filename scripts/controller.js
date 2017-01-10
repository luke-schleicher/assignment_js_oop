var GAME = GAME || {};

GAME.controller = {

  init: function() {
    GAME.model.init();
    GAME.view.init();
    this.gameLoop();
  },

  gameLoop: function() {

    this.interval = setInterval(function() {

      GAME.model.updateAsteroidPositions();
      GAME.view.renderAsteroids(GAME.model.asteroids);

    }, 20);


  },



};
