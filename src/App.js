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

  return (
    <div className="App">
      <div className="content">  
        <div className="status">{status}</div>
        <div className="grid">
          {generateSquares()}
        </div>
      </div>
    </div>
  );
}

export default App;
