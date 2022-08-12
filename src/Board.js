import React from 'react';
import { SIZE, CELL_SIZE } from './constants';

export default function Board() {
  const cells = [];
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      cells.push(
        <rect
          className='cell'
          key={`cell ${i}-${j}`}
          x={j * CELL_SIZE + 1}
          y={i * CELL_SIZE + 1}
          width={CELL_SIZE}
          height={CELL_SIZE} />);
    }
  }

  return cells;
}