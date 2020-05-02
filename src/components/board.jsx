import React from 'react';
import BoardFrame from './boardFrame';
import Row from './row';

const Board = (props) => {
  const { item, id, handleAttack } = props;
  const boards = item.map((board, i) => (
    <Row item={board} key={i} dataY={i} handleAttack={handleAttack} />
  ));
  return (
    <div className='gameBoards'>
      <BoardFrame />
      <div className='board' id={id}>
        {boards}
      </div>
    </div>
  );
};

export default Board;
