import React from 'react';
import { SIZE, CELL_SIZE, canBePlaced, toggleTurn, addToBoard } from '../constants';
import { useGame } from '../Context'

export default function Board() {
  const [state, setState] = useGame();

  const cells = [];
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      function onClick() {
        if(canBePlaced(state, i, j)) {
          const [ hashes, pieces ] = addToBoard(state, i, j);
          setState({
            hashes,
            pieces,
            player: toggleTurn(state.player),
            passed: false
          });
        }
      }

      cells.push(
        <rect
          onClick={onClick}
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