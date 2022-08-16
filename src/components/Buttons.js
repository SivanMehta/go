import React from 'react';
import { useGame } from '../Context';
import { toggleTurn } from '../constants';

export default function Buttons() {
  const [ state, setState ] = useGame();

  function onClick() {
    setState({
      player: toggleTurn(state.player),
      passed: true,
      over: state.passed
    });
  }

  return (
    <div>
      <button onClick={onClick}>Pass</button>
    </div>
  );
}