import React, {useState} from 'react';
import './game.css';

import Board from './board';

const Game = () => {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
    }]);
    const [moveNumber, setMoveNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const calculateWinner = squares => {
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
    const handleClick = i => {
        const newHistory = history.slice(0, moveNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(newHistory.concat([{ 
            squares: squares,
        }]));
        setMoveNumber(newHistory.length);
        setXIsNext(!xIsNext);
    }
    const jumpTo = move => {
        setMoveNumber(move);
        setXIsNext((move % 2) === 0);
    }
    const current = history[moveNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((h, index) => {
        const desc = index ?
            'Go to move #' + index :
            'Go to game start';
        return (
            <li key={index}>
                <button onClick={() => jumpTo(index)}>{desc}</button>
            </li>
        );
    });
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
        <div className="game">
            <div>
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;
