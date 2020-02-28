import React from 'react';
import css from './board.module.css';

import Square from './square';

// Requires parent to pass in squares and click handler function reference
const Board  = props => {
    // Functions
    const renderSquare = i => (
        <Square
            value={props.squareValues[i]}
            onClick={() => props.onClick(i)}
        />
    );
    // UI
    return (
        <div>
            <div className={css.boardRow}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={css.boardRow}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={css.boardRow}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;
