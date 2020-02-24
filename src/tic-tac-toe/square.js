/* eslint-disable react/prop-types */
import React from 'react';
import './square.css';

export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick /* When the square is clicked, pass its key up to the parent */ }>
            {props.value}
        </button>
    );
}

