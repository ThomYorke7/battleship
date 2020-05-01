import { gameBoard } from './gameBoard';

function createPlayer() {
  const player = gameBoard();
  const playerBoard = player.getBoard();

  function hasLost() {
    return player.ships.every((ship) => ship.isSunk());
  }

  function attack(x, y, enemy) {
    enemy.receiveAttack(x, y);
  }
  return { hasLost, attack, playerBoard };
}

function createComputer() {
  const computer = gameBoard();
  const computerBoard = computer.getBoard();
  const attacks = [];

  function createCoordinates() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    for (let i = 0; i < attacks.length; i += 1) {
      if (attacks[i][0] === x && attacks[i][1] === y) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
    }
    attacks.push([x, y]);
    return [x, y];
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

  function hasLost() {
    return computer.ships.every((ship) => ship.isSunk());
  }

  function attack(enemy) {
    const coordinates = createCoordinates();
    enemy.receiveAttack(coordinates[0], coordinates[1]);
  }
  return { hasLost, attack, computerBoard };
}

export { createPlayer, createComputer };
