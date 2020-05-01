import React from 'react';
import './App.css';
import Board from './components/board';
import { createPlayer, createComputer } from './game/player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playerBoard: [], computerBoard: [] };
  }

  componentDidMount() {
    const computer = createComputer();
    const player = createPlayer();
    this.setState({
      playerBoard: player.playerBoard,
      computerBoard: computer.computerBoard,
    });
  }

  render() {
    return (
      <div className='gameBoards'>
        <Board item={this.state.playerBoard} />
        <Board item={this.state.computerBoard} />
      </div>
    );
  }
}

export default App;
