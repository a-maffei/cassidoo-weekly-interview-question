/* This week’s question:
Given an array arr and integers n and m, remove n elements from the front of the array, and m elements from the back. Assume that n + m <= arr.length.

Example:

> trimArray([1, 2, 3, 4, 5, 6], 2, 1)
> [3, 4, 5]

> trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0)
> [1, 3]

> trimArray([1, 7], 0, 0)
> [1, 7] */



function trimArray(arr, n, m) {
    const startingPoint = arr.length - m;
    const newArray = arr.toSpliced(0,n).toSpliced(startingPoint,m)
    return newArray
}

function trimArray(arr, n, m) {
    return arr.slice(n, arr.length - m)
}