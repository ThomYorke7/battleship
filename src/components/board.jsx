import React from 'react';
import BoardFrame from './boardFrame';
import Row from './row';

const Board = (props) => {
  const { item, boardType, handleAttack } = props;
  const boards = item.map((board, i) => (
    <Row
      items={board}
      key={i}
      dataY={i}
      handleAttack={handleAttack}
      boardType={boardType}
    />
  ));
  return (
    <div className='gameBoards'>
      <BoardFrame />
      <div className='board' id={boardType}>
        {boards}
      </div>
    </div>
  );
};

export default Board;
