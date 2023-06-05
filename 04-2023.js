/* const missingBits = (array) => {
  const completeArray = [];

  for (let i = 0; i < array.length; i++) {
    console.log(completeArray);
    if (array.indexOf(array[i]) == array.length - 1) {
      completeArray.push(array[i]);
    } else if (array[i + 1] !== array[i] + 1) {
      completeArray.push(array[i]);
      completeArray.push(array[i + 1] !== array[i] + 2 ? "..." : array[i] + 1);
    } else completeArray.push(array[i]);
  }

  return completeArray;
}; */

const missingBits = (array) => {
  let completeArray = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const next = array[i + 1];
    completeArray.push(current);
    if (next !== current + 1 && array.indexOf(current) !== array.length - 1) {
      completeArray.push(next === current + 2 ? current + 1 : "...");
    }
  }

  return completeArray;
};

missingBits([1, 2, 3, 4, 20, 21, 22, 23]);

missingBits([1, 2, 3, 5, 6]);

missingBits([1, 3, 20, 27]);

/* Input: array starting from 1 with breaks
Output: array instead of breaks has missing number or …

1. Go through array
2. Create
3. Loop over it 
4. If the following item in the array is not equal to the following number of the current item value (+1) you have to return one of two options
5. If in two numbers you have array item + 2, you push array item + 1
6. Otherwise you push …
7. Finally, in any loop you have to push the array item placed at the current index 



1. i = 1, runs as long as array length minus one
2. If array[index + 1] ==! I+1: push
3. something else —> if array[index +2] === index+2 —> push index+1, else “…” */
