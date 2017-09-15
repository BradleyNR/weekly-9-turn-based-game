var $ = require('jquery');
var Redux = require('redux');

var actions = require('./controllers/controllers.js');
var entities = require('./models/models.js');

var INITIAL_STATE = {

};

var heroList = [
  new entities.Hero({name: 'Warrior', description: 'fill this in'}),
  new entities.Hero({name: 'Rogue', description: 'fill this in'}),
  new entities.Hero({name: 'Wizard', description: 'fill this in'}),
  new entities.Hero({name: 'Berserker', description: 'fill this in'}),
  new entities.Hero({name: 'Gunner', description: 'fill this in'}),
  new entities.Hero({name: 'Lancer', description: 'fill this in'})
]

// --- REDUCER ---
function reducer(state, action){
  // switch (action.type) {
  //   case lol:
  //
  //     break;
  //
  //   default:
  //     break;
  // }

  return state
}

// --- STORE ---
var store = Redux.createStore(reducer, INITIAL_STATE);

// --- ACTIONS ---
actions.loadMain();






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
