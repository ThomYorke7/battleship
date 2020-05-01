import shipFactory from './shipFactory';

const boardFactory = () => {
  const boardGameDimension = 10;
  const arr = [];
  for (let i = 0; i < boardGameDimension; i += 1) {
    arr.push([]);
    for (let j = 0; j < boardGameDimension; j += 1) {
      arr[i].push('');
    }
  }
  return arr;
};

const gameBoard = () => {
  const board = boardFactory();
  const ships = [];

  const checkPlacementLength = (x, y, length) => {
    if (x + length <= 10 && y + length <= 10) {
      return true;
    }
    return false;
  };

  const checkPlacementFree = (x, y, orientation, length) => {
    if (orientation) {
      for (let i = 0; i < length; i += 1) {
        if (board[y][x + i] !== '') {
          return false;
        }
      }
    } else if (!orientation) {
      for (let i = 0; i < length; i += 1) {
        if (board[y + i][x] !== '') {
          return false;
        }
      }
    }
    return true;
  };

  const placeShip = (x, y, orientation, length) => {
    ships.push(shipFactory(length));
    if (orientation) {
      for (let i = 0; i < length; i += 1) {
        board[y].splice(x + i, 1, length);
      }
    } else if (!orientation) {
      for (let i = 0; i < length; i += 1) {
        board[y + i].splice(x, 1, length);
      }
    }
  };

  const receiveAttack = (x, y) => {
    const spot = board[y][x];
    if (spot !== '' && spot !== 'X') {
      const ship = ships.find((s) => s.getLength() === spot);
      ship.isHit();
    } else if (spot === '') {
      board[y].splice(x, 1, 'X');
    }
  };

  return {
    placeShip,
    board,
    checkPlacementLength,
    checkPlacementFree,
    receiveAttack,
    ships,
  };
};

export { boardFactory, gameBoard };
