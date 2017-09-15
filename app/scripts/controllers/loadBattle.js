var $ = require('jquery');

// --- ActionType ---
var actionTypes = require('./actiontypes.js');

// --- Templates ---
var battleTemplate = require('../views/battle.hbs');

function loadBattle(store){
  var state = store.getState();

  //early return
  if(!state.heroHasBeenSelected){
    return
  }
  console.log('state: ', state);
  var ctx = {
    chosenHero: state.chosenHero,
    heroList: state.heroList
  }

  $('#app').html(battleTemplate(ctx));

};

module.exports = loadBattle;
