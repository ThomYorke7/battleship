import React from 'react';
import './App.css';
import Board from './components/board';
import createPlayer from './game/player';
import createComputer from './game/computer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player = createPlayer();
    this.state = { playerBoard: this.player.playerBoard, computerBoard: [] };
  }

  componentDidMount() {
    const computer = createComputer();
    computer.generatePlacement();
    //const player = createPlayer();
    //this.player.generatePlacement();
    this.setState({
      //playerBoard: this.player.playerBoard,
      computerBoard: computer.computerBoard,
    });
  }

  handleNewBoard = () => {
    this.player.newBoard();
    this.player.generatePlacement();
    this.setState({
      playerBoard: this.player.playerBoard,
    });
  };

  handleAttack = (e) => {
    console.log(e.target);
  };

  render() {
    return (
      <div className='mainArea'>
        <div>
          <Board item={this.state.playerBoard} id='playerBoard' />
          <button onClick={this.handleNewBoard} type='button' id='newBoardBtn'>
            New Board
          </button>
        </div>
        <Board
          item={this.state.computerBoard}
          handleAttack={this.handleAttack}
        />
      </div>
    );
  }
}

export default App;
