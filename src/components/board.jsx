import React from 'react';
import BoardFrame from './boardFrame';
import Row from './row';

const Board = (props) => {
  const boards = props.item.map((board, i) => (
    <Row item={board} key={i} dataY={i} handleAttack={props.handleAttack} />
  ));
  return (
    <div className='gameBoards'>
      <BoardFrame />
      <div className='board'>{boards}</div>
    </div>
  );
};

export default Board;
