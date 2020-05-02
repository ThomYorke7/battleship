import React from 'react';

const Cell = (props) => {
  const { dataX, dataY, handleAttack, item } = props;
  return (
    <button
      className={`cell ${item !== '' && item !== 'X' ? 'shipCell' : ''} ${
        item === 'X' ? 'missedCell' : ''
      }`}
      type='button'
      tabIndex={0}
      data-x={dataX}
      data-y={dataY}
      onClick={(e) => handleAttack(e)}
    >
      {item}
    </button>
  );
};

export default Cell;
