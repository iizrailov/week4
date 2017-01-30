// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
    $(".deal").on("click", function(event) {
      event.preventDefault()

      //  window.getDeck()[2] - this is the array we need to pull from to get a random number / suit

    $("#c1").attr("src", "http://golearntocode.com/images/cards/" + getDeck()[getRandomInt(0,51)] +'.png')
    $("#c2").attr("src", "http://golearntocode.com/images/cards/" + getDeck()[getRandomInt(0,51)] +'.png')
    $("#c3").attr("src", "http://golearntocode.com/images/cards/" + getDeck()[getRandomInt(0,51)] +'.png')
    $("#c4").attr("src", "http://golearntocode.com/images/cards/" + getDeck()[getRandomInt(0,51)] +'.png')
    $("#c5").attr("src", "http://golearntocode.com/images/cards/" + getDeck()[getRandomInt(0,51)] +'.png')



  // Your code goes here!
})
})
