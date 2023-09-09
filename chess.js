document.addEventListener('DOMContentLoaded', () => {
    const canva = document.getElementById("canvas");
    var ctx = canva.getContext("2d");

    var chessboard = [
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
    ];

    const drawChess = () => {
      let rows = chessboard.length;
      let columns = chessboard[0].length;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          if (chessboard[i][j] == 1) {
            ctx.fillStyle = "black";
            ctx.fillRect(j * 50, i * 50, 50, 50);
          }
        }
      }
    };
    drawChess();
    
})