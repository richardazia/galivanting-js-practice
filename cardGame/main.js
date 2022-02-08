;(function(window){

// course link: https://www.linkedin.com/learning/web-portfolio-projects-binding-and-propagation/

// game
var Game = function(el, option) {
    this.el = document.getElementById(el);
    this.option = option;
    // Add info div
    this.info_div = document.createElement('div');
    this.info_div.id = "info_div";
    //create Deck div
    this.deck_div = document.createElement("div");
    this.deck_div.id = "deck_div";
    this.gameDeck = new Deck(option); //create new deck
    this.gameDeck.buildDeck.call(this); //build deck

    var shuffleBtn = document.createElement("button");
    shuffleBtn.innerHTML = "Shuffle";
    shuffleBtn.onclick = this.gameDeck.shuffle.bind(this);

    this.info_div.appendChild(shuffleBtn);

    this.rules = {
        discardRow : [
            {
                name: " Got It! ",
                droppable: true,
                maxcards: this.deck_div.children.length,
                piles: 1
            }
        ],
        gameComplete: function(e){
            if (e.currentTarget.childNode.length === this.discardRow[0].maxcards){
                console.log("You win");
            }
        }
    }

    // discard pile
    this.buildDiscard = function() {
        for (var i = this.rules.discardRow.length -1; i >= 0; i--) {
            var zone = document.createElement("div");
            zone.className = "zone";
            var discardRule = this.rules.discardRow[i];
            var c = 0;
            while(c < discardRule.piles){
                var discardObj = new DiscardPile();
                discardObj.name = discardRule.name;
                discardObj.droppable = discardRule.droppable;
                discardObj.id = "pile-" + c;
                var buildObj = discardObj.init();
                zone.appendChild(buildObj);
                c++;
            }
            this.el.appendChild(zone);
        }
    }
    // add info_div and deck_div to el
    this.el.appendChild(this.info_div);
    this.el.appendChild(this.deck_div);
    this.buildDiscard();
}
// info section
// deck

var Deck = function(option){
    //parse data
    this.deckData = option.data;
    // build loop
    this.buildDeck = function(){
        var parentFrag = document.createDocumentFragment();
        this.deck_div.innerHTML = ""; //empty deck_div
        for(var i = this.option.data.length - 1; i >= 0; i--){
            var card = new Card();
            card.id = "card-" + i; //set id
            card.data = this.option.data[i]; //set data
            card.buildCard(parentFrag); //build card
        }
        this.deck_div.appendChild(parentFrag); //append to deck_div
        this.gameDeck.stack.call(this); //stack cards
    }
    
}


// Rules


// deck
// cards
// -----
// shuffle

Deck.prototype.shuffle = function(){
    var cardsToShuffle = this.gameDeck.deckData;
    var m = cardsToShuffle.length, t, i;
    while(m){
        i = Math.floor(Math.random() * m--);
        t = cardsToShuffle[m]; 
        cardsToShuffle[m] = cardsToShuffle[i];
        cardsToShuffle[i] = t;
    }
    this.gameDeck.checkData = cardsToShuffle;
    this.gameDeck.buildDeck.call(this);
}

// stack

Deck.prototype.stack = function(g){
    var cards = this.deck_div.children;
    for (var i = cards.length - 1; i >= 0; i--) {
        cards[i].style.top = i + "px"; // 
        cards[i].style.left = i + "px"; //set left
        cards[i].classList.add("stacked_card"); //add class
    }
}

// card
var Card = function(){
    this.id = "";
    this.data = "";
    this.cardCont = document.createElement("div");
    this.cardCont.className = "card_container";
    this.cardFront = document.createElement("div");
    this.cardFront.className = "card_front";
    this.cardBack = document.createElement("div");
    this.cardBack.className = "card_back";
    this.buildCard = function(parentFrag){
        var flipDiv = document.createElement("div"),
            frontValDiv = document.createElement("div"),
            backValDiv = document.createElement("div"),
            catDiv = document.createElement("div");
        flipDiv.className = "flip";
        frontValDiv.className ="front_val";
        backValDiv.className = "back_val";
        catDiv.className = "cat_val";

        frontValDiv.innerHTML = this.data.q;
        backValDiv.innerHTML = this.data.a;
        var learnMore = document.createElement("a");
        learnMore.text = "Learn More";
        learnMore.href = this.data.url;
        console.log(this.data.url);
        learnMore.target = "_blank";

        var infoImage = document.createElement("img");
        infoImage.src = "images/info.svg";
        learnMore.appendChild(infoImage);
        learnMore.addEventListener("click", function(e){
            e.stopPropagation();
        });
        backValDiv.appendChild(learnMore);

        catDiv.innerHTML = this.data.category;

        this.cardFront.appendChild(frontValDiv);
        this.cardFront.appendChild(catDiv);
        this.cardBack.appendChild(backValDiv);

        flipDiv.appendChild(this.cardFront);
        flipDiv.appendChild(this.cardBack);

        this.cardCont.id = this.id;
        this.cardCont.appendChild(flipDiv);
        this.cardCont.onclick = cardClick;
        this.cardCont.draggable = true;
        this.cardCont.ondragstart = cardDrag;
        parentFrag.appendChild(this.cardCont);
    }
}
var cardClick = (function(e){
    var counter = 0; //count clicks
    return function (e){
        e.currentTarget.classList.toggle("flip_card");
        e.currentTarget.classList.toggle("slide_over");
        e.currentTarget.style.zIndex = counter;
        counter++;
    }
})()

function cardDrag(){
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
}


// val
// suit
// ---
// flip

// Discard pile
var DiscardPile = function(){
    this.name = "";
    this.droppable;
    this.id = "";
    this.init = function(){
        // holders
        var holderContainer = document.createElement("div"),
        holderLabel = document.createElement("div"),
        holderTarget = document.createElement("div");
        holderTarget.ondragover = function(e){preventDefault();};
        holderTarget.ondrop = this.cardDrop;
        holderContainer.className = "holder_container";
        holderLabel.className = "holder_label";
        holderTarget.className = "holder_target";
        holderLabel.innerText = this.name;

        holderContainer.appendChild(holderLabel);
        holderContainer.appendChild(holderTarget);

        return holderContainer; 
    }
}

DiscardPile.prototype.cardDrop = function(){
    var cardID = e.dataTransfer.getData("text/plain");
    var cardDragging = document.getElementById(cardID);
    cardDragging.style.top = "0px";
    cardDragging.style.left = "0px";
    e.currentTarget.appendChild(cardDragging);
}

// ---
// accept or reject

window.Game = Game;

})(window);