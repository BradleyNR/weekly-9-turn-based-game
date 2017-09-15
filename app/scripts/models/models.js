function Character(config) {
  'use strict';
  config = config || {};

  var defaults = {
    health: 100,
    attackPower: 10
  };

  config = Object.assign({}, defaults, config);

  this.health = config.health,
  this.attackPower = config.attackPower,
  this.useAttack = function(target){
    target.health = target.health - this.attackPower;
  }
};


function Hero(config){
  'use strict';
  config = config || {};

  config = Object.assign({}, config);
  this.name = config.name,
  this.description = config.description,
  this.cssClass = config.cssClass,
  this.image = config.image
};
Hero.prototype = new Character();


function Enemy(config){
  'use strict';
  config = config || {};

  settings = Object.assign({}, config);
};
Enemy.prototype = new Character();

module.exports = {Hero: Hero, Enemy: Enemy};
