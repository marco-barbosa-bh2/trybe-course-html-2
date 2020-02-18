//Programa para identificar qual a peça do xadrez e seu movimento
let a="Pawn";


switch (a.toLowerCase()){
    case 'queen':
    console.log("Any number of vacant squares horizontally, vertically, or diagonally.");
    break;

    case 'king':
    console.log("One square horizontally, vertically, or diagonally.");
    break;

    case 'rook':
    console.log("Any number of vacant squares horizontally or vertically.");
    break;

    case 'bishop':
    console.log("Any number of vacant squares diagonally.");
    break;
    
    case 'knight':
    console.log("Moves to the nearest square not on the same rank, file, or diagonal (L pattern).");
    break;

    case 'pawn':
    console.log("A pawn moves straight forward one square, if that square is vacant. If it has not yet moved, a pawn also has the option of moving two squares straight forward, provided both squares are vacant. Pawns cannot move backwards. Pawns are the only pieces that capture differently from how they move. A pawn can capture an enemy piece on either of the two squares diagonally in front of the pawn (but cannot move to those squares if they are vacant).");
    break;

    default:
    console.log("Error");
}