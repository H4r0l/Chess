document.addEventListener('DOMContentLoaded', () => {
    const canva = document.getElementById("canvas");
  var ctx = canva.getContext("2d");
  
  const svgking = "./assets/black_king.svg"
  const svgqueen = "./assets/black_queen.svg"
  const svgbishop = "./assets/black_bishop.svg"
  const svgknight = "./assets/black_knight.svg"
  const svgrook = "./assets/black_rook.svg"
  const svgpawn = "./assets/black_pawn.svg"

    var isGameOver = false
    let whiteTurn = false
    let blackTurn = false

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
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          if (chessboard[row][col] == 1) {
            ctx.fillStyle = "black";
            ctx.fillRect(col * 50, row * 50, 50, 50);
          }
          if (chessboard[row] == 4 && chessboard[col] == 8) {
            
          }

        }
      }

    };
  //Mientras que la partida no haya terminado 
  while (isGameOver == false) {
    drawChess();
    if (whiteTurn) {
      
    }
  }
})