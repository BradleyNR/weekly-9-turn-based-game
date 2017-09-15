var $ = require('jquery');
// var Redux = require('redux');

// --- ActionType ---
var actionTypes = require('./actiontypes.js');

// --- Templates ---
var indexTemplate = require('../views/index.hbs');


function loadMain(store){

  var data = store.getState();
  console.log(data.heroList);

  $('#app').html(indexTemplate(data));

  $('.js-hero-select').click(function(e){
    e.preventDefault();
    var heroId = $(this).data('hero-id');
    var chosenHero = data.heroList[heroId];

    store.dispatch({type: actionTypes.LOAD_BATTLE, chosenHero: chosenHero});
  });
}

module.exports = loadMain;
