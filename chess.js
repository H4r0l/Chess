document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const svgPaths = {
    king: "./assets/black_king.svg",
    queen: "./assets/black_queen.svg",
    bishop: "./assets/black_bishop.svg",
    knight: "./assets/black_knight.svg",
    rook: "./assets/black_rook.svg",
    pawn: "./assets/black_pawn.svg",
  };

  const chessboard = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
  ];

  const loadImage = (path) => {
    const img = new Image();
    img.src = path;
    return img;
  };

  const king = loadImage(svgPaths.king);

  king.onload = () => {
    drawChess();
  };

  const drawChess = () => {
    let rows = chessboard.length;
    let columns = chessboard[0].length;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        if (chessboard[row][col] == 1) {
          ctx.fillStyle = "#009D71";
          ctx.fillRect(col * 50, row * 50, 50, 50);
        }
      }
    }

    // Draw the king in the middle square
    const kingRow = 4;
    const kingCol = 7;

    const x = kingCol * 50;
    const y = kingRow * 50;

    ctx.drawImage(king, x, y, 50, 50);
  };
});
