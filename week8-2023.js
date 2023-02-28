/* This week’s question:
Given a string of parenthesis, return the number of parenthesis you need to add to the string in order for it to be balanced. */

/* Solution 1: my own */

function numBalanced(s) {
    const a = s.split("");
    let n = 0;
    for (let i = 0; i < a.length; i++) {
      const curr = a[i];
      curr === "(" ?
        n++ : n--
    }
    return Math.abs(n);
  }

  /* Solution 2: most efficient and clever
  
  Best practices:
  1) Use spread operator to convert string into array
  2) Instead of a for loop, use the reduce method to add (if the current array item is "(") or remove (in case of ")") 1 to the accumulator
  3) Use Math.abs to turn the result into an absolute number
  */

  function numBalanced(s) {
    return Math.abs([...s].reduce((acc, curr) => acc + (curr === ")" ? 1 : -1), 0))
  }

  /* Solution 3: least desirable
  
  function numBalanced(s) {
  const a = s.split("");
  let n = 0;
  for (let i = 0; i < a.length; i++) {
    const curr = a[i];
    const prev = a[i - 1];
    const foll = a[i + 1];
    if (curr === "(" && foll !== ")") {
      n++;
    }
    if (curr === ")" && prev !== "(") {
      n++;
    }
  }
  return n;
}
 */


numBalanced(`))()))))()`); 
numBalanced(`()`);
numBalanced(`(()`);
numBalanced(`))()))))()`);
numBalanced(`)))))`);
