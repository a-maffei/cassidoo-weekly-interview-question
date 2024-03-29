/* > arr = [{ name: Joe, num: 9 }, { name: Cami, num: 3 }, { name: Cassidy, num: 4 }]
> mmmPie(arr, 8)
> 2 // 16 pieces needed, pies can be cut into 8 pieces, so 2 pies should be bought*/

const wishes = [
  { name: "Joe", num: 9 },
  { name: "Cami", num: 3 },
  { name: "Cassidy", num: 4 },
];

const mmmPie = (cakeCrew, piecesPerCake) => {
  const desiredPieces = cakeCrew.reduce(
    (totalSlices, wish) => totalSlices + wish.num,
    0
  );

  return Math.ceil(desiredPieces / piecesPerCake);
};

mmmPie(wishes, 8);
mmmPie(wishes, 16);
