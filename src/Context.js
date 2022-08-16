import React from 'react';
import { SIZE } from './constants';
import { createContext, useState, useContext }  from 'react';

let pieces = new Array(SIZE);
for (let i = 0; i < SIZE; i++) {
  pieces[i] = new Array(SIZE);
}

const baseGame = {
  player: 'black', // which player is playing
  passed: false, // whether or not the previous player passed
  over: false, // if the game is over (indicates when the score needs to be calculated)
  hashes: {}, // the hashes of previous boards, do avoid ko
  pieces, // pieces placed on the board
}

const Game = createContext(baseGame);
export const useGame = () => useContext(Game);

export default function Wrapper({ children }) {
  const [ state, set ] = useState(baseGame);

  function setState(change) {
    set({ ...state, ...change });
  }

  return (
    <Game.Provider value={[state, setState]}>
      {children}
    </Game.Provider>
  )
}