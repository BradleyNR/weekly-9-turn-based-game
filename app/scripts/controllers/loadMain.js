var $ = require('jquery');
// var Redux = require('redux');

// --- ActionType ---
var actionTypes = require('./actiontypes.js');

// --- Templates ---
var indexTemplate = require('../views/index.hbs');


function loadMain(store){

  var state = store.getState();
  console.log(state.heroList);

  $('#app').html(indexTemplate(state));

  $( "#app" ).on( "click", "js-hero-attack", function(e) {
    e.preventDefault();
    console.log('before hp: ', state.chosenEnemy.health);
    state.chosenHero.useAttack(state.chosenEnemy);
    console.log('after hp: ', state.chosenEnemy.health);

    setTimeout(function(){
      console.log('Hero HP before: ', state.chosenHero.health);
      state.chosenEnemy.useAttack(state.chosenHero);
      console.log('Hero HP after: ', state.chosenHero.health);
     }, 1000);
  });

  $('.js-hero-select').click(function(e){
    e.preventDefault();
    var heroId = $(this).data('hero-id');
    var chosenHero = state.heroList[heroId];
    //grab random index from enemy array
    var randomEnemyNumber = Math.floor(Math.random() * state.enemyList.length);
    //random enemy
    var chosenEnemy = state.enemyList[randomEnemyNumber];

    store.dispatch({type: actionTypes.LOAD_BATTLE, chosenHero: chosenHero, chosenEnemy: chosenEnemy});
  });
}

module.exports = loadMain;
