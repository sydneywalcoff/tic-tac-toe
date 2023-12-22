import { useEffect, useState } from 'react';

import Square from './Square';

import './App.css';

function App() {
  const [currPlayer, setCurrPlayer] = useState('X');
  const [status, setStatus] = useState('Next player: X');

  useEffect(() => {
    setStatus(`Next player: ${currPlayer}`)
  }, [currPlayer])

  const generateSquares = () => {
    let squareArr = [];
    for (let i = 1; i <= 9; i++) {
      squareArr.push(<Square i={i} currPlayer={currPlayer} setCurrPlayer={setCurrPlayer}/>)
    }
    return squareArr;
  };

  const handleReset = () => {
    let squares = document.querySelectorAll('.square');
    for(let i =0; i < squares.length; i++) {
      squares[i].textContent = '';
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
