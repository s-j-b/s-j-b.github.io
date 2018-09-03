import React, { Component } from 'react';

////////////////////////////////////////////////////////////////////////////////
function Square(props) {
  return (
      <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  renderSquare(i) {
    return (
        <Square
      value = {this.props.squares[i]}
      onClick = {() => this.props.onClick(i)}
        />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepNumber: 0,
      history: [{
        squares: Array(9).fill(null),
      }],
      xNext: true,
    }
  }

  handleClick(i) {
    console.log("IN HANDLE STEP", this.state.stepNumber);    
    console.log("IN HANDLE CLICK--OLD", this.state.history);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    console.log("IN HANDLE CLICK--OLD", history);    
    const current = history[history.length - 1];

    const newSquares = current.squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = this.state.xNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{squares: newSquares}]),
      stepNumber: history.length,
      xNext: !this.state.xNext,
    });
  }

  jumpTo(step) {
    const len = this.state.history.length;
    console.log("JUMP TO: ", step, "length: ", len);
    console.log("HISTORY OLD: ", this.state.history);
    this.setState({
      stepNumber: step,
      xNext: (step % 2) === 0,
    });
    console.log("STUPDATE: ", step, this.state.stepNumber);
    console.log("HISTORY NEW: ", this.state.history);
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
            'Go to move #' + move :
            'Go to game start';
      return (
          <li key = {move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
      );
    });
    
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      console.log(status);
    } else {
      status = 'Next player: ' + (this.state.xNext ? 'X' : 'O');
      console.log(status);
    }
    console.log("MOVES: ", moves);
    return (
      <div className="game">
        <div className="game-board">
        <Board
      squares = {current.squares}
      onClick = {(i) => this.handleClick(i)}
        />
        </div>
        <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
        </div>
        </div>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
