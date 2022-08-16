export const SIZE = 5;
export const CELL_SIZE = 50;

// memoize the falsey values of canPlace because pieces
// cannot be un-placed, so it will always be illegal to go there
const seen = {};

// check if a piece can be placed at a given location
export function canBePlaced(state, row, col) {
  if(state.over) return false;
  if([row, col] in seen) return false;
  let placed = false;
  for(let i = 0; i < state.turns.length; i++) {
    if(state.turns[i].row === row && state.turns[i].col === col) {
      placed = true;
      break;
    }
  }

  if(placed) {
    seen[[row, col]] = true;
  }

  return !placed;
}

export function toggleTurn(color) {
  if(color === 'black') {
    return 'white';
  } else {
    return 'black';
  }
}

// given the state of the go board, calculate the score
export function calculateScore({ state }) {
  // empty squares
  // calculate the number of stones

  return { black: 5, white: 5 };
}

// adds a given piece to the board given the current state
// returns a new state
// will rearrange board for captures
// this will assume that canBePlaced has already been evaluated on the given setup
export function addToBoard(state, row, col) {
  state.turns[row][col] = state.player;
  return state.turns;
}