var $ = require('jquery');
var Redux = require('redux');

var loadMain = require('./controllers/loadMain.js');
var loadBattle = require('./controllers/loadBattle.js');
var actionTypes = require('./controllers/actiontypes.js')
var entities = require('./models/models.js');

// ------ Characters ------
var heroList = [
  new entities.Hero({
    name: 'Warrior',
    description: 'The Warrior has increased power',
    cssClass: '',
    image: './images/warrior.png',
    attackPower: 20,
    health: 150
  }),
  new entities.Hero({
    name: 'Rogue',
    description: 'The rogue has low attack power',
    cssClass: 'hero-2',
    image: './images/rogue.png',
    attackPower: 5
  }),
  new entities.Hero({
    name: 'Wizard',
    description: 'The wizard has low health',
    cssClass: 'hero-3',
    image: './images/wizard.png',
    health: 75
  }),
  new entities.Hero({
    name: 'Berserker',
    description: 'The berserker has high health',
    cssClass: 'hero-4',
    image: './images/berserker.png',
    health: 150
  }),
  new entities.Hero({
    name: 'Gunner',
    description: 'The gunner has a gun, another gun, and yet another gun, plus one more gun',
    cssClass: 'hero-5',
    image: './images/gunner.png'
  }),
  new entities.Hero({
    name: 'Lancer',
    description: 'This is the Lancer',
    cssClass: 'hero-6',
    image: './images/dragoon.png'
  })
];

// ------ Enemies ------
var enemyList = [
  new entities.Enemy({name: 'Dragon', image: './images/dragon.png'}),
  new entities.Enemy({name: 'Garland, knight of Darkness', image: './images/garland.png'}),
  new entities.Enemy({name: 'Goblin', image: './images/goblin.png'}),
  new entities.Enemy({name: 'Vampire', image: './images/vampire.png'}),
  new entities.Enemy({name: 'Witch', image: './images/witch.png'}),
  new entities.Enemy({name: 'Golem', image: './images/golem.png'}),
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
      state.heroSelect = true,
      state.winScreen = false,
      state.attackMessage = ''
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
