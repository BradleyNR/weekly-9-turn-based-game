var $ = require('jquery');

// --- ActionType ---
var actionTypes = require('./actiontypes.js');

// --- Templates ---
var battleTemplate = require('../views/battle.hbs');

function loadBattle(store){
  var state = store.getState();

  //early return
  if(!state.heroSelect){
    return
  }

  console.log('state: ', state);
  var ctx = {
    chosenHero: state.chosenHero,
    heroList: state.heroList,
    chosenEnemy: state.chosenEnemy,
    winScreen: false,
    attack: '',
    enemyAttack: ''
  }

  $('#app').html(battleTemplate(ctx));

  // ------ Delegated event attached to #app in order to  ------
  // ------ keep event handler on the element after an HTML update ------
  $( "#app" ).on( "click", ".js-hero-attack", function(e) {
    e.preventDefault();
    ctx.enemyAttack = '';
    console.log('before hp: ', state.chosenEnemy.health);
    state.chosenHero.useAttack(state.chosenEnemy);
    console.log('after hp: ', state.chosenEnemy.health);

    ctx.attack = 'You attacked for ' + state.chosenHero.attackPower + ' damage!';

    if (state.chosenEnemy.health <= 0) {
      state.chosenEnemy.health = 0;
      ctx.attack = 'You Win!'
    }

    console.log(state.winScreen);

    $('#app').html(battleTemplate(ctx));

    setTimeout(function(){
      if (state.chosenEnemy.health > 0) {
        ctx.attack = ''
        ctx.enemyAttack = 'Enemy attacked for ' + state.chosenEnemy.attackPower + ' damage!'
        console.log('Hero HP before: ', state.chosenHero.health);
        state.chosenEnemy.useAttack(state.chosenHero);
        console.log('Hero HP after: ', state.chosenHero.health);
      }
      $('#app').html(battleTemplate(ctx));
    }, 1000);
  });


};

module.exports = loadBattle;
