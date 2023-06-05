const sumEveryOther = (num) => {
  //Convert number into an array of "stringified" (!) numbers
  return (
    Array.from(String(num))
      //Select only array items that correspond to numbers
      .filter((item) => !isNaN(item))
      //Sum the numbers in an odd-number index position
      .reduce((sum, currentValue, i) => {
        if (i % 2 === 1) {
          return sum + Number(currentValue);
        }
        return sum;
      }, 0)
  );
};

sumEveryOther(548915381);

/* SOLUTION B (REGEX)
const SumEveryOther = (num) => {
    return Array.from(String(num))
    .filter((item) => /^\d$/.test(item)))
    .reduce((sum, currentValue, index) => {if (i % 2 !==)
    return sum + Number(currentValue)}
    return sum, 0)
}

Explanation of regex:
// -> start and end of regular expression
^ -> beginning of input
$ -> end of input
\d -> matches any digit from 0 to 9


*/
