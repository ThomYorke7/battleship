import React from 'react';
import './App.css';
import Board from './components/board';
import Ships from './components/ships';
import Menu from './components/menu';
import createPlayer from './game/player';
import createComputer from './game/computer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player = createPlayer();
    this.computer = createComputer();
    this.state = {
      start: false,
      victory: false,
      boards: false,
      playerName: '',
      playerBoard: this.player.playerBoard,
      playerShips: [],
      computerName: '',
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

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleNewBoard = () => {
    this.player.newBoard();
    this.player.generatePlacement();
    this.setState({
      boards: true,
      playerBoard: this.player.playerBoard,
      playerShips: this.player.playerShips,
    });
  };

  handleStartGame = () => {
    this.setState({ start: true });
  };

  checkEndGame = () => {
    if (this.player.hasLost()) {
      this.setState({ victory: this.state.computerName });
    } else if (this.computer.hasLost()) {
      this.setState({ victory: this.state.playerName });
    }
  };

  handleAttack = (e) => {
    const x = e.target.dataset.x;
    const y = e.target.dataset.y;
    if (e.target.classList.contains('shipCell')) {
      e.target.classList.add('hitCell');
    }
    this.computer.receiveAttack(x, y);
    this.checkEndGame();
    let [computerX, computerY] = this.computer.attack();
    this.player.receiveAttack(computerX, computerY);
    this.player.checkCell(computerX, computerY);
    this.checkEndGame();
    this.setState({
      playerBoard: this.player.playerBoard,
      playerShips: this.player.playerShips,
      computerBoard: this.computer.computerBoard,
      computerShips: this.computer.computerShips,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 id='header'>Battleship</h1>
        {!this.state.start && (
          <Menu
            handleNewBoard={this.handleNewBoard}
            handleStartGame={this.handleStartGame}
            handleInput={this.handleInput}
            playerName={this.state.playerName}
            computerName={this.state.computerName}
            boards={this.state.boards}
          />
        )}
        {this.state.victory !== false && (
          <div className='endGame'>
            <h1>{this.state.victory} has won!</h1>
            <button
              type='button'
              id='newGameBtn'
              onClick={() => window.location.reload(false)}
            >
              New Game
            </button>
          </div>
        )}
        <div className='mainArea'>
          <div>
            <h2 className='names'>{this.state.playerName}</h2>
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
          </div>
          <div>
            <h2 className='names'>{this.state.computerName}</h2>
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
      </React.Fragment>
    );
  }
}

export default App;
