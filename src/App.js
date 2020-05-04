import React from 'react';
import './App.css';
import Board from './components/board';
import Ships from './components/ships';
import createPlayer from './game/player';
import createComputer from './game/computer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player = createPlayer();
    this.computer = createComputer();
    this.state = {
      playerBoard: this.player.playerBoard,
      playerShips: [],
      computerBoard: [],
      computerShips: [],
    };
  }

  componentDidMount() {
    this.computer.generatePlacement();
    this.setState({
      computerBoard: this.computer.computerBoard,
      computerShips: this.computer.computerShips,
    });
  }

  handleNewBoard = () => {
    this.player.newBoard();
    this.player.generatePlacement();
    this.setState({
      playerBoard: this.player.playerBoard,
      playerShips: this.player.playerShips,
    });
  };

  handleAttack = (e) => {
    const x = e.target.dataset.x;
    const y = e.target.dataset.y;
    if (e.target.classList.contains('shipCell')) {
      e.target.classList.add('hitCell');
    }
    this.computer.receiveAttack(x, y);
    let [computerX, computerY] = this.computer.attack();
    this.player.receiveAttack(computerX, computerY);
    this.player.checkCell(computerX, computerY);
    this.setState({
      playerBoard: this.player.playerBoard,
      playerShips: this.player.playerShips,
      computerBoard: this.computer.computerBoard,
      computerShips: this.computer.computerShips,
    });
  };

  render() {
    return (
      <div className='mainArea'>
        <div>
          <Board item={this.state.playerBoard} boardType='playerBoard' />
          <div className='ships'>
            {this.state.playerShips.map((ship) => (
              <Ships
                key={ship.getLength()}
                id={ship.getLength()}
                className={ship.isSunk()}
              />
            ))}
          </div>
          <button onClick={this.handleNewBoard} type='button' id='newBoardBtn'>
            New Board
          </button>
        </div>
        <div>
          <Board
            item={this.state.computerBoard}
            handleAttack={this.handleAttack}
            boardType='computerBoard'
          />
          <div className='ships'>
            {this.state.computerShips.map((ship) => (
              <Ships
                key={ship.getLength()}
                id={ship.getLength()}
                className={ship.isSunk()}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
