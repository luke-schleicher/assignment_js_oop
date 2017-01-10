var GAME = GAME || {};

GAME.controller = {

  init: function() {
    GAME.model.init();
    GAME.view.init();
    this.gameLoop();
  },

  gameLoop: function() {

    this.interval = setInterval(function() {

      GAME.model.updateShipPosition();

      GAME.view.clearCanvas();
      GAME.view.renderShip(GAME.model.ship);

      GAME.model.updateAsteroidPositions();
      GAME.view.renderAsteroids(GAME.model.asteroids);
      GAME.model.ship.angle++;
    }, 15);


  },



};
