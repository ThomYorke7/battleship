import React from 'react';

const Menu = (props) => {
  return (
    <div className='menu'>
      <label htmlFor='player-name'>
        Player Name
        <input
          type='text'
          placeholder='Player Name'
          id='player-name'
          name='player-name'
        />
      </label>
      <label htmlFor='computer-name'>
        Computer Name
        <input
          type='text'
          placeholder='Computer Name'
          id='computer-name'
          name='computer-name'
        />
      </label>
      <button
        onClick={() => {
          props.handleNewBoard();
        }}
        type='button'
        id='newBoardBtn'
      >
        New Board
      </button>
      <button
        type='button'
        id='startGameBtn'
        onClick={() => props.handleStartGame()}
      >
        Start Game
      </button>
    </div>
  );
};

export default Menu;
