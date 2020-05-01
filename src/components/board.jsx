import React from 'react';
import Row from './row';

const Board = (props) => {
  const boards = props.item.map((board, i) => <Row item={board} key={i} />);
  return <div className='board'>{boards}</div>;
};

export default Board;
