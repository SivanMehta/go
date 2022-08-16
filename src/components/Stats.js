import React from 'react';
import { useGame } from '../Context';
import { calculateScore } from '../constants';

function formatPlayer({ player }) {
  return (
    <div>
      Current Player: {player.toUpperCase()}
    </div>
  )
}

function formatScore(state) {
  const score = calculateScore(state);
  return (
    <div>
      Final Score:
      <p>Black: {score.black}</p>
      <p>White: {score.white}</p>
    </div>
  )
}

export default function Stats () {
  const [ state ] = useGame();
  let message;
  if(state.over) {
    message = formatScore(state);
  } else {
    message = formatPlayer(state)
  }

  return (
    <div>
      { message }
      <pre>{ JSON.stringify(state, null, 2) }</pre>
    </div>
  );
}