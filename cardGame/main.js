;(function(window){

// game
var Game = function(el, option) {
    this.el = document.querySelector(el);
    this.option = option;
    // Add info div
    this.info_div = document.createElement('div');
    this.info_div.id = "info_div";
    //create Deck div
    this.deck_div = document.createElement('div');
    this.deck_div.id = "deck_div";
    this.gameDeck = new Deck(this.deck_div, option); //create new deck
    this.gameDeck.buildDeck(); //build deck
    // add info_div and deck_div to el
    this.el.appendChild(this.info_div);
    this.el.appendChild(this.deck_div);
}
// info section
// deck

var Deck = function(deck_div, option){
    //parse data
    this.deckData = option.data;
    // build loop
    this.buildDeck = function(){
        var parentFrag = document.createDocumentFragment();
        deck_div.innerHTML = ""; //empty deck_div
        for(var i = this.deckData.length - 1; i >= 0; i--){
            var card = new Card();
            card.id = "card-" + i; //set id
            card.data = this.deckData[i]; //set data
            card.buildCard(parentFrag); //build card
        }
        deck_div.appendChild(parentFrag); //append to deck_div
    }
}

// discard pile
// Rules
// deck
var Deck = function(){

}
// cards
// -----
// shuffle
// stack

// card
var Card = function(){
    var card = new Card();
}
// val
// suit
// ---
// flip

// Discard pile
var DiscardPile = function(){

}
// holders
// ---
// accept or reject

window.Game = Game;

})(window);