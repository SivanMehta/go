export const SIZE = 8;
export const CELL_SIZE = 50;

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

function hashBoard({ pieces }) {
  return btoa(JSON.stringify(pieces));
}

// adds a given piece to the board given the current state
// returns a new state
// will rearrange board for captures
// this will assume that canBePlaced has already been evaluated on the given setup
export function addToBoard(state, row, col) {
  state.pieces[row][col] = state.player;
  const hash = hashBoard(state);
  state.hashes[hash] = true;
  return [state.hashes, state.pieces];
}

const directions = [
  [0, 1], // right
  [0, -1], // left
  [1, 0], // down
  [-1, 0], // up
];

// a spot has liberties if it is adjacent to an empty square or a friendly piece
function hasLiberties(state, row, col) {
  for(let i = 0; i < directions.length; i ++) {
    // looking at ourselves
    const [ dx, dy ] = directions[i];
    if(dx === 0 && dy === 0) continue;
    const r = row + dy;
    const c = col + dx;
    // if the spot is out of bounds, we don't care
    if(r < 0 || r >= SIZE || c < 0 || c >= SIZE) {
      continue;
    }

    // if the spot is empty, we have a liberty
    if(!state.pieces[r][c]) {
      return true;
    }
    
    // if the spot is friendly, we have a liberty
    if(state.pieces[r][c] === state.player) {
      return true;
    }
  }
  return false;
}

// check if a piece can be placed at a given location
export function canBePlaced(state, row, col) {
  if(state.over) return false;
  if(state.pieces[row][col]) return false;

  // check for liberties of given pieces
  const liberated = hasLiberties(state, row, col);
  if(!liberated) return false;

  const copy = JSON.parse(JSON.stringify(state.pieces));
  copy[row][col] = state.player;
  const hash = hashBoard({ pieces: copy });
  if(hash in state.hashes) return false;
  

  return true;
}