import React from 'react';

const Cell = (props) => {
  const { dataX, dataY, handleAttack, item } = props;
  return (
    <button
      className='cell'
      type='button'
      tabIndex={0}
      data-x={dataX}
      data-y={dataY}
      onClick={(e) => handleAttack(e)}
    >
      {item !== 'X' ? null : item}
    </button>
  );
};

export default Cell;

// fare in modo che se textcontent è diverso da 1,2,3,4,5, non viene mostrato.
// fare in modo che se l'evento avviene in un button con textcontent 1,2,3,4,5, lo sfondo diventa rosso
