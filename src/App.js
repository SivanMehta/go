import React from 'react';
import { SIZE, CELL_SIZE } from './constants';

import Board from './Board';
import Pieces from './Pieces';

function Stats () {
  return null;
}

function App() {
  const dimension = SIZE * CELL_SIZE + 2;
  return (
    <svg viewBox={`0 0 ${dimension} ${dimension}`}>
      <Board/>
      <Pieces />
      <Stats />
    </svg>
  );
}


export default App;
