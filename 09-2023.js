/* This week’s question:
Given a list of numbers, return all groups of repeating consecutive numbers.

Examples:

> repeatedGroups([1, 2, 2, 4, 5])
[[2, 2]]

> repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9])
[[1, 1], [0, 0], [4, 4, 4], [9, 9]] */

const repeatedGroups = (a) => {
  return a
    .reduce(
      (acc, curr) => {
        let latest = acc.at(-1);

        if (a.indexOf(curr) === 0 || latest[0] === curr) {
          latest.push(curr);
        } else {
          acc.push([curr]);
        }
        return acc;
      },
      [[]]
    )
    .filter((el) => el.length > 1);
};

repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9]);
