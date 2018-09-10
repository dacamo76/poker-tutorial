/**
 * Tests all cards have same suit.
 * 
 * @param {Card[]} cards 
 */
export default function isFlush(cards) {

  // /////////////////////////////////////////
  //
  // TUTORIAL
  //
  // Implement method to verify all
  // cards have the same suit using
  // Array's every() method
  //

  return cards && cards.every(
    card => card.suit === cards[0].suit)
}
