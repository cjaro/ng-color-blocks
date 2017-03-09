colorBlocks.controller('GameController', ['DataFactory', function(DataFactory) {

console.log('game controller running');

var self = this;
self.colors = DataFactory.colors;

// start game


// resets game to the starting state
self.init = function(){
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?'
};

self.init();

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    self.init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
