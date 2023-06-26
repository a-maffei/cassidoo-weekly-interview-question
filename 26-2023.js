/* Write a function that takes an array of consecutive, increasing letters as input, and returns any missing letters in the array between the first and last letter.

> missingLetters(['a','b','c','d','f'])
> ['e']

> missingLetters(['a','b','c','d','e','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'])
> ['f','g','v']

Initial approach =   /* const alphabet = Array(26)
    .fill(0)
    .map((_, index) => String.fromCharCode(index + 65 + 32));

  const indexLastLetter = alphabet.indexOf(letters[letters.length - 1]);

  const comparableAlphabet = alphabet.slice(0, indexLastLetter + 1); 
 */

function missingLetters(letters) {
  // We find unicode of first and last letter of the input
  // We create an array that includes the entire alphabet up until the last letter of the input
  // We filter that array by looking up inside the input and checking if the current element is included there
  // In order to look up and save up time, we create a set from the input, so we don't have to loop through the input at every step of the filter method
  const start = letters[0].charCodeAt(0);
  const end = letters[letters.length - 1].charCodeAt(0);

  const alphabet = Array.from({ length: end - start + 1 }, (_, index) =>
    String.fromCharCode(start + index)
  );

  const lettersSet = new Set(letters);

  return alphabet.filter((letter) => !lettersSet.has(letter));
}
