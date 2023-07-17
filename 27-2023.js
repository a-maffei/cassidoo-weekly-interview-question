/* Given an integer n, return true if it's a perfect square AND when reversed, is still a perfect square. */

function reversedSquares(number) {
  function isSquareRoot(n) {
    return Number.isInteger(Math.sqrt(n));
  }

  const reversed = parseInt(number.toString().split("").reverse().join(""));

  return isSquareRoot(number) && isSquareRoot(reversed);
}

reversedSquares(9);
reversedSquares(441);
reversedSquares(25);
