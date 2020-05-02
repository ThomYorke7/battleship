import React from 'react';

const Cell = (props) => {
  const { dataX, dataY, handleAttack, item, boardType } = props;

  return (
    <button
      className={`cell ${
        boardType === 'playerBoard' ? `playerCell${item}` : ''
      } ${
        boardType === 'computerBoard' && typeof item === 'number'
          ? 'shipCell'
          : item
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

// className={`cell ${item !== '' && item !== 'X' ? 'shipCell' : ''} ${
//   item === 'X' ? 'missedCell' : ''
// } ${boardType === 'playerBoard' ? item : ''}`}
