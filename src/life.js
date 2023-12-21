function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const createBoard = (rows, cols) => {
    let arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

export const updateBoard = (board) => {
    let newBoard = createBoard(board.length, board[0].length);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            // Check number of live neighbors
            let liveNeighbors = checkNeighbors(board, i, j);
            let alive = board[i][j] === 1;
            
            // TODO: Optimize rules
            // Apply rules of Life:
            
            // Cell dies from underpopulation
            if (alive && liveNeighbors < 2) {
                newBoard[i][j] = 0;
                continue;
            }

            // Cell lives on
            if (alive && liveNeighbors < 4) {
                newBoard[i][j] = 1;
                continue;
            }

            // Cell dies from overpoulation
            if (alive && liveNeighbors > 3) {
                newBoard[i][j] = 0;
                continue;
            }

            // Cell is born
            if (!alive && liveNeighbors === 3) {
                newBoard[i][j] = 1;
            }
        }
    }
    return newBoard;
}

const checkNeighbors = (board, row, col) => {
    var sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            var nRow = i+row;
            var nCol = j+col;

            // Check that cell is in bounds
            if ((nRow >= 0 && nRow < board.length) && (nCol >= 0 && nCol < board.length)) {
                sum += board[nRow][nCol];
            }
        }
    }
    sum -= board[row][col];
    return sum;
}

async function run() {
    let board = createBoard(20,20)
    board[1][1] = 1;
    board[1][2] = 1;
    board[2][1] = 1;
    board[3][4] = 1;
    board[4][3] = 1;
    board[4][4] = 1;

    // Blinker
    board[15][1] = 1;
    board[15][2] = 1;
    board[15][3] = 1;
    
    board[1][19] = 1;
    board[2][19] = 1;
    board[3][19] = 1;

    while(true) {
        console.table(board);
        board = updateBoard(board);
        await sleep(1000);
    }
}

run();


