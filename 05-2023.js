/* /* Given a positive integer, generate an array in which every element is an array that goes from 1 to the index of that array.

Example:

> generateArrays(4)
> [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]

> generateArrays(1)
> [[1]]


Input: positive integer, 1
Output: array of arrays of integers, 1

- You take the input
- For as many times as the input
- Push an array into an array
- Which you have to create
- For as many times as the index of that array
- Which you have to create
- Push a number inside it
*/

const generateArrays = (n) => {
  let containerArray = [];

  for (let i = 1; i <= n; i++) {
    let miniArray = [];
    containerArray.push(miniArray);

    for (let j = 0; j <= containerArray.indexOf(miniArray); j++) {
      miniArray.push(j + 1);
    }
  }

  return containerArray;
};
