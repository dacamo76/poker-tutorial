var startGame = require('./startGame');

const gameState = {
    deck: [
      { rank: '2', suit: 'C' },
      { rank: '2', suit: 'D' },
      { rank: '2', suit: 'H' },
      { rank: '2', suit: 'S' },
      { rank: '3', suit: 'C' },
      { rank: '3', suit: 'D' },
      { rank: '3', suit: 'H' },
      { rank: '3', suit: 'S' },
      { rank: '4', suit: 'C' },
      { rank: '4', suit: 'D' },
      { rank: '4', suit: 'H' }
    ],
    communityCards: [],
    players: [
      {
        playerName: 'Caden',
        playerBank: 100,
        playerBet: 0,
        holeCards: []
      },
      {
        playerName: 'Caitlin',
        playerBank: 100,
        playerBet: 0,
        holeCards: []
      },
      {
        playerName: 'Claire',
        playerBank: 100,
        playerBet: 0,
        holeCards: []
      },
      {
        playerName: 'Cole',
        playerBank: 100,
        playerBet: 0,
        holeCards: []
      }
    ],
    pot: 0,
    inTurnPlayerIndex: 0
  };
 startGame(gameState);