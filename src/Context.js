import React from 'react';
import { SIZE } from './constants';
import { createContext, useState, useContext }  from 'react';

let turns = new Array(SIZE);
for (let i = 0; i < SIZE; i++) {
  turns[i] = new Array(SIZE);
}

const baseGame = {
  player: 'black',
  passed: false,
  over: false,
  turns,
}

const Game = createContext(baseGame);
export const useGame = () => useContext(Game);

export default function Wrapper({ children }) {
  const [ state, set ] = useState(baseGame);

  function setState(change) {
    set({ ...state, ...change });
  }

  console.log(state);

  return (
    <Game.Provider value={[state, setState]}>
      {children}
    </Game.Provider>
  )
}