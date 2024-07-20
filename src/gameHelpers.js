export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            // Check that we're on a tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                    // Check that our move is inside the game area height (y)
                    // Tetromino shouldn't leave from the bottom
                    !stage[y + player.pos.y + moveY] ||

                    // Check that the move is inside the game area width
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||

                    // Check that the cell isn't set to clear
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
    return false;
};