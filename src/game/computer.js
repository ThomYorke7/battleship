import { gameBoard } from './gameBoard';

function createComputer() {
  const computer = gameBoard();
  const computerBoard = computer.board;
  const computerShips = computer.ships;
  const attacks = [];

  function createCoordinates() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }

  function checkAttacks(x, y) {
    for (let i = 0; i < attacks.length; i += 1) {
      if (attacks[i][0] === x && attacks[i][1] === y) {
        return false;
      }
    }
    return true;
  }

  function randomPlacement(x, y, orientation, length) {
    if (
      computer.checkPlacementLength(x, y, length) &&
      computer.checkPlacementFree(x, y, orientation, length)
    ) {
      computer.placeShip(x, y, orientation, length);
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

  function hasLost() {
    return computerShips.every((ship) => ship.isSunk() === 'sunk');
  }

  function attack(enemy) {
    let [x, y] = createCoordinates();
    while (true) {
      if (checkAttacks(x, y)) {
        attacks.push([x, y]);
        enemy.receiveAttack(x, y);
      } else {
        [x, y] = createCoordinates();
      }
    }
  }

  function receiveAttack(x, y) {
    computer.receiveAttack(x, y);
  }

  return {
    hasLost,
    attack,
    computerBoard,
    computerShips,
    generatePlacement,
    receiveAttack,
  };
}

export default createComputer;
