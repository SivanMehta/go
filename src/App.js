import React from 'react';
import { SIZE, CELL_SIZE } from './constants';
import Context from './Context';

import {
  Board,
  Pieces,
  Stats,
  Buttons
} from './components';

export default function App() {
  const dimension = SIZE * CELL_SIZE + 2;
  return (
    <Context>
      <svg viewBox={`0 0 ${dimension} ${dimension}`}>
        <Board />
        <Pieces />
      </svg>
      <Buttons />
      <Stats />
    </Context>
  );
}