import React from 'react';
import Cell from './cell';

const Row = (props) => {
  const { items, dataY, handleAttack, boardType } = props;
  const cells = items.map((item, i) => (
    <Cell
      item={item}
      key={i}
      dataX={i}
      dataY={dataY}
      handleAttack={handleAttack}
      boardType={boardType}
    />
  ));
  return <div className='row'>{cells}</div>;
};

export default Row;
