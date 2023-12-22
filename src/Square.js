import { useState } from 'react';


const Square = ({currPlayer, setCurrPlayer}) => {
    const [currState, setCurrState] = useState('');

    const handleClick = () => {
        if(currPlayer === 'X'){ setCurrPlayer('O'); }
        else if(currPlayer === '0') {setCurrPlayer('X');}
        switch(currState) {
            case '': 
                setCurrState('X');
                break;
            case 'X':
                setCurrState('O');
                break;
            case 'O':
                setCurrState('');
                break;
            default: break;
        }
    };

    return(
        <div className='square' onClick={handleClick}>{currState}</div>
    );
};

export default Square;