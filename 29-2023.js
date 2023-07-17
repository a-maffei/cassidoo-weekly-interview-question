/* > explodeString('Ahh, abracadabra!')
> ['!',',','A','aaaaa','bb','c','d','hh','rr']

> explodeString('\o/\o/')
> ['//','\\','oo'] */

const explodeString = (string) => {
  const explodeMap = new Map();

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char !== " ") {
      if (!explodeMap.has(char)) {
        explodeMap.set(char, char);
      } else {
        explodeMap.set(char, explodeMap.get(char) + char);
      }
    }
  }

  return Array.from(explodeMap.values()).sort();
};
