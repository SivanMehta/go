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


// http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 function hashCode(str) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

function hashBoard({ pieces }) {
  return hashCode(JSON.stringify(pieces));
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

function place(board, row, col, player) {
  // resolve captures
  // check for any adjacent opposing pieces
  // isolate the boundaries of adjacent opposing pieces
  // see if the given row, col completes any of the boundaries
  // if so, remove the pieces inside that boundary
  // boundary is the (up, down, left, right) of each cell in a continuous area, excluding friendly pieces
  // "completes" any boundary means that the boundary is missing only one cell and the given (row, col) is in that missing cell


  board[row][col] = player;
  return board;
}

// adds a given piece to the board given the current state
// returns a new state
// will rearrange board for captures
// this will assume that canBePlaced has already been evaluated on the given setup
export function addToBoard(state, row, col) {
  state.pieces = place(state.pieces, row, col, state.player);
  const hash = hashBoard(state);
  state.hashes[hash] = true;
  return [state.hashes, state.pieces];
}

// check if a piece can be placed at a given location
export function canBePlaced(state, row, col) {
  if(state.over) return false;
  if(state.pieces[row][col]) return false;

  // check for liberties of given pieces
  const liberated = hasLiberties(state, row, col);
  if(!liberated) return false;

  let copy = JSON.parse(JSON.stringify(state.pieces));
  copy = place(copy, row, col, state.player);
  copy[row][col] = state.player;
  const hash = hashBoard({ pieces: copy });
  if(hash in state.hashes) return false;
  

  return true;

}
