import { useEffect, useState } from 'react';

import './App.css';

const Square = ({ currPlayer, setCurrPlayer, i }) => {
  const [currState, setCurrState] = useState(undefined);

  const handleClick = () => {
    setCurrState(currPlayer)
    currPlayer === 'X' ? setCurrPlayer('O') : setCurrPlayer('X');
  };

  return (
    <div key={`square${i}`} className='square' onClick={handleClick}>{currState}</div>
  );
};

function App() {
  const [currPlayer, setCurrPlayer] = useState('X');
  const [status, setStatus] = useState('Next player: X');

  useEffect(() => {
    setStatus(`Next player: ${currPlayer}`)
  }, [currPlayer])

  const generateSquares = () => {
    let squareArr = [];
    for (let i = 1; i <= 9; i++) {
      squareArr.push(<Square i={i} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} />)
    }
    return squareArr;
  };

  const handleReset = () => {
    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
      setCurrPlayer('X');
    }
  }

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
