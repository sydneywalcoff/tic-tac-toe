import { useState } from 'react';


const Square = ({ currPlayer, setCurrPlayer, i }) => {
    const [currState, setCurrState] = useState('');

    const handleClick = () => {
        setCurrState(currPlayer)
        currPlayer === 'X' ? setCurrPlayer('O') : setCurrPlayer('X');
    };

    return (
        <div key={`square${i}`} className='square' onClick={handleClick}>{currState}</div>
    );
};

export default Square;