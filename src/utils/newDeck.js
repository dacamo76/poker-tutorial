
const CARD_RANKS = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  'J',
  'Q',
  'K',
  'A'
];

const SUITS = [
  'C',
  'D',
  'H',
  'S'
];

/**
 * Creates a new deck of cards array
 * @returns {Array.<{rank: string, suit: string}>}
 */
function newDeck() {

  // /////////////////////////////////////////
  //
  // TUTORIAL
  //
  // Create an array of card object, each of
  // which has a `rank` and `suit` property
  //
  const deck = []
  for (let c = 0; c < CARD_RANKS.length; c++) {
    for (let s = 0; s < SUITS.length; s++) {
      const card = {
        rank: CARD_RANKS[c],
        suit: SUITS[s]
      };
      deck.push(card);
    }
  }

  let i = deck.length;
  while(i--) {
    const swapIndex = Math.trunc(Math.random() * i);
    const swap = deck[swapIndex];
    deck[swapIndex] = deck[i];
    deck[i] = swap; 
  }
  return deck;
}

if (require.main === module) {
  console.log(newDeck());
} else {
  module.exports = newDeck;
}
