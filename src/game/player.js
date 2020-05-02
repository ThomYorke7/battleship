import { gameBoard } from './gameBoard';

function createPlayer() {
  const player = gameBoard();
  const playerBoard = player.board;

  function createCoordinates() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }

  function randomPlacement(x, y, orientation, length) {
    if (
      player.checkPlacementLength(x, y, length) &&
      player.checkPlacementFree(x, y, orientation, length)
    ) {
      player.placeShip(x, y, orientation, length);
      return true;
    }
    return false;
  }

  function generatePlacement() {
    for (let i = 1; i < 6; i += 1) {
      let [x, y] = createCoordinates();
      let orientation = Math.random() >= 0.5;
      while (true) {
        if (randomPlacement(x, y, orientation, i)) {
          break;
        } else {
          [x, y] = createCoordinates();
          orientation = Math.random() >= 0.5;
        }
      }
    }
  }

  function newBoard() {
    player.ships = [];
    for (let i = 0; i < playerBoard.length; i += 1) {
      for (let j = 0; j < playerBoard.length; j += 1) {
        playerBoard[i].splice(j, 1, '');
      }
    }
  }

  function hasLost() {
    return player.ships.every((ship) => ship.isSunk());
  }

  function attack(x, y, enemy) {
    enemy.receiveAttack(x, y);
  }
  return { hasLost, attack, playerBoard, generatePlacement, newBoard };
}

export default createPlayer;

// const receiveAttack = (x, y) => {
//   const spot = board[y][x];
//   if (spot !== '' && spot !== 'X') {
//     const ship = ships.find((s) => s.getLength() === spot);
//     ship.isHit();
//   } else if (spot === '') {
//     board[y].splice(x, 1, 'X');
//   }
// };
