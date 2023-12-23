import { useEffect, useState } from 'react';

import './App.css';

const Square = ({ clickFn, i, val, gameOver }) => {
  return (
    <div key={`square${i}`} className={`square ${gameOver ? 'disabled' : ''}`} onClick={() => clickFn(i)}>{val}</div>
  );
};

function App() {
  const [currPlayer, setCurrPlayer] = useState('X');
  const [status, setStatus] = useState(`Next player: ${currPlayer}`);
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    let newStatus = gameOver ? `Winner: ${currPlayer}`: `Next player: ${currPlayer}`;
    setStatus(newStatus);
  }, [currPlayer, gameOver])

  const handleReset = () => {
    let squares = document.querySelectorAll('.square');
    setCurrPlayer('X');
    setGameOver(false);

    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
    }
  }

  const handleClick = (i) => {
    let squares = document.querySelectorAll('.square');
    squares[i].textContent = currPlayer;
    let updatedPlayer = currPlayer === 'X' ? 'O' : 'X';
    let isWinner = calculateWinner();
    !isWinner && setCurrPlayer(updatedPlayer);
  };

  const calculateWinner = () => {
    let wins = [
      [1, 1, 1, 0, 0, 0, 0, 0, 0], // row 1
      [0, 0, 0, 1, 1, 1, 0, 0, 0], // row 2
      [0, 0, 0, 0, 0, 0, 1, 1, 1], // row 3
      [1, 0, 0, 1, 0, 0, 1, 0, 0], // column 1
      [0, 1, 0, 0, 1, 0, 0, 1, 0], // column 2
      [0, 0, 1, 0, 0, 1, 0, 0, 1], // column 3
      [1, 0, 0, 0, 1, 0, 0, 0, 1], // diagonal 1
      [0, 0, 1, 0, 1, 0, 1, 0, 0], // diagonal 1
    ];
    let squares = document.querySelectorAll('.square');
    let squareVals = [];
    for (let i = 0; i < squares.length; i++) {
      let val = squares[i].textContent === currPlayer ? 1 : 0;
      squareVals.push(val);
    }
    let i =0, j=0;
    while(j <= 8 && i <= 8) {
      if(wins[i][j] === squareVals[j]) {
        j++
      } else {
        i++;
        j = 0;
        if(i === 8) return false;
      }
    }
    setGameOver(true);
    return true;
  }

  const generateSquares = () => {
    let squareArr = [];
    for (let i = 0; i < 9; i++) {
      squareArr.push(<Square i={i} clickFn={handleClick} val="" gameOver={gameOver}/>)
    }
    return squareArr;
  };


  return (
    <div className="App">
      <div className="content">
        <div className="status">{status}</div>
        <div className="grid">
          {generateSquares()}
        </div>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
