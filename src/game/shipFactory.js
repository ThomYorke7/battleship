const shipFactory = (length) => {
  let hit = 0;
  let sunk = false;
  const getLength = () => length;
  const isHit = () => {
    hit += 1;
    if (length - hit === 0) {
      sunk = true;
    }
  };

  const hitValue = () => {
    return hit;
  };
  const isSunk = () => {
    return sunk;
  };

  return { getLength, isHit, isSunk, hitValue };
};

export default shipFactory;
