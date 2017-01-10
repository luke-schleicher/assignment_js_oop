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
    }, 15);


  },

  updateDirection: function(pressedKey) {
    GAME.model.updateDirection(pressedKey);
  },
  //   switch (pressedKey) {
  //     // case 'ArrowUp':
  //     //   if (model.direction !== 'down') {
  //     //     model.direction = 'up';
  //     //   }
  //     //   break;
  //     case 'ArrowRight':
  //       GAME.model.direction = 'right';
  //       break;
  //     // case 'ArrowDown':
  //     //   if (model.direction !== 'up') {
  //     //     model.direction = 'down';
  //     //   }
  //     //   break;
  //     case 'ArrowLeft':
  //       model.direction = 'left';
  //       break;
  //   };
  // },



};
