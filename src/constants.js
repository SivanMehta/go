export const SIZE = 5;
export const CELL_SIZE = 50;


// check if a piece can be placed at a given location
export function canBePlaced(state, row, col) {
  if(state.over) return false;
  if(state.turns[row][col]) return false;

  // TODO: check for liberties and/or ko

  return true;
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