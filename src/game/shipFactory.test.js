import shipFactory from './shipFactory';

test('it returns length', () => {
  const ship = shipFactory(3);
  const ship2 = shipFactory(5);
  expect(ship.getLength()).toBe(3);
  expect(ship2.getLength()).toBe(5);
});

test('it returns sunk', () => {
  const ship = shipFactory(1);
  ship.isHit();
  expect(ship.isSunk()).toBe(true);
  expect(ship.hitValue()).toBe(1);
  const ship2 = shipFactory(5);
  ship2.isHit();
  ship2.isHit();
  expect(ship2.hitValue()).toBe(2);
  expect(ship2.isSunk()).toBe(false);
});
