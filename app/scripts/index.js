var $ = require('jquery');
var Redux = require('redux');

var loadMain = require('./controllers/loadMain.js');
var loadBattle = require('./controllers/loadBattle.js');
var actionTypes = require('./controllers/actiontypes.js')
var entities = require('./models/models.js');


var heroList = [
  new entities.Hero({name: 'Warrior', description: 'fill this in', cssClass: '', image: '../../app/images/warrior.png'}),
  new entities.Hero({name: 'Rogue', description: 'fill this in', cssClass: 'hero-2', image: '../../app/images/rogue.png'}),
  new entities.Hero({name: 'Wizard', description: 'fill this in', cssClass: 'hero-3', image: '../../app/images/wizard.png'}),
  new entities.Hero({name: 'Berserker', description: 'fill this in', cssClass: 'hero-4', image: '../../app/images/berserker.png'}),
  new entities.Hero({name: 'Gunner', description: 'fill this in', cssClass: 'hero-5', image: '../../app/images/gunner.png'}),
  new entities.Hero({name: 'Lancer', description: 'fill this in', cssClass: 'hero-6', image: '../../app/images/lancer.png'})
];

var INITIAL_STATE = {
  heroList: heroList,
  heroHasBeenSelected: false,
};


// --- REDUCER ---
function reducer(state, action){

  switch (action.type) {
    case actionTypes.LOAD_BATTLE:
      state.chosenHero = action.chosenHero,
      state.heroHasBeenSelected = true
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






// ------ This animates the sprite ------
// --- currently not working due to background size of cover ---

// var newSprite = 1;
// setInterval(function(){
//   if (newSprite) {
//     $('.lancer').css("background-image", "url('../../app/images/lancerglow.png')");
//     newSprite = 0;
//   } else if (!newSprite){
//     $('.lancer').css("background-image", "url('../../app/images/dragoon.png')");
//     newSprite = 1;
//   }
// }, 1000)
