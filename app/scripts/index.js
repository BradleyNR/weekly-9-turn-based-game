var $ = require('jquery');
var Redux = require('redux');

var loadMain = require('./controllers/loadMain.js');
var loadBattle = require('./controllers/loadBattle.js');
var actionTypes = require('./controllers/actiontypes.js')
var entities = require('./models/models.js');


var heroList = [
  new entities.Hero({name: 'Warrior', description: 'fill this in', cssClass: '', image: '../../app/images/warrior.png', attackPower: 20}),
  new entities.Hero({name: 'Rogue', description: 'fill this in', cssClass: 'hero-2', image: '../../app/images/rogue.png'}),
  new entities.Hero({name: 'Wizard', description: 'fill this in', cssClass: 'hero-3', image: '../../app/images/wizard.png'}),
  new entities.Hero({name: 'Berserker', description: 'fill this in', cssClass: 'hero-4', image: '../../app/images/berserker.png'}),
  new entities.Hero({name: 'Gunner', description: 'fill this in', cssClass: 'hero-5', image: '../../app/images/gunner.png'}),
  new entities.Hero({name: 'Lancer', description: 'fill this in', cssClass: 'hero-6', image: '../../app/images/dragoon.png'})
];

var enemyList = [
  new entities.Enemy({name: 'Dragon', image: '../../app/images/dragon.png'}),
  new entities.Enemy({name: 'Garland, knight of Darkness', image: '../../app/images/garland.png'}),
  new entities.Enemy({name: 'Goblin', image: '../../app/images/goblin.png'}),
  new entities.Enemy({name: 'Vampire', image: '../../app/images/vampire.png'}),
  new entities.Enemy({name: 'Witch', image: '../../app/images/witch.png'}),
  new entities.Enemy({name: 'Golem', image: '../../app/images/golem.png'}),
];

var INITIAL_STATE = {
  heroList: heroList,
  enemyList: enemyList,
  heroHasBeenSelected: false,
};


// --- REDUCER ---
function reducer(state, action){

  switch (action.type) {
    case actionTypes.LOAD_BATTLE:
      state.chosenHero = action.chosenHero,
      state.chosenEnemy = action.chosenEnemy,
      state.heroSelect = true
      break;

    default:
      break;
  }

  return state
}

// --- STORE ---
var store = Redux.createStore(reducer, INITIAL_STATE);
store.subscribe(function(){loadBattle(store)});

// --- ACTIONS ---
loadMain(store);
