import React from 'react';
import { useGame } from '../Context'
import { CELL_SIZE, SIZE } from '../constants';

export default function Pieces() {
  const [ state ] = useGame();

  const pieces = [];

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if(state.turns[i][j]) {
        const player = state.turns[i][j];
        pieces.push(
          <circle
            key={`piece ${i}-${j}`}
            className={`piece ${player}`}
            cx={j * CELL_SIZE + CELL_SIZE / 2}
            cy={i * CELL_SIZE + CELL_SIZE / 2}
            r={CELL_SIZE *.4} />
        );
      }
    }
  }

  return pieces;
}