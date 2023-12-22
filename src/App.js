import { useEffect, useState } from 'react';

import './App.css';

const Square = ({ clickFn, i, val }) => {
  return (
    <div key={`square${i}`} className='square' onClick={() => clickFn(i)}>{val}</div>
  );
};

function App() {
  const [currPlayer, setCurrPlayer] = useState('X');
  const [status, setStatus] = useState('Next player: X');

  useEffect(() => {
    setStatus(`Next player: ${currPlayer}`)
  }, [currPlayer])

  const handleReset = () => {
    let squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
      setCurrPlayer('X');
    }
  }

  const handleClick = (i) => {
    let squares = document.querySelectorAll('.square');
    squares[i].textContent = currPlayer;
    let updatedPlayer = currPlayer === 'X' ? 'O' : 'X';
    setCurrPlayer(updatedPlayer);
  };

  const generateSquares = () => {
    let squareArr = [];
    for (let i = 0; i < 9; i++) {
      squareArr.push(<Square i={i} clickFn={handleClick} val="" />)
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
