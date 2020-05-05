import React from 'react';

const Menu = (props) => {
  const {
    playerName,
    computerName,
    handleInput,
    handleNewBoard,
    handleStartGame,
    boards,
  } = props;
  return (
    <div className='menu'>
      <label htmlFor='player-name'>
        Player Name
        <input
          type='text'
          placeholder='Player Name'
          id='player-name'
          name='playerName'
          value={playerName}
          onChange={(e) => handleInput(e)}
        />
      </label>
      <label htmlFor='computer-name'>
        Computer Name
        <input
          type='text'
          placeholder='Computer Name'
          id='computer-name'
          name='computerName'
          value={computerName}
          onChange={(e) => handleInput(e)}
        />
      </label>
      <button
        onClick={() => {
          handleNewBoard();
        }}
        type='button'
        id='newBoardBtn'
      >
        New Board
      </button>
      {boards && (
        <button
          type='button'
          id='startGameBtn'
          onClick={() => handleStartGame()}
        >
          Start Game
        </button>
      )}
    </div>
  );
};

export default Menu;
