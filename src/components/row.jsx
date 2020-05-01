import React from 'react';
import Cell from './cell';

const Row = (props) => {
  const cells = props.item.map((item, i) => (
    <Cell
      item={item}
      key={i}
      dataX={i}
      dataY={props.dataY}
      handleAttack={props.handleAttack}
    />
  ));
  return <div className='row'>{cells}</div>;
};

export default Row;
