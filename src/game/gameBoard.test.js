import { boardFactory, gameBoard } from './gameBoard';

test('it returns a 10x array', () => {
  const array = boardFactory();
  expect(array.length).toBe(10);
  expect(array[0].length).toBe(10);
});

describe('checks placement functionality', () => {});
test('places ship horizontally', () => {
  const game = gameBoard();
  game.placeShip(2, 3, true, 4);
  expect(game.getBoard()[3]).toStrictEqual([
    '',
    '',
    4,
    4,
    4,
    4,
    '',
    '',
    '',
    '',
  ]);
});

test('places ship vertically', () => {
  const game = gameBoard();
  game.placeShip(2, 3, false, 4);
  expect(game.getBoard()[3][2]).toBe(4);
  expect(game.getBoard()[4][2]).toBe(4);
  expect(game.getBoard()[5][2]).toBe(4);
  expect(game.getBoard()[6][2]).toBe(4);
});

test('allows placement', () => {
  const game = gameBoard();
  expect(game.checkPlacementLength(3, 6, 4)).toBe(true);
  expect(game.checkPlacementLength(3, 7, 4)).toBe(false);
  expect(game.checkPlacementLength(3, 3, 9)).toBe(false);
  expect(game.checkPlacementLength(8, 2, 4)).toBe(false);
});

test('checks if spots are free', () => {
  const game = gameBoard();
  game.placeShip(2, 3, false, 4);
  expect(game.checkPlacementFree(0, 4, true, 4)).toBe(false);
  expect(game.checkPlacementFree(0, 7, true, 4)).toBe(true);
  expect(game.checkPlacementFree(2, 0, false, 4)).toBe(false);
});

test('inserts ship in array', () => {
  const game = gameBoard();
  game.placeShip(2, 3, false, 4);
  expect(game.ships[0].getLength()).toBe(4);
});

test('assigns attack properly', () => {
  const game = gameBoard();
  game.placeShip(2, 3, true, 4);
  game.receiveAttack(2, 3);
  game.receiveAttack(5, 3);
  expect(game.ships[0].hitValue()).toBe(2);
});

test('assigns missed attack properly', () => {
  const game = gameBoard();
  game.placeShip(2, 3, false, 4);
  game.receiveAttack(4, 3);
  expect(game.getBoard()[3][4]).toBe('X');
});
