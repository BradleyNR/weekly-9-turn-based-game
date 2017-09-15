var $ = require('jquery');
var Redux = require('redux');

// --- Templates ---
var indexTemplate = require('../views/index.hbs');



// --- Actions ---
var actions = {
  //Mainpage
  loadMain: function(){
    $('#app').html(indexTemplate());

    $('.js-hero-select').click(function(e){
      e.preventDefault();
      console.log($(this).data('class'));
    });
  }
}

module.exports = actions;
